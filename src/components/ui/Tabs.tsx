"use client";

import { useState, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;

}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  return (
    <div className={cn("w-full")}>
    
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
                  className={cn(
                  "py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200",
                activeTab === tab.id
                  ? 'border-[#437D8E] text-[#437D8E]'
                  : 'border-transparent text-[#cacfcf] hover:text-[#cacfcf] hover:border-[#cacfcf]'
              )} 
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

     
      <div className="mt-6">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}