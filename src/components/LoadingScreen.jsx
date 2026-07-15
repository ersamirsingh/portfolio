import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState('');
  const fullText = 'samir_singh --init --portfolio';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setText(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0f141b] z-[9999] flex flex-col items-center justify-center font-mono p-6 text-[#adc6ff]"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="w-full max-w-md bg-[#1b2027] border border-white/5 rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-[#252a32] px-4 py-2 flex items-center gap-2 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-error" />
          <div className="w-3 h-3 rounded-full bg-[#fdd835]" />
          <div className="w-3 h-3 rounded-full bg-[#4caf50]" />
          <span className="text-xs text-on-surface-variant/60 ml-2">bash</span>
        </div>
        <div className="p-6 min-h-[160px] flex flex-col justify-between">
          <div className="space-y-2 text-sm">
            <p className="text-on-surface-variant/40">// Establishing secure connection...</p>
            <p className="flex items-center">
              <span className="text-secondary mr-2">visitor@singh:~$</span>
              <span className="typewriter-cursor">{text}</span>
            </p>
          </div>
          <div className="w-full bg-[#0f141b] rounded-full overflow-hidden mt-6">
            <div className="loader-bar w-full h-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
