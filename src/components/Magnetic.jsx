import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) * strength;
    const y = (clientY - (rect.top + rect.height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 120, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
