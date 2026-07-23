import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Mail, Lock, CheckCircle2 } from 'lucide-react';
import { ModalType } from '../types';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: 'privacy' | 'terms' | 'contact';
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  activeTab: initialTab = 'privacy'
}) => {
  const [tab, setTab] = useState<'privacy' | 'terms' | 'contact'>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setTab(initialTab);
    }
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#0c0e14] border border-[#2b2518] rounded-2xl shadow-2xl overflow-hidden flex flex-col text-gray-200">
        
        {/* Modal Header */}
        <div className="px-6 py-5 sm:px-8 border-b border-[#231f16] bg-[#12141c] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#1f1b13] border border-[#d6b776]/40 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-[#fce196]" />
            </div>
            <div>
              <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#fce196] tracking-wide">
                Private Wealth Academy
              </h2>
              <p className="font-sans-body text-xs text-gray-400">
                Legal Compliance, Privacy Practices &amp; Student Support
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white bg-[#191c28] hover:bg-[#25293c] border border-[#2c291d] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#1f1a12] bg-[#0d0f16] px-6 sm:px-8 gap-2">
          <button
            onClick={() => setTab('privacy')}
            className={`py-3.5 px-4 font-cinzel text-xs font-semibold tracking-wider transition-all border-b-2 cursor-pointer flex items-center space-x-2 ${
              tab === 'privacy'
                ? 'border-[#d6b776] text-[#fce196] bg-[#161824]'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>PRIVACY POLICY</span>
          </button>

          <button
            onClick={() => setTab('terms')}
            className={`py-3.5 px-4 font-cinzel text-xs font-semibold tracking-wider transition-all border-b-2 cursor-pointer flex items-center space-x-2 ${
              tab === 'terms'
                ? 'border-[#d6b776] text-[#fce196] bg-[#161824]'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>TERMS OF SERVICE</span>
          </button>

          <button
            onClick={() => setTab('contact')}
            className={`py-3.5 px-4 font-cinzel text-xs font-semibold tracking-wider transition-all border-b-2 cursor-pointer flex items-center space-x-2 ${
              tab === 'contact'
                ? 'border-[#d6b776] text-[#fce196] bg-[#161824]'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT SUPPORT</span>
          </button>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans-body text-sm text-gray-300 leading-relaxed">
          {tab === 'privacy' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-[#211e17] pb-4">
                <h3 className="font-cinzel text-xl font-bold text-[#fce196] mb-1">
                  Privacy Policy &amp; Data Protection
                </h3>
                <p className="text-xs text-[#a89060]">Last Updated: January 2026</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-cinzel text-sm font-bold text-gray-100 uppercase tracking-wider text-[#d6b776]">
                  1. Information We Collect
                </h4>
                <p>
                  Private Wealth Academy (&quot;PWA&quot;) respects your privacy and is strictly committed to protecting personal details collected during student enrollment. We collect minimal identification data including your name, email address, phone number, and payment information provided at checkout.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-cinzel text-sm font-bold text-gray-100 uppercase tracking-wider text-[#d6b776]">
                  2. Use of Student Data
                </h4>
                <p>
                  Your information is exclusively used for course delivery, authenticating student dashboard access, delivering video modules, issuing updates regarding Title 39 statutory legal updates, and processing transaction fees.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-300">
                  <li>We NEVER sell, trade, or rent student lists to external commercial brokers.</li>
                  <li>All mailing records and correspondence remain encrypted using industry-standard protocols.</li>
                  <li>Payment details are tokenized securely through PCI-compliant payment gateways.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-cinzel text-sm font-bold text-gray-100 uppercase tracking-wider text-[#d6b776]">
                  3. Cookies &amp; Digital Tracking
                </h4>
                <p>
                  Our platform uses essential session cookies to keep you securely logged into your course dashboard. We do not employ intrusive cross-site tracking scripts or behavioral advertising cookies.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-cinzel text-sm font-bold text-gray-100 uppercase tracking-wider text-[#d6b776]">
                  4. Your Rights
                </h4>
                <p>
                  Students may request access to, correction of, or permanent erasure of their personal information from our active student list by contacting our support desk.
                </p>
              </div>
            </div>
          )}

          {tab === 'terms' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-[#211e17] pb-4">
                <h3 className="font-cinzel text-xl font-bold text-[#fce196] mb-1">
                  Terms of Service &amp; Educational Agreement
                </h3>
                <p className="text-xs text-[#a89060]">Effective Date: January 2026</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-cinzel text-sm font-bold text-gray-100 uppercase tracking-wider text-[#d6b776]">
                  1. Educational &amp; Historical Research Purpose
                </h4>
                <p>
                  All educational content, video lectures, historical statutory analysis, and legal templates provided by Private Wealth Academy are compiled strictly for educational and informational research. PWA is an educational publisher and does not provide formal legal, tax, or financial advisory services.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-cinzel text-sm font-bold text-gray-100 uppercase tracking-wider text-[#d6b776]">
                  2. Intellectual Property Rights
                </h4>
                <p>
                  Course materials, video modules, and proprietary legal notice templates are protected under federal copyright laws. Enrolled students are granted a personal, non-transferable license for personal study and application.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-cinzel text-sm font-bold text-gray-100 uppercase tracking-wider text-[#d6b776]">
                  3. Student Responsibility
                </h4>
                <p>
                  Students are solely responsible for reviewing applicable local, state, and federal postal statutes (including Title 39 USC) and consulting qualified legal professionals prior to filing official legal notices or altering statutory mail procedures.
                </p>
              </div>
            </div>
          )}

          {tab === 'contact' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-[#211e17] pb-4">
                <h3 className="font-cinzel text-xl font-bold text-[#fce196] mb-1">
                  Contact Student Support
                </h3>
                <p className="text-xs text-[#a89060]">Dedicated Academy Assistance</p>
              </div>

              <p>
                Have questions about your cohort access, curriculum modules, or enrollment receipt? Our academy support desk is available Monday through Friday.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#12141d] border border-[#232635] p-5 rounded-xl space-y-2">
                  <div className="flex items-center space-x-2 text-[#d6b776] font-semibold text-xs uppercase tracking-wider">
                    <Mail className="w-4 h-4" />
                    <span>Support Email</span>
                  </div>
                  <p className="text-base text-white font-mono">support@privatewealthacademy.org</p>
                  <p className="text-xs text-gray-400">Response time: within 24 business hours</p>
                </div>

                <div className="bg-[#12141d] border border-[#232635] p-5 rounded-xl space-y-2">
                  <div className="flex items-center space-x-2 text-[#d6b776] font-semibold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Student Help Center</span>
                  </div>
                  <p className="text-base text-white font-mono">https://privatewealthacademy.org/help</p>
                  <p className="text-xs text-gray-400">24/7 Automated FAQ &amp; Knowledge Base</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#11131a] border-t border-[#1f1a12] flex items-center justify-between">
          <span className="text-xs text-gray-500 font-mono">
            Private Wealth Academy © 2026
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#211b11] hover:bg-[#2d2417] border border-[#d6b776]/50 text-[#fce196] font-cinzel text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            CLOSE WINDOW
          </button>
        </div>

      </div>
    </div>
  );
};
