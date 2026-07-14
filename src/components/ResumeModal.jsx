import React from 'react';
import { motion } from 'framer-motion';
import { FiX, FiExternalLink, FiDownload } from 'react-icons/fi';
import Magnetic from './Magnetic';

const RESUME_VIEW_URL = "https://docs.google.com/document/d/1EwbCDUV9b5O-f5nKhsLSpDJbn0ANA5PM/edit?usp=sharing&ouid=115946612771525240815&rtpof=true&sd=true";
const RESUME_DOWNLOAD_URL = "https://docs.google.com/document/d/1EwbCDUV9b5O-f5nKhsLSpDJbn0ANA5PM/export?format=pdf";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black z-10 cursor-none"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-theme-surface border border-theme rounded-2xl p-6 shadow-2xl z-20 text-center select-none"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-theme border border-theme text-muted hover:text-body transition-colors cursor-none"
          aria-label="Close resume options"
        >
          <FiX className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
          <FiDownload className="w-6 h-6" />
        </div>

        <h3 className="font-display font-bold text-lg text-body mb-2">Resume Actions</h3>
        <p className="text-xs text-muted mb-6">
          Would you like to view the resume document online or download it as a PDF?
        </p>

        <div className="flex flex-col gap-3">
          <Magnetic strength={0.15} className="w-full">
            <a
              href={RESUME_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-primary text-on-primary text-center font-bold text-sm hover:bg-primary-fixed transition-all duration-300 flex items-center justify-center gap-2 cursor-none"
            >
              <FiExternalLink className="w-4 h-4" />
              Show Resume
            </a>
          </Magnetic>

          <Magnetic strength={0.15} className="w-full">
            <a
              href={RESUME_DOWNLOAD_URL}
              onClick={onClose}
              className="w-full py-3 rounded-xl border border-theme bg-theme text-body text-center font-semibold text-sm hover:bg-theme-surface transition-all duration-300 flex items-center justify-center gap-2 cursor-none"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </div>
  );
}
