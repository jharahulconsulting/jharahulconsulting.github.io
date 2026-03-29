"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path 
      ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-1" 
      : "text-slate-600 hover:text-blue-600 transition-colors";
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
            <div className="text-xl font-bold tracking-tighter text-blue-900">JHA CONSULTANCY</div>
            
            <div className="hidden md:flex items-center gap-8 font-inter tracking-tight text-sm font-medium">
                <Link className={getLinkClass("/")} href="/">Home</Link>
                <Link className={getLinkClass("/services")} href="/services">Services</Link>
                <Link className={getLinkClass("/courses")} href="/courses">Courses</Link>
                <Link className={getLinkClass("/erp")} href="/erp">ERP Solutions</Link>
                <Link className={getLinkClass("/about")} href="/about">About</Link>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/contact" className="hidden lg:block text-slate-600 text-sm font-medium hover:opacity-80 transition-all">Contact</Link>
                <button
                    className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md active:scale-95">
                    Solutions
                </button>
            </div>
        </div>
    </nav>
  );
}
