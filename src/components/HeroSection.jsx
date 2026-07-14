import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(syncSize).observe(canvas);
    }
    syncSize();

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;
void main() {
    vec2 uv = v_texCoord;
    float t = u_time * 0.2;
    vec3 color1 = vec3(0.043, 0.059, 0.098);
    vec3 color2 = vec3(0.086, 0.106, 0.133);
    vec3 accent1 = vec3(0.231, 0.510, 0.965);
    vec3 accent2 = vec3(0.482, 0.247, 0.922);
    float n1 = sin(uv.x * 3.0 + t) * cos(uv.y * 2.0 - t);
    float n2 = sin(uv.y * 4.0 - t * 0.5) * cos(uv.x * 2.0 + t * 0.8);
    float mixFactor = smoothstep(-1.0, 1.0, n1 + n2);
    vec3 base = mix(color1, color2, mixFactor);
    float glow = smoothstep(0.4, 0.8, sin(uv.x * 2.0 + uv.y * 2.0 + t * 0.3) * 0.5 + 0.5);
    vec3 finalColor = mix(base, mix(accent1, accent2, uv.y), glow * 0.15);
    gl_FragColor = vec4(finalColor, 1.0);
}`;

    const compileShader = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram();
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');

    let animId;
    const render = (t) => {
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* WebGL Shader Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-20"
        style={{ display: 'block' }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid -z-10 opacity-50" />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent -z-10" />

      {/* Floating orb accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 -z-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #adc6ff 0%, #ddb7ff 50%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8 fade-up visible">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-mono text-xs text-primary tracking-widest uppercase">Systems Online</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-on-surface mb-4 leading-tight tracking-tight fade-up visible"
            style={{ animationDelay: '100ms' }}>
            Hi, I'm{' '}
            <span className="text-gradient-primary">Samir Singh</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl text-on-surface-variant mb-6 border-l-2 border-primary/50 pl-4 font-medium fade-up visible"
            style={{ animationDelay: '200ms' }}>
            MERN Stack Developer | Full Stack Engineer | Problem Solver
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-on-surface-variant/80 mb-10 max-w-2xl leading-relaxed fade-up visible"
            style={{ animationDelay: '300ms' }}>
            I build scalable, production-ready web applications that bridge complex backend architecture
            with seamless, high-performance user interfaces. Engineering elegant solutions for complex
            technical challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center fade-up visible" style={{ animationDelay: '400ms' }}>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-on-primary font-bold text-sm hover:bg-primary-fixed transition-all duration-300 glow-primary-hover flex items-center gap-2 font-display"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-outline-variant bg-surface-container/30 backdrop-blur-sm text-on-surface text-sm font-medium hover:bg-white/5 hover:border-outline transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-medium hover:bg-primary/20 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 mt-14 fade-up visible" style={{ animationDelay: '500ms' }}>
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '15+', label: 'Projects Built' },
              { value: '5+', label: 'Clients Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-extrabold text-2xl text-gradient-primary">{stat.value}</div>
                <div className="text-xs text-on-surface-variant mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
