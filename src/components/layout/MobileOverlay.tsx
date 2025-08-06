"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";

interface MobileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileOverlay({ isOpen, onClose }: MobileOverlayProps) {
  const overlayVariants: Variants = {
    open: {
      opacity: 1,
      backdropFilter: "blur(4px)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
          style={{
            backdropFilter: "blur(4px)"
          }}
        />
      )}
    </AnimatePresence>
  );
}
