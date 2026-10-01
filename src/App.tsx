/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { PatientJourney } from './components/PatientJourney';
import { ProfessionalsSection } from './components/ProfessionalsSection';
import { ClinicEnvironments } from './components/ClinicEnvironments';
import { InitialAssessmentForm } from './components/InitialAssessmentForm';
import { PatientPortalDemo } from './components/PatientPortalDemo';
import { EducationalContent } from './components/EducationalContent';
import { Testimonials } from './components/Testimonials';
import { AppointmentScheduler } from './components/AppointmentScheduler';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { VitrayGuideModal } from './components/VitrayGuideModal';

export default function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [selectedSpecialtyForBooking, setSelectedSpecialtyForBooking] = useState<string>('clinica-medica');
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<string>('dra-helena-martins');

  const handleOpenBooking = (specialtyId?: string, doctorId?: string) => {
    if (specialtyId) setSelectedSpecialtyForBooking(specialtyId);
    if (doctorId) setSelectedDoctorForBooking(doctorId);

    const el = document.getElementById('agendamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGuideRecommendation = (recommendedSpecialtyId: string) => {
    setSelectedSpecialtyForBooking(recommendedSpecialtyId);
    const el = document.getElementById('agendamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#182B2A] flex flex-col font-sans selection:bg-[#2D5557] selection:text-white">
      {/* Strict 3-zone Header Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenPortal={() => setIsPortalModalOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenGuide={() => setIsGuideOpen(true)}
        />

        {/* Experiência VITRAE ("Um olhar completo sobre você") */}
        <ExperienceSection onOpenBooking={() => handleOpenBooking()} />

        {/* Especialidades Integradas */}
        <SpecialtiesSection
          onSelectSpecialtyForBooking={(specId) => handleOpenBooking(specId)}
        />

        {/* Jornada do Paciente ("Sua jornada começa antes da consulta") */}
        <PatientJourney onOpenBooking={() => handleOpenBooking()} />

        {/* Corpo Clínico e Profissionais Fictícios */}
        <ProfessionalsSection
          onSelectDoctorForBooking={(docId, specId) => handleOpenBooking(specId, docId)}
        />

        {/* Ambientes & Arquitetura Sensorial com Lightbox */}
        <ClinicEnvironments />

        {/* Avaliação Inicial ("Vamos entender o que você precisa") */}
        <InitialAssessmentForm />

        {/* Demonstração Visual da Área do Paciente */}
        <PatientPortalDemo
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Conteúdo Educativo ("Informação também é cuidado") */}
        <EducationalContent />

        {/* Depoimentos Naturais & Discretos */}
        <Testimonials />

        {/* Agendamento Visual & Resumo */}
        <AppointmentScheduler
          initialSpecialtyId={selectedSpecialtyForBooking}
          initialDoctorId={selectedDoctorForBooking}
        />

        {/* Localização, Horários & Mapa Arquitetônico */}
        <LocationSection />
      </main>

      {/* Quiet Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenPortal={() => setIsPortalModalOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Recurso Diferencial: Modal Guia VITRAE (Triagem Interativa) */}
      <VitrayGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        onSelectRecommendation={handleGuideRecommendation}
      />

      {/* Modal Interativo da Área do Paciente */}
      {isPortalModalOpen && (
        <PatientPortalDemo
          isModal={true}
          onCloseModal={() => setIsPortalModalOpen(false)}
          onOpenBooking={() => {
            setIsPortalModalOpen(false);
            handleOpenBooking();
          }}
        />
      )}
    </div>
  );
}
