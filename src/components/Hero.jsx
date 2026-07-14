import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FiArrowDown, FiDownload, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Hero({ onResumeOpen }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const typewriterRef = useRef(null);

  // Typewriter effect
  const roles = ['AI Engineer', 'MERN Stack Developer', 'Full Stack Engineer', 'Problem Solver', 'Open Source Contributor'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const activeRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 75;

    if (!isDeleting && typedText === activeRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? activeRole.substring(0, typedText.length - 1)
            : activeRole.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Three.js setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Custom Shader Material for glowing iridescence + noise wobble
    const vertexShader = `
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      // Simple 3D noise function
      float hash(vec3 p) {
        p = fract(p * 0.3183099 + .1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }
      
      float noise(vec3 x) {
        vec3 i = floor(x);
        vec3 f = fract(x);
        f = f*f*(3.0-2.0*f);
        return mix(mix(mix(hash(i+vec3(0,0,0)), hash(i+vec3(1,0,0)),f.x),
                       mix(hash(i+vec3(0,1,0)), hash(i+vec3(1,1,0)),f.x),f.y),
                   mix(mix(hash(i+vec3(0,0,1)), hash(i+vec3(1,0,1)),f.x),
                       mix(hash(i+vec3(0,1,1)), hash(i+vec3(1,1,1)),f.x),f.y),f.z);
      }

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        
        // Wobble displacement
        float disp = noise(position * 2.5 + uTime * 0.8) * 0.35;
        vec3 newPosition = position + normal * disp;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        // Fresnel glow effect
        float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        
        // Iridescent color shift
        vec3 colorA = vec3(0.678, 0.776, 1.0); // #adc6ff primary
        vec3 colorB = vec3(0.867, 0.718, 1.0); // #ddb7ff secondary
        vec3 colorC = vec3(0.298, 0.843, 0.965); // #4cd7f6 tertiary
        
        // Evolving wave pattern
        float pulse = sin(vPosition.x * 3.0 + vPosition.y * 2.0 + uTime * 1.5) * 0.5 + 0.5;
        vec3 baseColor = mix(colorA, colorB, pulse);
        baseColor = mix(baseColor, colorC, fresnel * 0.5);
        
        // Neon electric veins
        float vein = sin(vPosition.z * 10.0 - uTime * 3.0) * cos(vPosition.y * 8.0 + uTime * 2.0);
        vein = smoothstep(0.7, 0.95, vein);
        vec3 finalColor = baseColor + vec3(vein * 0.4, vein * 0.2, vein * 0.8);
        
        gl_FragColor = vec4(finalColor, fresnel * 0.85 + 0.15);
      }
    `;

    // Setup Icosahedron Geometry
    const geometry = new THREE.IcosahedronGeometry(2.3, 2);
    
    // Save a copy of the original positions for the wobble math
    const originalPositions = geometry.attributes.position.clone();

    // Wireframe Material
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x4d8eff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });

    // Points Material (Glowing Vertex Nodes)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xadc6ff,
      size: 0.1,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const sphereMesh = new THREE.Mesh(geometry, wireframeMaterial);
    const pointsMesh = new THREE.Points(geometry, pointsMaterial);
    
    // Group to hold both so they rotate/wobble together
    const sphereGroup = new THREE.Group();
    sphereGroup.add(sphereMesh);
    sphereGroup.add(pointsMesh);
    scene.add(sphereGroup);

    // Particles background
    const particleCount = 120;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 4.0 + Math.random() * 4;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xadc6ff,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Dynamic Vertex Wobble Displacement
      const posAttr = geometry.attributes.position;
      const tempVec = new THREE.Vector3();
      const origVec = new THREE.Vector3();

      for (let i = 0; i < posAttr.count; i++) {
        origVec.fromBufferAttribute(originalPositions, i);
        
        // Compute organic noise/sine wave displacement along vertex normal
        const normalVec = origVec.clone().normalize();
        const wave = Math.sin(origVec.x * 2.0 + elapsedTime * 1.6) * 
                     Math.cos(origVec.y * 2.0 + elapsedTime * 1.6) * 0.18;
        
        tempVec.copy(origVec).add(normalVec.multiplyScalar(wave));
        posAttr.setXYZ(i, tempVec.x, tempVec.y, tempVec.z);
      }
      posAttr.needsUpdate = true;

      // Rotate group
      sphereGroup.rotation.y = elapsedTime * 0.12;
      sphereGroup.rotation.x = elapsedTime * 0.06;

      // Rotate background particles
      particles.rotation.y = -elapsedTime * 0.02;
      particles.rotation.x = -elapsedTime * 0.01;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      wireframeMaterial.dispose();
      pointsMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };


  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid bg-theme"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-theme via-theme/80 to-transparent -z-10" />

      {/* Three.js Canvas Container */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-[70vh] lg:h-full -z-10 opacity-70 lg:opacity-100 flex items-center justify-center">
        <canvas ref={canvasRef} className="max-w-full max-h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-xl text-left select-none"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-mono text-xs text-primary tracking-widest uppercase">Systems Active</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-4xl sm:text-6xl text-body mb-4 tracking-tight leading-tight"
          >
            Hi, I'm <br />
            <span className="text-gradient-primary">Samir Singh</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            variants={itemVariants}
            className="h-8 mb-8 flex items-center border-l-2 border-primary/50 pl-4"
          >
            <span
              ref={typewriterRef}
              className="text-lg md:text-xl text-muted font-mono typewriter-cursor font-medium"
            >
              {typedText}
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-muted/80 text-sm sm:text-base leading-relaxed mb-10 max-w-lg"
          >
            Engineering robust, highly scalable production web platforms. Bridging complex backend logic
            with interactive 3D elements and modern clean design interfaces.
          </motion.p>

          {/* Magnetic CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <Magnetic strength={0.25}>
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-primary text-on-primary font-bold text-sm hover:bg-primary-fixed transition-all duration-300 glow-primary-hover flex items-center gap-2 font-display cursor-none"
              >
                View Work
                <FiArrowRight className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onResumeOpen();
                }}
                className="px-6 py-3.5 rounded-full border border-outline-variant bg-theme-surface/30 backdrop-blur-sm text-body text-sm font-medium hover:bg-theme-surface hover:border-outline transition-all duration-300 flex items-center gap-2 cursor-none"
              >
                <FiDownload className="w-4 h-4" />
                Get Resume
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-mono text-[10px] tracking-widest uppercase">Explore</span>
        <a href="#about" className="p-2.5 rounded-full border border-theme bg-theme-surface/50 text-body animate-bounce-slow flex items-center justify-center cursor-none">
          <FiArrowDown className="w-4 h-4 text-primary" />
        </a>
      </div>
    </section>
  );
}
