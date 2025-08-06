"use client";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import MobileOverlay from "@/components/layout/MobileOverlay";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On desktop, sidebar starts open, on mobile starts closed
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col px-4 lg:px-12">
      <Header onSidebarToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      {/* Mobile Overlay */}
      <MobileOverlay 
        isOpen={isSidebarOpen && isMobile} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <div className="flex flex-1 relative">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onToggle={toggleSidebar} 
        />
        <main className="flex-1 py-7 pl-0 lg:pl-12 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}   
