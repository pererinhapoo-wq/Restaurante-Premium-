import React from 'react';
import { testimonialsData } from '../data';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854] mb-3">
            <span>Vozes de Pacientes</span>
            <span aria-hidden="true">/</span>
            <span>Relações de Confiança</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance mb-4">
            Histórias de quem encontrou escuta e serenidade.
          </h2>

          <p className="text-base text-[#182B2A]/80 leading-relaxed font-normal text-balance">
            Relatos espontâneos sobre a experiência de vivenciar um cuidado médico sem pressa, com foco na dignidade de cada indivíduo.
          </p>
        </div>

        {/* Testimonials Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F1EB]/70 p-6 sm:p-8 rounded-xl border border-[#182B2A]/8 flex flex-col justify-between space-y-6 hover:bg-[#F5F1EB] transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-[#C27854]/70" />
                <p className="font-serif-display text-base sm:text-lg text-[#122826] italic leading-relaxed">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#182B2A]/8 space-y-0.5">
                <h3 className="text-xs sm:text-sm font-semibold text-[#182B2A]">
                  {item.author}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-[#596E6D]">
                  <span>{item.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#C27854]">{item.timeWithClinic}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
