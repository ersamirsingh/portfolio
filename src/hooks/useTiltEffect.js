import { useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

export function useTiltEffect(maxTilt = 6) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map normalized mouse coordinates [-0.5, 0.5] to rotation angles [-maxTilt, maxTilt]
  // We flip the y coordinates for intuitive tilt direction (moving mouse up tilts it forward/upward)
  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Apply spring physics for extra smooth inertia
  const springConfig = { damping: 20, stiffness: 120, mass: 0.4 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const tiltStyle = shouldReduceMotion
    ? {}
    : {
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: 'preserve-3d',
      };

  return {
    tiltStyle,
    handleMouseMove,
    handleMouseLeave,
  };
}
