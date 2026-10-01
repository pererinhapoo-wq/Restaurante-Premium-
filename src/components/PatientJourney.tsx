import React, { useState } from 'react';
import { journeySteps } from '../data';
import { ChevronRight, ArrowRight, HeartHandshake, CheckCircle } from 'lucide-react';

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = journeySteps[activeStepIndex];

  return (
    <section id="jornada" className="py-24 sm:py-32 bg-[#F5F1EB] border-y border-[#182B2A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854] mb-3">
            <span>Jornada do Paciente</span>
            <span aria-hidden="true">/</span>
            <span>Experiência Passo a Passo</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance mb-4">
            Sua jornada começa antes da consulta.
          </h2>

          <p className="text-base text-[#182B2A]/80 leading-relaxed font-normal text-balance">
            Desenvolvemos um fluxo de cuidado contínuo onde você nunca se sente desorientado. Cada etapa foi desenhada para oferecer clareza, previsibilidade e acolhimento humano.
          </p>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div className="mb-12">
          <div className="relative">
            {/* Background hairline line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-[#182B2A]/15 z-0" />

            {/* Stepper nodes */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative z-10">
              {journeySteps.map((item, index) => {
                const isActive = index === activeStepIndex;
                const isPast = index < activeStepIndex;
                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStepIndex(index)}
                    className={`text-left p-3.5 sm:p-4 rounded-lg transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                      isActive
                        ? 'bg-[#FAF8F5] border-[#C27854] shadow-[0_4px_16px_rgba(24,43,42,0.06)] -translate-y-1'
                        : isPast
                        ? 'bg-[#FAF8F5]/80 border-[#182B2A]/10 text-[#182B2A]'
                        : 'bg-[#FAF8F5]/40 border-transparent hover:bg-[#FAF8F5]/70 text-[#596E6D]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-xs font-semibold ${isActive ? 'text-[#C27854]' : isPast ? 'text-[#1D3B39]' : 'text-[#596E6D]'}`}>
                        {item.step}
                      </span>
                      {isPast && <CheckCircle className="w-3.5 h-3.5 text-[#2E5654]" />}
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#C27854] animate-ping" />}
                    </div>
                    <span className={`text-xs leading-snug line-clamp-2 ${isActive ? 'font-semibold text-[#122826]' : 'text-[#182B2A]/80'}`}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Showcase Plate of Active Step */}
        <div className="bg-[#FAF8F5] rounded-xl border border-[#182B2A]/12 p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(24,43,42,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C27854] uppercase tracking-wider">
                  <span>Etapa {activeStep.step} de 06</span>
                  <span aria-hidden="true">·</span>
                  <span>Fluxo Integrado VITRAE</span>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-[#122826] font-normal">
                  {activeStep.title}
                </h3>

                <p className="font-serif-display text-lg text-[#2E5654] italic">
                  {activeStep.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#182B2A]/85 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Patient Feeling Callout */}
              <div className="p-4 sm:p-5 rounded-lg bg-[#F5F1EB] border-l-2 border-[#C27854] space-y-1">
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#C27854] block">
                  O que você sente nesta fase
                </span>
                <p className="text-xs sm:text-sm text-[#122826] italic font-serif-display">
                  “{activeStep.patientFeeling}”
                </p>
              </div>

              {/* Navigation buttons between steps */}
              <div className="flex items-center justify-between pt-4 border-t border-[#182B2A]/10">
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeStepIndex === 0}
                  className={`text-xs font-medium py-2 px-3 rounded transition-colors ${
                    activeStepIndex === 0
                      ? 'text-[#596E6D]/40 cursor-not-allowed'
                      : 'text-[#182B2A] hover:bg-[#F5F1EB] cursor-pointer'
                  }`}
                >
                  ← Etapa anterior
                </button>

                <div className="flex items-center gap-1.5 text-xs text-[#596E6D] font-mono">
                  {activeStepIndex + 1} / {journeySteps.length}
                </div>

                {activeStepIndex < journeySteps.length - 1 ? (
                  <button
                    onClick={() => setActiveStepIndex((prev) => Math.min(journeySteps.length - 1, prev + 1))}
                    className="text-xs font-medium text-[#1D3B39] hover:text-[#122826] py-2 px-3 rounded hover:bg-[#F5F1EB] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Próxima etapa</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C27854]" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-white bg-[#1D3B39] hover:bg-[#122826] py-2 px-4 rounded transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Iniciar Minha Jornada</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C27854]" />
                  </button>
                )}
              </div>

            </div>

            {/* Right Side: Visual Touchpoint Graphic (Architectural Journey Matrix) */}
            <div className="lg:col-span-5 bg-[#F5F1EB] p-6 sm:p-8 rounded-lg border border-[#182B2A]/8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1D3B39] flex items-center justify-center text-[#C27854]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#C27854] tracking-wider block">
                    Ponto de Contato
                  </span>
                  <span className="text-sm font-semibold text-[#122826]">
                    Navegador de Cuidados Exclusivo
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#182B2A]/80 leading-relaxed">
                <p>
                  Desde a confirmação do seu primeiro horário, você terá uma pessoa real dedicada a coordenar datas, orientações pré-exame e suporte contínuo com os médicos.
                </p>
                <div className="p-3 bg-white/80 rounded border border-[#182B2A]/6 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#596E6D] block">
                    Garantia de pontualidade
                  </span>
                  <p className="font-medium text-[#122826]">
                    Intervalo de 30 minutos entre consultas para higienização e respeito estrito ao seu tempo.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 bg-[#1D3B39] hover:bg-[#122826] text-white text-xs font-medium rounded transition-colors text-center cursor-pointer shadow-sm"
                >
                  Agendar Primeiro Contato
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
