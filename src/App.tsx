import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MasterySection } from './components/MasterySection';
import { CurriculumModal } from './components/CurriculumModal';
import { FaqModal } from './components/FaqModal';
import { EnrollmentModal } from './components/EnrollmentModal';
import { Footer } from './components/Footer';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpenModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 flex flex-col font-sans-body selection:bg-[#d6b776]/30 selection:text-[#fce196]">
      {/* Sticky Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Main Hero Section */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* What You Will Master Grid Section */}
        <MasterySection />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Modals */}
      <CurriculumModal
        isOpen={activeModal === 'curriculum'}
        onClose={handleCloseModal}
        onOpenModal={handleOpenModal}
      />

      <FaqModal
        isOpen={activeModal === 'faqs'}
        onClose={handleCloseModal}
      />

      <EnrollmentModal
        isOpen={activeModal === 'enroll'}
        onClose={handleCloseModal}
      />
    </div>
  );
}

