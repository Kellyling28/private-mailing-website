import React from 'react';
import { ArrowRight, Lock, Sparkles, Clock, ShieldAlert } from 'lucide-react';
import { ModalType } from '../types';

interface HeroSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const bgImageUrl = "https://assets.cdn.filesafe.space/OpZ9q7lKKix09WC246yU/media/6a4f54d2708c41d4df1c1986.png";

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0a0b0e]">
      {/* Background Image Layer with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageUrl}
          alt="Private Mailing Secrets Hero Background"
          className="w-full h-full object-cover object-[center_top] sm:object-[75%_top] lg:object-[85%_top] filter brightness-95 contrast-105"
        />
        {/* Gradient dark mask to ensure readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0e] via-[#0a0b0e]/90 md:via-[#0a0b0e]/75 to-transparent w-full lg:w-3/4"></div>
        {/* Subtle Top & Bottom vignette gradients */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a0b0e]/90 via-[#0a0b0e]/40 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0b0e] to-transparent"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-20 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Main Title */}
          <div className="space-y-1">
            <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f3e8c8] leading-[1.08] drop-shadow-md">
              PRIVATE MAILING
            </h1>
            <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight gold-gradient-text leading-[1.08]">
              SECRETS
            </h1>
          </div>

          {/* Subheading */}
          <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl italic font-semibold text-[#dfc384] leading-tight">
            Master Little-Known Postal Laws to Reduce Costs &amp; Protect Privacy
          </h2>

          {/* Body Description */}
          <p className="font-sans-body text-gray-200 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl text-shadow-sm">
            A course from Private Wealth Academy on historical U.S. postal strategies and legal interpretations. Use legal strategies not widely known to{' '}
            <strong className="text-[#fce196] font-semibold tracking-wide">
              SEND PHYSICAL MAIL
            </strong>{' '}
            more cheaply, under special rules, or privatize your system.
          </p>

          {/* CTA & Cohort Details */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              id="hero-enroll-button"
              onClick={() => onOpenModal('enroll')}
              className="group cursor-pointer font-cinzel text-xs sm:text-sm font-bold tracking-wider text-[#fce196] bg-[#1a1711]/90 hover:bg-[#2c2417] border border-[#d6b776] px-6 sm:px-8 py-4 rounded-md gold-border-glow gold-button-hover transition-all flex items-center space-x-3"
            >
              <span>ENROLL &amp; SECURE YOUR ACCESS</span>
              <ArrowRight className="w-4 h-4 text-[#d6b776] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Intake text */}
            <div className="font-sans-body text-xs sm:text-sm space-y-0.5 text-[#bca373] border-l-2 border-[#52432a] pl-3 py-1">
              <div className="flex items-center space-x-1.5 font-medium text-[#e3cf9a]">
                <Clock className="w-3.5 h-3.5 text-[#d6b776]" />
                <span>Next intake starts: <strong className="text-white font-bold">03</strong></span>
              </div>
              <p className="text-gray-400 text-xs">
                Enrollment for this cohort limited
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
