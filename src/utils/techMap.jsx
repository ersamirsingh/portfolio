import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiFastapi, SiGraphql, SiOpenai,
  SiGooglegemini, SiLangchain, SiPostgresql, SiMongodb, SiRedis,
  SiPrisma, SiMongoose, SiGit, SiDocker, SiGithubactions,
  SiLinux, SiStripe, SiSocketdotio, SiMeta, SiGoogle,
  SiJest, SiMysql, SiKubernetes, SiGithub, SiLanggraph, SiIeee
} from 'react-icons/si';

import {
  FaAws, FaBrain, FaRobot, FaDatabase
} from 'react-icons/fa';

export const techMap = {
  // Frontend
  'react.js': { icon: SiReact, color: '#61DAFB' },
  'react': { icon: SiReact, color: '#61DAFB' },
  'next.js': { icon: SiNextdotjs, color: '#FFFFFF' },
  'next.js 14': { icon: SiNextdotjs, color: '#FFFFFF' },
  'react & next.js development': { icon: SiNextdotjs, color: '#FFFFFF' },
  'typescript': { icon: SiTypescript, color: '#3178C6' },
  'tailwind css': { icon: SiTailwindcss, color: '#06B6D4' },
  'tailwindcss': { icon: SiTailwindcss, color: '#06B6D4' },
  'redux toolkit': { icon: SiRedux, color: '#764ABC' },
  
  // Backend
  'node.js': { icon: SiNodedotjs, color: '#339933' },
  'node.js & express backend': { icon: SiNodedotjs, color: '#339933' },
  'express.js': { icon: SiExpress, color: '#FFFFFF' },
  'express': { icon: SiExpress, color: '#FFFFFF' },
  'fastapi': { icon: SiFastapi, color: '#009688' },
  'rest & graphql': { icon: SiGraphql, color: '#E10098' },
  'graphql': { icon: SiGraphql, color: '#E10098' },
  'microservices': { icon: SiKubernetes, color: '#326CE5' },
  'websockets': { icon: SiSocketdotio, color: '#010101' },
  'jest': { icon: SiJest, color: '#C21325' },
  
  // AI & LLM
  'openai api': { icon: SiOpenai, color: '#10A37F' },
  'google gemini': { icon: SiGooglegemini, color: '#8E75C8' },
  'langchain': { icon: SiLangchain, color: '#13382C' },
  'langgraph': { icon: SiLanggraph, color: '#F46B45' },
  'rag': { icon: FaBrain, color: '#4CD7F6' },
  'llm integration & rag systems': { icon: FaBrain, color: '#4CD7F6' },
  'ai agents': { icon: FaRobot, color: '#DDB7FF' },
  
  // Database
  'postgresql': { icon: SiPostgresql, color: '#4169E1' },
  'sql & nosql databases': { icon: FaDatabase, color: '#4CD7F6' },
  'mongodb': { icon: SiMongodb, color: '#47A248' },
  'redis': { icon: SiRedis, color: '#DC382D' },
  'prisma orm': { icon: SiPrisma, color: '#5A67D8' },
  'prisma': { icon: SiPrisma, color: '#5A67D8' },
  'mongoose': { icon: SiMongoose, color: '#880000' },
  'mysql': { icon: SiMysql, color: '#4479A1' },
  
  // DevOps
  'git & github': { icon: SiGit, color: '#F05032' },
  'github': { icon: SiGithub, color: '#FFFFFF' },
  'docker': { icon: SiDocker, color: '#2496ED' },
  'docker & aws deployment': { icon: SiDocker, color: '#2496ED' },
  'aws (ec2, s3)': { icon: FaAws, color: '#FF9900' },
  'aws': { icon: FaAws, color: '#FF9900' },
  'ci/cd pipelines': { icon: SiGithubactions, color: '#2088FF' },
  'linux shell': { icon: SiLinux, color: '#FCC624' },
  
  // Other / Integration
  'stripe': { icon: SiStripe, color: '#635BFF' },
  
  // Issuers / Internships / Achievements
  'meta': { icon: SiMeta, color: '#044AF4' },
  'google': { icon: SiGoogle, color: '#4285F4' },
  'ieee': { icon: SiIeee, color: '#00629B' },
  'edutech (virtual)': { icon: null, color: '#FF6B6B' },
  'nit delhi': { icon: null, color: '#FF5A00' },
  'synergix': { icon: null, color: '#008080' },
  'college fest': { icon: null, color: '#8A2BE2' }
};

export const getTech = (name) => {
  if (!name) return { icon: null, color: '#c2c6d6' };
  const key = name.toLowerCase().trim();
  return techMap[key] || { icon: null, color: '#c2c6d6' };
};
