import React, { useState } from 'react';
import { specialtiesData } from '../data';
import { Specialty } from '../types';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Stethoscope, Microscope, Salad, Activity, Brain, ShieldAlert } from 'lucide-react';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking: (specialtyId: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForBooking
}) => {
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>('clinica-medica');

  const selectedSpecialty =
    specialtiesData.find((s) => s.id === selectedSpecialtyId) || specialtiesData[0];

  const getSpecialtyIcon = (id: string) => {
    switch (id) {
      case 'clinica-medica':
        return Stethoscope;
      case 'dermatologia':
        return Microscope;
      case 'nutricao':
        return Salad;
      case 'fisioterapia':
        return Activity;
      case 'psicologia':
        return Brain;
      case 'medicina-preventiva':
        return ShieldAlert;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="especialidades" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854] mb-3">
              <span>Especialidades Integradas</span>
              <span aria-hidden="true">/</span>
              <span>Atuação Multidisciplinar</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance">
              Áreas de conhecimento que conversam entre si.
            </h2>
          </div>

          <p className="text-sm text-[#596E6D] max-w-sm leading-relaxed">
            Cada especialidade possui seu próprio método investigativo, mas todas compartilham a mesma diretriz clínica e o mesmo prontuário longitudinal.
          </p>
        </div>

        {/* Distinct Interactive Selector Tabs (Anti-pill, clean segmented bar) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10 p-1.5 bg-[#F5F1EB] rounded-lg border border-[#182B2A]/8">
          {specialtiesData.map((spec) => {
            const isSelected = spec.id === selectedSpecialtyId;
            const Icon = getSpecialtyIcon(spec.id);
            return (
              <button
                key={spec.id}
                onClick={() => setSelectedSpecialtyId(spec.id)}
                className={`py-3 px-3 rounded text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white text-[#122826] shadow-sm border border-[#182B2A]/10'
                    : 'text-[#596E6D] hover:text-[#182B2A] hover:bg-white/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#C27854]' : 'text-[#596E6D]'}`} />
                  <span className="text-[10px] font-mono opacity-60">
                    {spec.id.substring(0, 3).toUpperCase()}
                  </span>
                </div>
                <span className={`text-xs font-medium truncate ${isSelected ? 'font-semibold text-[#122826]' : ''}`}>
                  {spec.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* The Bespoke Specialty Editorial Dossier */}
        <div className="bg-[#FAF8F5] rounded-xl border border-[#182B2A]/12 p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(24,43,42,0.03)] relative overflow-hidden">
          
          {/* Subtle accent tone bar */}
          <div 
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: selectedSpecialty.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Side: Overview & Philosophy */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-[#596E6D]">
                  <span className="font-mono text-[#C27854] uppercase tracking-wider">
                    {selectedSpecialty.badge}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Responsável: {selectedSpecialty.leadDoctor}</span>
                </div>

                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#122826] font-normal leading-tight">
                  {selectedSpecialty.name}
                </h3>

                <p className="font-serif-display text-lg text-[#2E5654] italic">
                  {selectedSpecialty.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-[#182B2A]/85">
                {selectedSpecialty.description}
              </p>

              {/* Responsible Doctor Callout */}
              <div className="p-4 rounded bg-[#F5F1EB]/80 border border-[#182B2A]/8 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#596E6D] block">
                    Coordenação da Especialidade
                  </span>
                  <span className="text-sm font-semibold text-[#122826]">
                    {selectedSpecialty.leadDoctor}
                  </span>
                  <span className="text-xs text-[#596E6D] block">
                    {selectedSpecialty.doctorRole}
                  </span>
                </div>
                <a
                  href="#profissionais"
                  className="text-xs text-[#C27854] hover:underline font-medium flex items-center gap-1"
                >
                  <span>Ver perfil</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectSpecialtyForBooking(selectedSpecialty.id)}
                  className="px-6 py-3.5 bg-[#1D3B39] hover:bg-[#122826] text-white text-xs sm:text-sm font-medium rounded transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <span>Agendar Consulta em {selectedSpecialty.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#C27854]" />
                </button>
              </div>

            </div>

            {/* Right Side: Structured Protocols & Diagnostic Tech */}
            <div className="lg:col-span-6 space-y-8 bg-[#F5F1EB]/60 p-6 sm:p-8 rounded-lg border border-[#182B2A]/8">
              
              {/* Focus Areas */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#122826] font-semibold block">
                  Principais Focos de Atuação
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSpecialty.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#182B2A]/85 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C27854] mt-1.5 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-[#182B2A]/8" />

              {/* Protocols */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#122826] font-semibold block">
                  Protocolos Clínicos VITRAE
                </span>
                <div className="space-y-2">
                  {selectedSpecialty.protocols.map((protocol, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#1D3B39] font-medium bg-white/70 px-3.5 py-2 rounded border border-[#182B2A]/6">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5654] shrink-0" />
                      <span>{protocol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-[#182B2A]/8" />

              {/* In-House Diagnostic Technology */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#596E6D] block">
                  Tecnologias Diagnósticas Disponíveis na Clínica
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedSpecialty.diagnosticTech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-[#182B2A] bg-white px-3 py-1 rounded border border-[#182B2A]/10 font-normal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
