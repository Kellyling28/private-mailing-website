import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, CreditCard, Sparkles, User, Mail, Phone, Calendar, KeyRound } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [paymentOption, setPaymentOption] = useState<'single' | 'split'>('single');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '4242 4242 4242 4242',
    expDate: '12/28',
    cvv: '988'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCardNumberChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 16);
    const formatted = raw.replace(/(\d{4})(?=\d)/g, '$1 ');
    setFormData((prev) => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpDateChange = (val: string) => {
    let raw = val.replace(/\D/g, '').slice(0, 4);
    if (raw.length >= 3) {
      raw = `${raw.slice(0, 2)}/${raw.slice(2)}`;
    }
    setFormData((prev) => ({ ...prev, expDate: raw }));
  };

  const handleCvvChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 4);
    setFormData((prev) => ({ ...prev, cvv: raw }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0f1117] border border-[#d6b776]/60 rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#161922] border-b border-[#2a2419] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold tracking-widest text-[#d6b776] uppercase bg-[#231e15] px-2.5 py-0.5 rounded border border-[#4a3f2c] mb-1">
              <Sparkles className="w-3 h-3 text-[#fce196]" />
              <span>Intake Cohort 03 • Limited Seats</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#fce196]">
              Private Mailing Secrets Enrollment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-[#222733] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 font-sans-body">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#1f2f21] border-2 border-[#3fa34d] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#4ade80]" />
              </div>
              <h4 className="font-cinzel text-2xl font-bold text-[#fce196]">
                Welcome to Private Wealth Academy!
              </h4>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Your seat in <strong className="text-white">Intake Cohort 03</strong> has been successfully reserved. A welcome email with login details to the student portal and downloadable legal templates has been sent to <span className="text-[#fce196] underline">{formData.email || 'your email'}</span>.
              </p>

              <div className="bg-[#141720] border border-[#2b251b] p-4 rounded-xl max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Student Name:</span>
                  <span className="text-white font-medium">{formData.fullName || 'Valued Member'}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Access Granted:</span>
                  <span className="text-[#d6b776] font-medium">Lifetime Course &amp; Community Access</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Guarantee:</span>
                  <span className="text-white font-medium">30-Day Unconditional Money-Back</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-4 font-cinzel text-xs font-bold text-black bg-gradient-to-r from-[#fce196] to-[#d6b776] px-8 py-3 rounded-md shadow-lg hover:brightness-110 transition-all"
              >
                ACCESS STUDENT DASHBOARD
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Payment Plan Options */}
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-[#d6b776] tracking-wider">
                  Select Payment Option:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setPaymentOption('single')}
                    className={`cursor-pointer p-4 rounded-xl border transition-all ${
                      paymentOption === 'single'
                        ? 'bg-[#1a1711] border-[#d6b776] shadow-[0_0_15px_rgba(214,183,118,0.2)]'
                        : 'bg-[#12151f] border-[#222736] hover:border-[#353d52]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-cinzel text-sm font-bold text-white">Full Single Payment</span>
                      <span className="text-xs font-bold text-[#fce196]">$497</span>
                    </div>
                    <p className="text-xs text-gray-400">Best Value • Save $33 instantly</p>
                  </div>

                  <div
                    onClick={() => setPaymentOption('split')}
                    className={`cursor-pointer p-4 rounded-xl border transition-all ${
                      paymentOption === 'split'
                        ? 'bg-[#1a1711] border-[#d6b776] shadow-[0_0_15px_rgba(214,183,118,0.2)]'
                        : 'bg-[#12151f] border-[#222736] hover:border-[#353d52]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-cinzel text-sm font-bold text-white">2 Monthly Payments</span>
                      <span className="text-xs font-bold text-[#fce196]">2 x $265</span>
                    </div>
                    <p className="text-xs text-gray-400">Easy Split • Pay 1st installment today</p>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-3">
                <label className="text-xs uppercase font-bold text-[#d6b776] tracking-wider">
                  Contact Details:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#141722] border border-[#2c261b] rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d6b776]"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="Email Address (for portal access)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#141722] border border-[#2c261b] rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d6b776]"
                    />
                  </div>
                </div>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    placeholder="Phone Number (for SMS cohort updates)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#141722] border border-[#2c261b] rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d6b776]"
                  />
                </div>
              </div>

              {/* Card Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs uppercase font-bold text-[#d6b776] tracking-wider">
                    Payment Info:
                  </label>
                  <span className="text-[10px] text-gray-400 flex items-center space-x-1">
                    <Lock className="w-3 h-3 text-[#4ade80]" />
                    <span>256-Bit SSL Encryption</span>
                  </span>
                </div>

                <div className="bg-[#141722] border border-[#2c261b] p-3.5 rounded-lg space-y-3">
                  <div className="relative">
                    <CreditCard className="w-4 h-4 text-[#d6b776] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      value={formData.cardNumber}
                      onChange={(e) => handleCardNumberChange(e.target.value)}
                      maxLength={19}
                      className="w-full bg-[#1c202e] border border-[#30291d] rounded-md pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 font-mono focus:outline-none focus:border-[#d6b776]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#d6b776] absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={formData.expDate}
                        onChange={(e) => handleExpDateChange(e.target.value)}
                        maxLength={5}
                        className="w-full bg-[#1c202e] border border-[#30291d] rounded-md pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 font-mono text-left focus:outline-none focus:border-[#d6b776]"
                      />
                    </div>
                    <div className="relative">
                      <KeyRound className="w-4 h-4 text-[#d6b776] absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={(e) => handleCvvChange(e.target.value)}
                        maxLength={4}
                        className="w-full bg-[#1c202e] border border-[#30291d] rounded-md pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 font-mono text-left focus:outline-none focus:border-[#d6b776]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee Banner */}
              <div className="bg-[#171b12] border border-[#3d592a] p-3.5 rounded-xl flex items-center space-x-3">
                <ShieldCheck className="w-7 h-7 text-[#5cc76e] shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[#71cf83]">30-Day Unconditional Money-Back Guarantee:</span>
                  <span className="text-gray-300 ml-1">If you aren't completely satisfied with the course strategies, simply notify us within 30 days for a full refund.</span>
                </div>
              </div>

              {/* Action Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-cinzel text-sm font-bold tracking-wider text-black bg-gradient-to-r from-[#fce196] via-[#d6b776] to-[#b89552] hover:brightness-110 py-4 rounded-lg shadow-xl gold-button-hover transition-all flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>PROCESSING ENROLLMENT...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>COMPLETE ENROLLMENT &amp; START NOW ({paymentOption === 'single' ? '$497' : '$265'})</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#13151d] border-t border-[#231e15] flex justify-between items-center text-[11px] text-gray-400">
          <span>Private Wealth Academy Official Enrollment</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
