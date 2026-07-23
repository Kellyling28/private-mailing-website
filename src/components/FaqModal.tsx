import React, { useState } from 'react';
import { X, HelpCircle, ChevronDown, ChevronUp, Search, Send, Check } from 'lucide-react';
import { FAQ_ITEMS } from '../data/courseData';
import { FaqItem } from '../types';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [questionSubmitted, setQuestionSubmitted] = useState(false);

  if (!isOpen) return null;

  const categories = ['All', 'Legal', 'Postal', 'Access', 'Cohort'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    setQuestionSubmitted(true);
    setTimeout(() => {
      setCustomQuestion('');
      setQuestionSubmitted(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0f1117] border border-[#d6b776]/50 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#161922] border-b border-[#2a2419] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#d6b776]/10 rounded-lg border border-[#d6b776]/30">
              <HelpCircle className="w-6 h-6 text-[#d6b776]" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#fce196]">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-[#bca373] font-sans-body">
                Clear Answers regarding legal authority, savings, and intake rules
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

        {/* Filter Bar */}
        <div className="px-6 py-4 bg-[#12141c] border-b border-[#242018] flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#d6b776] text-black font-bold'
                    : 'bg-[#1a1d27] text-gray-300 hover:text-white hover:bg-[#252a38]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-56">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181c27] border border-[#2e281e] rounded-md pl-9 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d6b776]"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="p-6 overflow-y-auto space-y-3 font-sans-body">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-sm">
              No matching questions found for "{searchQuery}".
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpenIndex = expandedIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#141720] border border-[#2b251b] rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedIndex(isOpenIndex ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-[#1a1e2a] transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-gray-100 pr-4">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#d6b776]">
                      {isOpenIndex ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpenIndex && (
                    <div className="px-5 py-4 bg-[#10121a] border-t border-[#231d14] text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}

          {/* Ask custom question form */}
          <div className="mt-8 bg-[#151720] border border-[#30281b] p-5 rounded-xl">
            <h4 className="font-cinzel text-sm font-bold text-[#fce196] mb-1">
              Have a Specific Postal Law Question?
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Ask our Private Wealth Academy support team directly.
            </p>

            {questionSubmitted ? (
              <div className="bg-[#1c281e] border border-[#2e5936] text-[#71cf83] p-3 rounded-md text-xs flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span>Thank you! Your inquiry has been submitted. Our team will review Title 39 citations and respond within 24 hours.</span>
              </div>
            ) : (
              <form onSubmit={handleAskQuestion} className="flex gap-2">
                <input
                  type="text"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder="Type your question here (e.g. Can I use registered mail for...)"
                  className="flex-1 bg-[#1a1d28] border border-[#30291e] rounded-md px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d6b776]"
                />
                <button
                  type="submit"
                  className="bg-[#d6b776] hover:bg-[#fce196] text-black font-bold px-4 py-2 rounded-md text-xs flex items-center space-x-1.5 transition-colors"
                >
                  <span>Submit</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
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
