import React, { useState } from 'react';
import { X, BookOpen, Clock, CheckCircle2, ChevronDown, ChevronUp, Download } from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';
import { ModalType } from '../types';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: (type: ModalType) => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose, onOpenModal }) => {
  const [expandedModule, setExpandedModule] = useState<string | null>('m1');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0f1117] border border-[#d6b776]/50 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#161922] border-b border-[#2a2419] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#d6b776]/10 rounded-lg border border-[#d6b776]/30">
              <BookOpen className="w-6 h-6 text-[#d6b776]" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#fce196]">
                Course Curriculum
              </h3>
              <p className="text-xs text-[#bca373] font-sans-body">
                4 Comprehensive Modules • 8+ Hours of Video &amp; Legal Reference Material
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-[#222733] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-4 font-sans-body">
          {COURSE_MODULES.map((module) => {
            const isExpanded = expandedModule === module.id;
            return (
              <div
                key={module.id}
                className="bg-[#141720] border border-[#2b251b] rounded-xl overflow-hidden transition-all duration-200"
              >
                {/* Module Header Toggle */}
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#1a1e2a] transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-cinzel text-lg font-bold text-[#d6b776] w-8 h-8 rounded-full bg-[#272116] border border-[#52442d] flex items-center justify-center">
                      0{module.number}
                    </span>
                    <div>
                      <h4 className="font-cinzel text-base sm:text-lg font-bold text-gray-100">
                        {module.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-[#d6b776]" />
                          <span>{module.duration}</span>
                        </span>
                        <span>•</span>
                        <span>{module.lessonsCount} Video Lessons</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#d6b776]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Module Body */}
                {isExpanded && (
                  <div className="px-6 py-4 bg-[#11131a] border-t border-[#231d14] space-y-4">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="text-xs uppercase tracking-wider font-semibold text-[#d6b776]">
                        Core Key Takeaways:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {module.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-[#d6b776] shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Included Legal Resources Banner */}
          <div className="bg-gradient-to-r from-[#1c1811] via-[#241f17] to-[#1c1811] border border-[#594828] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="flex items-center space-x-3">
              <Download className="w-8 h-8 text-[#fce196] shrink-0" />
              <div>
                <h5 className="font-cinzel text-sm font-bold text-[#fce196]">
                  Bonus Downloadable Library Included
                </h5>
                <p className="text-xs text-gray-300">
                  Includes 12 pre-formatted legal notice templates, citation indexes, and Title 39 reference cheatsheet.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenModal('enroll');
              }}
              className="shrink-0 font-cinzel text-xs font-bold text-[#111] bg-gradient-to-r from-[#fce196] to-[#d6b776] px-5 py-2.5 rounded-md hover:brightness-110 transition-all"
            >
              ENROLL IN COHORT
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#13151d] border-t border-[#231e15] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-[#1e222e] rounded-md transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
