import React, { useState } from 'react';
import { getTech } from '../utils/techMap';

export default function TechChip({ name, className = '' }) {
  const [hovered, setHovered] = useState(false);
  const tech = getTech(name);
  const Icon = tech.icon;

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`badge-tech inline-flex items-center gap-1.5 transition-all duration-300 select-none ${className}`}
      style={{
        borderColor: hovered ? tech.color : 'var(--border)',
        color: hovered ? tech.color : 'var(--text-muted)',
        backgroundColor: hovered ? `${tech.color}15` : 'var(--bg-surface)'
      }}
    >
      {Icon && (
        <Icon 
          className="w-3.5 h-3.5 transition-transform duration-300" 
          style={{ transform: hovered ? 'scale(1.15)' : 'scale(1)' }} 
        />
      )}
      <span>{name}</span>
    </span>
  );
}
