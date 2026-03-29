"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-1"
      : "text-slate-600 hover:text-blue-600 transition-colors";
  };

  const getMobileLinkClass = (path: string) => {
    return pathname === path
      ? "block text-blue-700 font-semibold py-2"
      : "block text-slate-600 hover:text-blue-600 transition-colors py-2";
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div className="text-xl font-bold tracking-tighter text-blue-900">JHA CONSULTANCY</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-inter tracking-tight text-sm font-medium">
          <Link className={getLinkClass("/")} href="/">Home</Link>
          <Link className={getLinkClass("/services")} href="/services">Services</Link>
          <Link className={getLinkClass("/courses")} href="/courses">Courses</Link>
          <Link className={getLinkClass("/erp")} href="/erp">ERP Solutions</Link>
          <Link className={getLinkClass("/about")} href="/about">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden lg:block text-slate-600 text-sm font-medium hover:opacity-80 transition-all">Contact</Link>
          <Link href="" className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md active:scale-95">
            Solutions
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200/50 px-6 py-4 shadow-lg absolute w-full left-0 top-20">
          <div className="flex flex-col gap-2 font-inter tracking-tight text-base font-medium">
            <Link className={getMobileLinkClass("/")} href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link className={getMobileLinkClass("/services")} href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link className={getMobileLinkClass("/courses")} href="/courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
            <Link className={getMobileLinkClass("/erp")} href="/erp" onClick={() => setIsMobileMenuOpen(false)}>ERP Solutions</Link>
            <Link className={getMobileLinkClass("/about")} href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <div className="border-t border-slate-100 my-2 pt-2">
              <Link href="/contact" className="block text-slate-600 py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
