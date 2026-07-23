import React, { useState } from 'react';
import { BookOpen, Mail, ShieldCheck } from 'lucide-react';
import { ModalType } from '../types';

interface MasterySectionProps {
  onOpenModal?: (type: ModalType) => void;
}

interface MasteryCard {
  id: string;
  placeholderName: string;
  bullets: string[];
  fallbackUI: React.ReactNode;
}

export const MasterySection: React.FC<MasterySectionProps> = ({ onOpenModal }) => {
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  const masteryCards: MasteryCard[] = [
    {
      id: 'card-1',
      placeholderName: 'PLACEHOLDER_legal-book-icon',
      bullets: ['Reduced Postage', 'Restore US legal Systems'],
      fallbackUI: (
        <div className="w-36 h-36 bg-[#121317] border border-[#d6b776]/40 rounded-xl relative flex items-center justify-center p-4 shadow-lg group-hover:border-[#d6b776] transition-colors">
          {/* Badge */}
          <div className="absolute top-2.5 right-2.5 border border-[#d6b776]/70 px-1.5 py-0.5 rounded text-[9px] font-sans-body tracking-wider text-[#d6b776] bg-[#1a1c22]">
            LEGAL
          </div>
          {/* Center Book Icon */}
          <BookOpen className="w-10 h-10 text-[#d6b776] stroke-[1.5]" />
        </div>
      )
    },
    {
      id: 'card-2',
      placeholderName: 'PLACEHOLDER_mailbox-lock-icon',
      bullets: ['System Privatization', 'Historical Laws & Special Procedures'],
      fallbackUI: (
        <div className="w-36 h-36 bg-[#121317] border border-[#d6b776]/40 rounded-xl relative flex items-center justify-center p-4 shadow-lg group-hover:border-[#d6b776] transition-colors">
          {/* Center Mail Icon */}
          <Mail className="w-10 h-10 text-[#d6b776] stroke-[1.5]" />
          {/* Shield Badge Overlay at bottom right */}
          <div className="absolute -bottom-2 -right-2 bg-[#121317] border border-[#d6b776] p-1.5 rounded-full shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#d6b776]" />
          </div>
        </div>
      )
    },
    {
      id: 'card-3',
      placeholderName: 'PLACEHOLDER_airmail-stamps-icon',
      bullets: ['Standcall Laws with low postage stamps.'],
      fallbackUI: (
        <div className="w-36 h-36 bg-[#121317] border border-[#d6b776]/40 rounded-xl relative flex flex-col items-center justify-center p-4 shadow-lg group-hover:border-[#d6b776] transition-colors text-center">
          <div className="font-cinzel text-2xl font-bold text-[#fce196] tracking-tight">
            USPS
          </div>
          <div className="font-sans-body text-[9px] uppercase tracking-widest text-[#d6b776] mt-0.5">
            STAMPS
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="what-you-will-master" className="relative py-16 sm:py-24 bg-[#0a0b0e] border-t border-[#1a1711]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#f0e2be] tracking-tight">
            What You Will Master
          </h2>
          {/* Golden accent bar under title */}
          <div className="w-24 h-0.5 bg-[#d6b776] mt-4"></div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
          {masteryCards.map((card) => (
            <div key={card.id} className="group flex flex-col items-start space-y-6">
              
              {/* Icon / Image Container */}
              <div className="relative">
                {!imageErrorMap[card.id] ? (
                  <img
                    src={card.placeholderName}
                    alt={card.placeholderName}
                    onError={() => handleImageError(card.id)}
                    className="w-36 h-36 object-contain rounded-xl"
                  />
                ) : (
                  card.fallbackUI
                )}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 font-sans-body text-base text-gray-200 leading-snug">
                {card.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-[#d6b776] text-xl leading-none mt-0.5">•</span>
                    <span className="text-gray-200 group-hover:text-white transition-colors">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


