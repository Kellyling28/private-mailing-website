import React from 'react';
import { Shield, Lock, Scale } from 'lucide-react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-[#090a0d] border-t border-[#1f1b13] text-gray-400 font-sans-body py-12 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[#1f1a12] pb-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="font-cinzel text-2xl font-bold tracking-widest gold-gradient-text gold-pwa-glow">
                PWA
              </span>
              <span className="text-xs uppercase tracking-widest text-[#a89060] font-sans-body border-l border-[#3d321d] pl-3 py-0.5">
                Private Wealth Academy
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              Empowering individuals with actionable insights into U.S. postal laws, historical statutory privileges, and mailbox privacy protection.
            </p>
          </div>

          {/* Nav quick links */}
          <div className="flex flex-wrap gap-6 font-cinzel text-xs tracking-wider text-[#d6b776]">
            <button 
              onClick={() => onOpenModal('curriculum')}
              className="hover:text-white transition-colors"
            >
              CURRICULUM
            </button>
            <button 
              onClick={() => onOpenModal('faqs')}
              className="hover:text-white transition-colors"
            >
              FAQS
            </button>
            <button 
              onClick={() => onOpenModal('enroll')}
              className="hover:text-white transition-colors"
            >
              ENROLL NOW
            </button>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="text-[11px] leading-relaxed text-gray-500 space-y-2 bg-[#0d0f14] p-4 rounded-xl border border-[#1d1912]">
          <div className="flex items-center space-x-2 text-[#bca373] font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Educational Disclaimer:</span>
          </div>
          <p>
            The information contained in the Private Mailing Secrets course is provided solely for educational, informational, and historical research purposes. Private Wealth Academy is an independent educational publisher and does not provide legal, financial, or tax advice. Students should review Title 39 USC and local regulations or consult qualified legal professionals regarding specific personal applications.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 pt-2 gap-3">
          <p>© {new Date().getFullYear()} Private Wealth Academy. All Rights Reserved.</p>
          <div className="flex space-x-4 text-gray-400 text-xs">
            <span className="hover:text-white cursor-pointer" onClick={() => onOpenModal('faqs')}>Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => onOpenModal('faqs')}>Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => onOpenModal('faqs')}>Contact Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
