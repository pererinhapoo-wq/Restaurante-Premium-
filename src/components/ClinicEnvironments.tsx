import React, { useState } from 'react';
import { environmentsData } from '../data';
import { Environment } from '../types';
import { X, Maximize2, Sparkles, VolumeX, Sun, CheckCircle } from 'lucide-react';

export const ClinicEnvironments: React.FC = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState<Environment | null>(null);

  return (
    <section id="ambientes" className="py-24 sm:py-32 bg-[#F5F1EB] border-y border-[#182B2A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854] mb-3">
              <span>Ambientes VITRAE</span>
              <span aria-hidden="true">/</span>
              <span>Arquitetura Sensorial</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance">
              Espaços criados para acolher os sentidos e acalmar a mente.
            </h2>
          </div>

          <p className="text-sm text-[#596E6D] max-w-sm leading-relaxed">
            Eliminamos os estímulos frios e impessoais do ambiente hospitalar tradicional. Cada textura, ruído e feixe de luz foi pensado para seu conforto absoluto.
          </p>
        </div>

        {/* Asymmetrical Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {environmentsData.map((item, index) => {
            // Asymmetric layout emphasis: 1st and 4th occupy different visual emphasis
            const isFeatured = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedEnvironment(item)}
                className={`group relative bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#182B2A]/10 shadow-[0_4px_20px_rgba(24,43,42,0.03)] hover:shadow-[0_12px_36px_rgba(24,43,42,0.08)] transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image Container with Hover Zoom & Scrim */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-[#EAE4DC]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Subtle contrast gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122826]/80 via-[#122826]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Expand badge icon on top right */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#182B2A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C27854]" />
                  </div>

                  {/* Text on image overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#EAD0C3] block mb-1">
                      0{index + 1} · Espaço Exclusivo
                    </span>
                    <h3 className="font-serif-display text-xl sm:text-2xl text-white font-normal leading-snug">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body with sensory details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <p className="text-xs sm:text-[13px] text-[#596E6D] leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>

                  <div className="pt-3 border-t border-[#182B2A]/8 flex items-center justify-between text-[11px] text-[#182B2A]/75">
                    <div className="flex items-center gap-1.5">
                      <VolumeX className="w-3.5 h-3.5 text-[#C27854]" />
                      <span className="truncate max-w-[140px]">{item.acoustic}</span>
                    </div>
                    <span className="text-[#C27854] font-medium group-hover:underline flex items-center gap-0.5">
                      Explorar espaço →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Visualização Ampliada Modal */}
      {selectedEnvironment && (
        <div
          className="fixed inset-0 z-50 bg-[#122826]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedEnvironment(null)}
        >
          <div
            className="bg-[#FAF8F5] rounded-xl max-w-4xl w-full overflow-hidden border border-[#C27854]/30 shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedEnvironment(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-[#182B2A] hover:bg-[#182B2A] hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Fechar visualização"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image Showcase */}
            <div className="relative h-72 sm:h-96 w-full bg-[#122826] overflow-hidden">
              <img
                src={selectedEnvironment.image}
                alt={selectedEnvironment.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#122826]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C27854] block mb-1">
                  Ambientes VITRAE · Detalhes de Conforto
                </span>
                <h3 className="font-serif-display text-2xl sm:text-4xl text-white font-normal">
                  {selectedEnvironment.name}
                </h3>
                <p className="font-serif-display text-base sm:text-lg text-[#EAE4DC] italic mt-1">
                  {selectedEnvironment.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content Details */}
            <div className="p-6 sm:p-10 space-y-6">
              
              <p className="text-sm sm:text-base text-[#182B2A]/90 leading-relaxed font-normal">
                {selectedEnvironment.description}
              </p>

              {/* Sensory Engineering Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-[#F5F1EB] border border-[#182B2A]/8">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white text-[#C27854] shrink-0">
                    <VolumeX className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#596E6D] block">
                      Isolamento Sonoro
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#122826]">
                      {selectedEnvironment.acoustic}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white text-[#C27854] shrink-0">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#596E6D] block">
                      Engenharia de Luz
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#122826]">
                      {selectedEnvironment.lighting}
                    </span>
                  </div>
                </div>
              </div>

              {/* Specific features list */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#122826] font-semibold block">
                  Diferenciais do Espaço
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedEnvironment.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-[#182B2A]/85">
                      <CheckCircle className="w-4 h-4 text-[#2E5654] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer action */}
              <div className="pt-4 border-t border-[#182B2A]/10 flex justify-end">
                <button
                  onClick={() => setSelectedEnvironment(null)}
                  className="px-6 py-2.5 bg-[#1D3B39] text-white text-xs font-medium rounded hover:bg-[#122826] transition-colors cursor-pointer"
                >
                  Fechar Visualização
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
