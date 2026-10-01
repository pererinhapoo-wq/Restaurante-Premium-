import React, { useState } from 'react';
import { doctorsData } from '../data';
import { Doctor } from '../types';
import { ArrowRight, UserCheck, Clock, Award } from 'lucide-react';

interface ProfessionalsSectionProps {
  onSelectDoctorForBooking: (doctorId: string, specialtyId: string) => void;
}

export const ProfessionalsSection: React.FC<ProfessionalsSectionProps> = ({
  onSelectDoctorForBooking
}) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('dra-helena-martins');

  const selectedDoctor =
    doctorsData.find((d) => d.id === selectedDoctorId) || doctorsData[0];

  return (
    <section id="profissionais" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854] mb-3">
            <span>Corpo Clínico Integrado</span>
            <span aria-hidden="true">/</span>
            <span>Excelência & Escuta</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance mb-4">
            Profissionais dedicados ao seu cuidado integral.
          </h2>

          <p className="text-base text-[#182B2A]/80 leading-relaxed font-normal text-balance">
            Nossa equipe é formada por especialistas que compartilham a mesma visão: rigor científico, dedicação de tempo real ao paciente e diálogo interdisciplinar constante.
          </p>
        </div>

        {/* Editorial Layout: Doctor Selector List on Left, Active Profile Spotlight on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Doctor Navigation Roster */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#596E6D] block mb-3">
              Membros do Colegiado Médico
            </span>

            {doctorsData.map((doc) => {
              const isSelected = doc.id === selectedDoctorId;
              return (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDoctorId(doc.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-lg transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#F5F1EB] border-[#C27854] shadow-[0_4px_16px_rgba(24,43,42,0.06)]'
                      : 'bg-white/60 border-[#182B2A]/8 hover:bg-[#F5F1EB]/50 hover:border-[#182B2A]/15'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`text-base font-medium ${isSelected ? 'font-semibold text-[#122826]' : 'text-[#182B2A]'}`}>
                        {doc.name}
                      </h3>
                      <p className="text-xs text-[#596E6D]">
                        {doc.specialtyName}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono text-[#C27854] block">
                        {doc.crm}
                      </span>
                      <span className="text-[11px] text-[#596E6D]">
                        {doc.consultationDuration}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Doctor In-Depth Editorial Showcase */}
          <div className="lg:col-span-7 bg-[#F5F1EB] rounded-xl p-6 sm:p-10 border border-[#182B2A]/10 shadow-[0_12px_40px_rgba(24,43,42,0.04)] relative">
            
            <div className="space-y-6">
              
              {/* Profile Top Bar */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-6 border-b border-[#182B2A]/10">
                <div>
                  <span className="text-xs font-mono uppercase text-[#C27854] tracking-wider block mb-1">
                    {selectedDoctor.specialtyName}
                  </span>
                  <h3 className="font-serif-display text-3xl sm:text-4xl text-[#122826] font-normal">
                    {selectedDoctor.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#596E6D] mt-1">
                    <span>{selectedDoctor.crm}</span>
                    {selectedDoctor.rqe && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{selectedDoctor.rqe}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-white/80 border border-[#182B2A]/10 px-3.5 py-2 rounded text-right">
                  <span className="text-[10px] font-mono uppercase text-[#596E6D] block">
                    Duração de Consulta
                  </span>
                  <span className="text-sm font-semibold text-[#1D3B39] flex items-center gap-1.5 justify-end">
                    <Clock className="w-3.5 h-3.5 text-[#C27854]" />
                    {selectedDoctor.consultationDuration}
                  </span>
                </div>
              </div>

              {/* Doctor Philosophy Quote */}
              <blockquote className="font-serif-display text-lg sm:text-xl text-[#1D3B39] italic leading-snug border-l-2 border-[#C27854] pl-4">
                {selectedDoctor.philosophy}
              </blockquote>

              {/* Biography */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#596E6D] block">
                  Trajetória Acadêmica & Atuação Clínica
                </span>
                <p className="text-xs sm:text-sm text-[#182B2A]/85 leading-relaxed">
                  {selectedDoctor.bio}
                </p>
              </div>

              {/* Multidisciplinary Synergy Approach */}
              <div className="p-4 rounded-lg bg-white/70 border border-[#182B2A]/8 space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#1D3B39] font-medium block">
                  Como atua na integração VITRAE
                </span>
                <p className="text-xs text-[#182B2A]/80 leading-relaxed">
                  {selectedDoctor.approach}
                </p>
              </div>

              {/* Core Focus Tags (Clean unboxed tags) */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#596E6D] block">
                  Áreas de Destaque
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#122826]">
                  {selectedDoctor.focus.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-white px-3 py-1 rounded border border-[#182B2A]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Booking CTA with this Doctor */}
              <div className="pt-6 border-t border-[#182B2A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#596E6D]">
                  <UserCheck className="w-4 h-4 text-[#2E5654]" />
                  <span>Atendimento individual e presencial no Jardim Europa</span>
                </div>

                <button
                  onClick={() =>
                    onSelectDoctorForBooking(selectedDoctor.id, selectedDoctor.specialtyId)
                  }
                  className="px-5 py-3 bg-[#1D3B39] hover:bg-[#122826] text-white text-xs font-semibold rounded transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-sm"
                >
                  <span>Agendar com {selectedDoctor.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C27854]" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
