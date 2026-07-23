import React, { useState } from 'react';
import { Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { ModalType } from '../types';

interface HeaderProps {
  onOpenModal: (type: ModalType) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (modalType: ModalType, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (modalType) {
      onOpenModal(modalType);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0c0e12]/90 backdrop-blur-md border-b border-[#2d271d]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer group flex items-center space-x-3"
        >
          <span className="font-cinzel text-3xl sm:text-4xl font-bold tracking-widest gold-gradient-text gold-pwa-glow group-hover:scale-105 transition-transform">
            PWA
          </span>
          <div className="hidden sm:flex flex-col text-[9px] uppercase tracking-widest text-[#a89060] font-sans-body border-l border-[#423722] pl-3 py-0.5">
            <span>Private Wealth</span>
            <span>Academy</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <button
            id="nav-curriculum"
            onClick={() => handleNavClick('curriculum')}
            className="font-cinzel text-xs lg:text-sm font-semibold tracking-widest text-[#d6b776] hover:text-[#fff2d1] transition-colors py-2 relative group"
          >
            CURRICULUM
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d6b776] transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button
            id="nav-faqs"
            onClick={() => handleNavClick('faqs')}
            className="font-cinzel text-xs lg:text-sm font-semibold tracking-widest text-[#d6b776] hover:text-[#fff2d1] transition-colors py-2 relative group"
          >
            FAQS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d6b776] transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button
            id="nav-enroll"
            onClick={() => handleNavClick('enroll')}
            className="font-cinzel text-xs lg:text-sm font-bold tracking-widest text-[#fce196] bg-[#1a1711] hover:bg-[#282218] border border-[#d6b776] px-5 py-2.5 rounded-md gold-border-glow gold-button-hover transition-all flex items-center space-x-1.5"
          >
            <span>ENROLL NOW</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#d6b776]" />
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#d6b776] p-2 rounded-md hover:bg-[#1f1a12] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1015] border-b border-[#31291d] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <button
            id="mobile-nav-curriculum"
            onClick={() => handleNavClick('curriculum')}
            className="block w-full text-left font-cinzel text-sm font-semibold tracking-widest text-[#d6b776] hover:text-[#fff2d1] py-2 border-b border-[#231e16]"
          >
            CURRICULUM
          </button>
          <button
            id="mobile-nav-faqs"
            onClick={() => handleNavClick('faqs')}
            className="block w-full text-left font-cinzel text-sm font-semibold tracking-widest text-[#d6b776] hover:text-[#fff2d1] py-2 border-b border-[#231e16]"
          >
            FAQS
          </button>
          <button
            id="mobile-nav-mastery"
            onClick={() => handleNavClick(null, 'what-you-will-master')}
            className="block w-full text-left font-cinzel text-sm font-semibold tracking-widest text-[#d6b776] hover:text-[#fff2d1] py-2 border-b border-[#231e16]"
          >
            WHAT YOU WILL MASTER
          </button>
          <button
            id="mobile-nav-enroll"
            onClick={() => handleNavClick('enroll')}
            className="w-full text-center font-cinzel text-sm font-bold tracking-widest text-[#111] bg-gradient-to-r from-[#fce196] via-[#d6b776] to-[#b39150] py-3 rounded-md shadow-lg"
          >
            ENROLL NOW
          </button>
        </div>
      )}
    </header>
  );
};
