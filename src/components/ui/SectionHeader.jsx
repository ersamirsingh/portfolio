import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, label }) {
  return (
    <div className="mb-16 text-center md:text-left relative">
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label inline-block mb-3 font-semibold tracking-widest text-xs"
        >
          {label}
        </motion.span>
      )}
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-3xl md:text-5xl text-body relative tracking-tight"
        >
          <span className="relative z-10">{title}</span>
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent rounded-full max-w-[80px]" />
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-sm md:text-base max-w-md md:text-right font-medium leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
