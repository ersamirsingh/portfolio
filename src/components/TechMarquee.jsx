import React from 'react';
import TechChip from './TechChip';

const row1 = [
  'React.js', 
  'Next.js 14', 
  'TypeScript', 
  'Tailwind CSS', 
  'Redux Toolkit', 
  'Node.js', 
  'Express.js', 
  'FastAPI', 
  'GraphQL', 
  'OpenAI API',
  'LangGraph'
];

const row2 = [
  'Google Gemini', 
  'LangChain', 
  'PostgreSQL', 
  'MongoDB', 
  'Redis', 
  'Prisma ORM', 
  'Mongoose', 
  'Docker', 
  'AWS (EC2, S3)', 
  'Git & GitHub', 
  'Stripe'
];

export default function TechMarquee() {
  return (
    <div className="w-full py-6 space-y-4 overflow-hidden relative select-none">
      {/* Edge gradients to blend marquee with dark background */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-theme to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-theme to-transparent z-20 pointer-events-none" />

      {/* Row 1: Moves Left */}
      <div className="flex overflow-hidden w-full group">
        <div className="flex gap-6 whitespace-nowrap animate-marquee-left group-hover:[animation-play-state:paused] py-1.5">
          {/* Double content to achieve seamless looping */}
          {[...row1, ...row1].map((tech, idx) => (
            <TechChip key={`r1-${tech}-${idx}`} name={tech} className="text-xs sm:text-sm px-4 py-2 border border-theme" />
          ))}
        </div>
      </div>

      {/* Row 2: Moves Right */}
      <div className="flex overflow-hidden w-full group">
        <div className="flex gap-6 whitespace-nowrap animate-marquee-right group-hover:[animation-play-state:paused] py-1.5">
          {[...row2, ...row2].map((tech, idx) => (
            <TechChip key={`r2-${tech}-${idx}`} name={tech} className="text-xs sm:text-sm px-4 py-2 border border-theme" />
          ))}
        </div>
      </div>
    </div>
  );
}
