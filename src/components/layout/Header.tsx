"use client";
import Image from "next/image";
import { LayoutGrid, Menu, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface HeaderProps {
  onSidebarToggle?: () => void;
  isSidebarOpen?: boolean;
}

export default function Header({ onSidebarToggle, isSidebarOpen = false }: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <header className="h-16 text-text-primary flex items-center justify-between py-4 border-b border-gray-100">
      <div className="flex items-center gap-4">
        
        {isMobile && !isSidebarOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={onSidebarToggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={20} className="text-gray-600" />
          </motion.button>
        )}
        
      
      </div>
      
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Search size={20} className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <LayoutGrid size={20} className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Image
            alt="User avatar"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            width={32}
            height={32}
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white shadow-sm"
          />
        </motion.div>
      </div>
    </header>
  );
}