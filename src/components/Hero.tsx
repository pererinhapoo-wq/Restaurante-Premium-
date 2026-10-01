import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { clinicImages } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenGuide }) => {
  const [activeFocalPoint, setActiveFocalPoint] = useState<number | null>(null);

  const focalPoints = [
    {
      id: 1,
      title: 'Tempo & Escuta Sem Pressa',
      subtitle: 'Primeira consulta de até 90 minutos para mapear sua biografia biológica, sono e rotina.',
      metric: '90 min',
      label: 'Tempo dedicado à escuta inicial'
    },
    {
      id: 2,
      title: 'Sinergia Clínica Real',
      subtitle: 'Clínica médica, dermatologia, nutrição e fisioterapia compartilhando o mesmo plano integrado.',
      metric: '1 plano',
      label: 'Diretriz unificada entre especialidades'
    },
    {
      id: 3,
      title: 'Arquitetura Sensorial',
      subtitle: 'Ambiente projetado com biofilia, isolamento acústico a 28 dB e luz circadiana suave.',
      metric: '28 dB',
      label: 'Atenuação acústica para máxima serenidade'
    }
  ];

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle architectural background grid hairline */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#122826_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        {/* Top Editorial Kicker */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-[13px] text-[#596E6D] mb-6">
          <span className="tracking-[0.18em] uppercase text-[#1D3B39] font-medium">Clínica Integrada</span>
          <span aria-hidden="true" className="text-[#C27854]">·</span>
          <span>Medicina de Precisão & Longevidade</span>
          <span aria-hidden="true" className="text-[#C27854]">·</span>
          <span className="text-[#182B2A]/80">Jardim Europa, São Paulo</span>
        </div>

        {/* Main Grid: Headline & Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] text-[#122826] tracking-tight font-normal text-balance">
              Cuidado pensado para você.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#182B2A]/80 font-normal max-w-xl text-balance">
              Uma experiência de cuidado integrada, humana e precisa, criada para acompanhar cada etapa da sua jornada.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="group px-6 py-3.5 bg-[#1D3B39] hover:bg-[#122826] text-white text-sm font-medium rounded transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_4px_16px_rgba(29,59,57,0.18)] cursor-pointer"
              >
                <span>Agendar Primeira Avaliação</span>
                <ArrowRight className="w-4 h-4 text-[#C27854] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenGuide}
                className="group px-5 py-3.5 bg-[#F5F1EB] hover:bg-[#EAE4DC] text-[#182B2A] text-sm font-medium rounded border border-[#182B2A]/10 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#C27854]" />
                <span>Explorar Guia VITRAE</span>
                <span className="text-xs text-[#596E6D] font-serif-display italic">(Triagem interativa)</span>
              </button>
            </div>

            {/* Subtle editorial trust statement */}
            <div className="pt-6 border-t border-[#182B2A]/10 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-[#596E6D]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2E5654]" />
                <span>Direção médica ética sob CRM/SP 148.920</span>
              </div>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C27854]" />
                <span>Atendimento pontual com intervalo exclusivo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Composition with layered precision tags */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Backing decorative architectural frame in ivory & copper hairline */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full border border-[#C27854]/30 rounded-lg pointer-events-none" />
              
              {/* Main Image Carrier */}
              <div className="relative rounded-lg overflow-hidden border border-[#182B2A]/10 bg-[#EAE4DC] shadow-[0_12px_40px_rgba(18,40,38,0.08)]">
                <img
                  src={clinicImages.hero}
                  alt="Interior contemporâneo da clínica VITRAE com iluminação natural e acabamentos em travertino e cobre"
                  className="w-full h-[340px] sm:h-[420px] object-cover transition-transform duration-700 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient contrast scrim for bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#122826]/75 via-[#122826]/20 to-transparent pointer-events-none" />

                {/* Overlay card: Editorial quote on bottom left */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-auto">
                  <div className="bg-[#FAF8F5]/92 backdrop-blur-md text-[#182B2A] p-4 sm:p-5 rounded border border-[#182B2A]/10 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-[#C27854]">
                        Arquitetura + Bem-Estar
                      </span>
                      <span className="text-xs text-[#596E6D]">VITRAE Ambientes</span>
                    </div>
                    <p className="font-serif-display text-base sm:text-lg leading-snug text-[#122826]">
                      “Criamos cada espaço como um santuário silencioso de saúde, onde a tecnologia de ponta convive em harmonia com o acolhimento humano.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating precision marker on top-right */}
              <div className="absolute -top-4 sm:-top-5 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#182B2A]/10 p-3 sm:p-4 rounded shadow-[0_6px_20px_rgba(0,0,0,0.06)] max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#C27854] animate-pulse" />
                  <span className="text-[11px] font-medium tracking-wide uppercase text-[#1D3B39]">Abordagem 360°</span>
                </div>
                <p className="text-xs text-[#596E6D] leading-tight">
                  Consultas clínicas com integração contínua entre 6 especialidades.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Interactive Focal Dimensions: 3 Horizontal Plates (Anti-generic cards) */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-[#182B2A]/10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono tracking-wider uppercase text-[#596E6D]">
              Pilares do Cuidado Integrado
            </span>
            <span className="text-xs text-[#596E6D]">
              Passe o cursor para detalhar
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focalPoints.map((item, index) => {
              const isActive = activeFocalPoint === index;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveFocalPoint(index)}
                  onMouseLeave={() => setActiveFocalPoint(null)}
                  className={`relative p-5 sm:p-6 rounded transition-all duration-300 border cursor-default ${
                    isActive
                      ? 'bg-white border-[#C27854]/50 shadow-[0_8px_24px_rgba(194,120,84,0.08)] -translate-y-0.5'
                      : 'bg-[#F5F1EB]/60 border-[#182B2A]/10 hover:border-[#182B2A]/20'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-serif-display text-2xl text-[#122826] font-medium">
                      {item.metric}
                    </span>
                    <span className="text-xs font-mono text-[#C27854]">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-sm font-semibold text-[#182B2A] mb-1">
                    {item.title}
                  </h2>

                  <p className="text-xs leading-relaxed text-[#596E6D]">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
