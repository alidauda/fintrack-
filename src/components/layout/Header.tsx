"use client";
import Image from "next/image";
import { LayoutGrid, Menu, Search } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface HeaderProps {
  onSidebarToggle?: () => void;
  isSidebarOpen?: boolean;
}

export default function Header({ onSidebarToggle, isSidebarOpen = false }: HeaderProps) {
  return (
    <header className="h-16 text-text-primary flex items-center justify-between py-4">
      <div className="flex items-center gap-7">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Menu 
            size={24} 
            className={cn(
              "cursor-pointer hover:opacity-80 transition-opacity",
            
            )}
            onClick={onSidebarToggle}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={112}
            height={32}
            className="cursor-pointer"
          />
        </motion.div>
      </div>
      <div className="flex items-center gap-7">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Search size={24} className="cursor-pointer" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <LayoutGrid size={24} className="cursor-pointer" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Image
            alt="User avatar"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            width={40}
            height={40}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          />
        </motion.div>
      </div>
    </header>
  );
}