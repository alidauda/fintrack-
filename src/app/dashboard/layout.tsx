"use client";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import MobileOverlay from "@/components/layout/MobileOverlay";
import ReactQueryProvider from "@/utils/react-query";
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
    <div className="h-screen flex overflow-hidden">
    
      <MobileOverlay 
        isOpen={isSidebarOpen && isMobile} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
    
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={toggleSidebar} 
      />
      

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-4 lg:px-8">
          <Header onSidebarToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </div>
        <main className="flex-1 overflow-y-auto px-4 lg:px-8 py-6">
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </main>
      </div>
    </div>
  );
}   
