import React, { useState } from 'react';
import { BookOpen, Clock, CheckCircle2, ChevronDown, ChevronUp, Download, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';
import { ModalType } from '../types';

interface CurriculumSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onOpenModal }) => {
  const [expandedModule, setExpandedModule] = useState<string | null>('m1');

  return (
    <section id="curriculum" className="relative py-20 lg:py-28 bg-[#0a0b0e] border-t border-[#181a22] text-gray-100 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d6b776]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1a1711] border border-[#d6b776]/40 rounded-full text-xs font-sans-body font-semibold text-[#d6b776]">
            <Sparkles className="w-3.5 h-3.5 text-[#fce196]" />
            <span>Complete Syllabus &amp; Video Modules</span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#f0e2be] tracking-tight">
            Course Curriculum
          </h2>
          <p className="font-sans-body text-gray-300 text-base sm:text-lg leading-relaxed">
            Deconstruct complex U.S. postal jurisprudence through step-by-step video training, legal precedent breakdowns, and downloadable implementation guides.
          </p>
          <div className="w-24 h-0.5 bg-[#d6b776] mt-4"></div>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-5">
          {COURSE_MODULES.map((module) => {
            const isExpanded = expandedModule === module.id;
            return (
              <div
                key={module.id}
                className="bg-[#10121a] border border-[#232018] hover:border-[#d6b776]/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-left hover:bg-[#151824] transition-colors gap-4"
                >
                  <div className="flex items-start sm:items-center space-x-4 sm:space-x-6">
                    {/* Module Number Badge */}
                    <div className="shrink-0 font-cinzel text-lg sm:text-xl font-bold text-[#fce196] w-12 h-12 rounded-xl bg-[#1c1811] border border-[#d6b776]/50 flex items-center justify-center shadow-inner">
                      0{module.number}
                    </div>

                    <div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-gray-100 tracking-wide">
                        {module.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mt-1.5 font-sans-body">
                        <span className="flex items-center space-x-1 text-[#d6b776]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{module.duration}</span>
                        </span>
                        <span>•</span>
                        <span className="text-gray-300">{module.lessonsCount} Video Lessons</span>
                        <span>•</span>
                        <span className="text-[#a89060] font-semibold">Lifetime Access</span>
                      </div>
                    </div>
                  </div>

                  <div className="self-end sm:self-center shrink-0 flex items-center space-x-2 text-[#d6b776] text-xs font-semibold uppercase tracking-wider">
                    <span>{isExpanded ? 'Collapse' : 'View Module'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Module Details */}
                {isExpanded && (
                  <div className="px-6 py-6 sm:px-8 sm:py-7 bg-[#0c0d13] border-t border-[#1e1c17] space-y-6">
                    <p className="font-sans-body text-sm sm:text-base text-gray-200 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-cinzel text-xs font-bold text-[#d6b776] uppercase tracking-wider">
                        Core Topics &amp; Takeaways Covered:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {module.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3 bg-[#13151f] border border-[#212433] p-3.5 rounded-xl text-xs sm:text-sm text-gray-200 font-sans-body"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#d6b776] shrink-0 mt-0.5" />
                            <span className="leading-snug">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legal Library & Enrollment Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#17140e] via-[#241f17] to-[#17140e] border border-[#d6b776]/50 rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#2d261b] rounded-xl border border-[#d6b776]/40 shrink-0">
              <Download className="w-8 h-8 text-[#fce196]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#fce196]">
                Includes Full Downloadable Legal Notice &amp; Template Library
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                Get instant access to 12 ready-to-use notice templates, Title 39 USC citation index, and private mail endorsement guides alongside all video modules.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenModal('enroll')}
            className="shrink-0 font-cinzel text-xs sm:text-sm font-bold tracking-wider text-[#111] bg-gradient-to-r from-[#fce196] via-[#d6b776] to-[#b89552] hover:brightness-110 px-8 py-4 rounded-lg shadow-xl transition-all flex items-center space-x-2 group cursor-pointer"
          >
            <span>ENROLL IN COHORT 03</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
