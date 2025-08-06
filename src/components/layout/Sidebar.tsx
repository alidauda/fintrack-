"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/utils/cn";
import siderBar from "@/constant/route/sidebar";

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function Sidebar({ isOpen = true, onToggle }: SidebarProps) {
  const route = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sidebarVariants: Variants = {
    open: {
      width: isMobile ? '16rem' : '16rem',
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
        duration: 0.6
      }
    },
    closed: {
      width: isMobile ? '16rem' : '4rem',
      x: isMobile ? '-100%' : 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
        duration: 0.4
      }
    }
  };

  const contentVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hover: {
      x: 4,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  // On mobile, don't render the sidebar at all when closed
  if (isMobile && !isOpen) {
    return null;
  }

  return (
    <motion.aside
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      className={cn(
        isMobile ? 'fixed left-0 top-0' : 'relative',
        "z-50 h-full bg-background "
      )}
    >
      <div className="flex flex-col h-full py-7">
        {/* Navigation Menu */}
        {isOpen && (
        <div className="flex flex-col gap-2 px-4">
          {siderBar.map((item, index) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3
              }}
            >
              <Link
                href={item.route}
                className={cn(
                  "w-full block text-text-primary px-5 py-1.5 rounded-lg transition-all duration-200",
                  route === item.route &&
                    "bg-background-secondary rounded-full text-text-secondary "
                )}
                onClick={() => {
                  // Close sidebar on mobile when clicking a link
                  if (isMobile && onToggle) {
                    onToggle();
                  }
                }}
              >
                <AnimatePresence>
              
                    <motion.span
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={contentVariants}
                      className="block"
                    >
                      {item.name}
                    </motion.span>
                 
                </AnimatePresence>
              </Link>
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </motion.aside>
  );
}