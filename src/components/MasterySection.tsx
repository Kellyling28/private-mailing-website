import React from 'react';
import { BookOpen, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

interface MasteryCard {
  id: string;
  title: string;
  placeholderName: string;
  iconFallback: React.ReactNode;
  bullets: string[];
}

export const MasterySection: React.FC = () => {
  const masteryData: MasteryCard[] = [
    {
      id: 'legal-book',
      title: 'Reduced Postage & Legal Systems',
      placeholderName: 'PLACEHOLDER_legal-book-icon',
      iconFallback: (
        <div className="relative w-28 h-28 flex items-center justify-center bg-gradient-to-b from-[#241f17] to-[#12100c] rounded-lg border border-[#d6b776]/40 shadow-xl group-hover:border-[#d6b776] transition-all">
          <BookOpen className="w-12 h-12 text-[#d6b776]" />
          <div className="absolute top-2 right-2 text-[10px] font-bold text-[#fce196] border border-[#d6b776]/50 px-1 rounded">LEGAL</div>
        </div>
      ),
      bullets: [
        'Reduced Postage',
        'Restore US legal Systems'
      ]
    },
    {
      id: 'mailbox-lock',
      title: 'System Privatization',
      placeholderName: 'PLACEHOLDER_mailbox-lock-icon',
      iconFallback: (
        <div className="relative w-28 h-28 flex items-center justify-center bg-gradient-to-b from-[#241f17] to-[#12100c] rounded-lg border border-[#d6b776]/40 shadow-xl group-hover:border-[#d6b776] transition-all">
          <Mail className="w-12 h-12 text-[#d6b776]" />
          <div className="absolute -bottom-1 -right-1 bg-[#1a160f] p-1.5 rounded-full border border-[#d6b776]">
            <ShieldCheck className="w-5 h-5 text-[#fce196]" />
          </div>
        </div>
      ),
      bullets: [
        'System Privatization',
        'Historical Laws & Special Procedures'
      ]
    },
    {
      id: 'airmail-stamps',
      title: 'Standcall Laws & Postage',
      placeholderName: 'PLACEHOLDER_airmail-stamps-icon',
      iconFallback: (
        <div className="relative w-28 h-28 flex items-center justify-center bg-gradient-to-b from-[#241f17] to-[#12100c] rounded-lg border border-[#d6b776]/40 shadow-xl group-hover:border-[#d6b776] transition-all">
          <div className="text-center">
            <div className="text-2xl font-cinzel font-bold text-[#fce196] tracking-tighter">USPS</div>
            <div className="text-[9px] uppercase tracking-widest text-[#d6b776]">STAMPS</div>
          </div>
        </div>
      ),
      bullets: [
        'Standcall Laws with low postage stamps.'
      ]
    }
  ];

  return (
    <section id="what-you-will-master" className="relative py-16 sm:py-20 bg-[#0c0e12] border-t border-[#1f1b13]">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#d6b776]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#e5cb88] tracking-tight">
            What You Will Master
          </h2>
          <div className="w-20 h-0.5 bg-[#d6b776]/60 mt-3"></div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {masteryData.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-start p-2 sm:p-4 rounded-xl transition-all duration-300"
            >
              {/* Image Graphic with Placeholder handle */}
              <div className="mb-6 relative">
                <img
                  src={item.placeholderName}
                  alt={item.title}
                  className="w-28 h-28 object-contain rounded-lg hidden"
                  onError={(e) => {
                    // Show fallback when PLACEHOLDER image is not yet loaded
                    const target = e.target as HTMLElement;
                    target.classList.add('hidden');
                    if (target.nextElementSibling) {
                      target.nextElementSibling.classList.remove('hidden');
                    }
                  }}
                />
                {/* Visual Graphic Representation */}
                <div className="block">
                  {item.iconFallback}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 font-sans-body text-sm sm:text-base text-gray-200">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="text-[#d6b776] text-lg leading-none mt-0.5">•</span>
                    <span className="leading-snug text-gray-200 group-hover:text-white transition-colors">
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
