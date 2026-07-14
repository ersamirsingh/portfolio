import { motion } from 'framer-motion';
import { useTiltEffect } from '../../hooks/useTiltEffect';

export default function TiltCard({ children, className = '', maxTilt = 6 }) {
  const { tiltStyle, handleMouseMove, handleMouseLeave } = useTiltEffect(maxTilt);

  return (
    <motion.div
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card-hover ${className}`}
    >
      {children}
    </motion.div>
  );
}
