import React from 'react';
import { Scale } from 'lucide-react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-[#090a0d] border-t border-[#181a20] text-gray-400 font-sans-body py-10 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Educational Disclaimer Card */}
        <div className="bg-[#0c0e13] border border-[#1d202a] rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center space-x-2 text-[#d6b776] font-semibold text-sm sm:text-base">
            <Scale className="w-4 h-4 text-[#d6b776] shrink-0" />
            <span className="tracking-wide">Educational Disclaimer:</span>
          </div>
          <p className="text-[#8890a4] text-xs sm:text-sm leading-relaxed mt-3 font-normal">
            The information contained in the Private Mailing Secrets course is provided solely for educational, informational, and historical research purposes. Private Wealth Academy is an independent educational publisher and does not provide legal, financial, or tax advice. Students should review Title 39 USC and local regulations or consult qualified legal professionals regarding specific personal applications.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#80879a] px-1 gap-4 font-normal">
          <p>© {new Date().getFullYear()} Private Wealth Academy. All Rights Reserved.</p>
          <div className="flex items-center space-x-4 sm:space-x-6 text-[#9a9fb1]">
            <button 
              onClick={() => onOpenModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#454a58]">•</span>
            <button 
              onClick={() => onOpenModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-[#454a58]">•</span>
            <button 
              onClick={() => onOpenModal('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

