import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Car, Compass, Shield, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'carro' | 'transporte' | 'aeroporto'>('carro');

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#182B2A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854] mb-3">
            <span>Localização & Contato</span>
            <span aria-hidden="true">/</span>
            <span>Jardim Europa</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance mb-4">
            Um refúgio de tranquilidade no coração de São Paulo.
          </h2>

          <p className="text-base text-[#182B2A]/80 leading-relaxed font-normal text-balance">
            Instalada em uma alameda arborizada do Jardim Europa, a VITRAE foi desenhada para que seu momento de autocuidado comece no instante da sua chegada.
          </p>
        </div>

        {/* 2-Column Layout: Contact Data & Stylized Architectural Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address, Hours, Phones */}
          <div className="lg:col-span-5 bg-[#F5F1EB] rounded-xl p-6 sm:p-8 border border-[#182B2A]/10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Endereço */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-white text-[#C27854] shrink-0 border border-[#182B2A]/8">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#596E6D] tracking-wider block mb-1">
                    Endereço
                  </span>
                  <p className="text-sm font-semibold text-[#122826]">
                    Alameda dos Flamboyants, 1240
                  </p>
                  <p className="text-xs text-[#596E6D] mt-0.5">
                    Jardim Europa — São Paulo, SP · CEP 01452-001
                  </p>
                  <span className="text-[11px] text-[#C27854] font-medium block mt-1">
                    Valet cortesia com manobrista privativo na entrada
                  </span>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-white text-[#1D3B39] shrink-0 border border-[#182B2A]/8">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#596E6D] tracking-wider block mb-1">
                    Horário de Atendimento
                  </span>
                  <div className="space-y-1 text-xs text-[#182B2A]">
                    <div className="flex justify-between gap-6">
                      <span className="text-[#596E6D]">Segunda a Sexta</span>
                      <span className="font-medium">07h30 às 20h00</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-[#596E6D]">Sábados</span>
                      <span className="font-medium">08h00 às 14h00</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-[#596E6D]">Domingos & Feriados</span>
                      <span className="text-[#596E6D]/80">Plantão exclusivo a pacientes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contatos */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-white text-[#2E5654] shrink-0 border border-[#182B2A]/8">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#596E6D] tracking-wider block mb-1">
                    Contatos Diretos
                  </span>
                  <div className="space-y-1 text-xs">
                    <p className="text-[#122826] font-medium">
                      Recepção: (11) 3195-8800
                    </p>
                    <p className="text-[#122826] font-medium">
                      Concierge WhatsApp: (11) 98721-4400
                    </p>
                  </div>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-white text-[#C27854] shrink-0 border border-[#182B2A]/8">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#596E6D] tracking-wider block mb-1">
                    E-mail Institucional
                  </span>
                  <p className="text-xs font-medium text-[#122826]">
                    contato@vitraeclinica.com.br
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-[#182B2A]/10 text-[11px] text-[#596E6D] leading-relaxed">
              Atendimento com hora marcada para assegurar o silêncio e a privacidade de todos os presentes na clínica.
            </div>
          </div>

          {/* Right Column: Stylized Architectural Map Container */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-xl border border-[#182B2A]/10 overflow-hidden flex flex-col justify-between shadow-[0_8px_30px_rgba(24,43,42,0.03)]">
            
            {/* Visual Vector Map Canvas */}
            <div className="relative h-80 sm:h-96 bg-[#FAF8F5] p-6 flex flex-col justify-between overflow-hidden border-b border-[#182B2A]/10">
              
              {/* Architectural Grid & Streets Visual */}
              <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                {/* Street grid paths */}
                <path d="M 0 80 Q 200 90 600 60" stroke="#182B2A" strokeWidth="3" fill="none" strokeDasharray="6,4" />
                <path d="M 0 160 Q 250 180 600 150" stroke="#182B2A" strokeWidth="4" fill="none" />
                <path d="M 0 260 Q 300 240 600 270" stroke="#182B2A" strokeWidth="2" fill="none" />
                <path d="M 120 0 Q 140 180 110 400" stroke="#182B2A" strokeWidth="2" fill="none" />
                <path d="M 320 0 Q 310 180 340 400" stroke="#182B2A" strokeWidth="3.5" fill="none" />
                <path d="M 480 0 Q 460 200 490 400" stroke="#182B2A" strokeWidth="2" fill="none" />
              </svg>

              {/* Landmark badges on the vector map */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#596E6D] bg-white/90 px-2.5 py-1 rounded border border-[#182B2A]/10">
                  Av. Brig. Faria Lima (3 min)
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#596E6D] bg-white/90 px-2.5 py-1 rounded border border-[#182B2A]/10">
                  Parque do Povo (5 min)
                </span>
              </div>

              {/* Pin central da VITRAE */}
              <div className="relative z-10 self-center text-center animate-bounce-slow">
                <div className="inline-flex items-center gap-2 bg-[#122826] text-white px-4 py-2 rounded-full shadow-lg border border-[#C27854]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C27854] animate-ping" />
                  <span className="font-serif-display text-sm tracking-wide">VITRAE — Jardim Europa</span>
                </div>
                <span className="text-[11px] text-[#122826] font-medium block mt-1 drop-shadow-sm">
                  Alameda dos Flamboyants, 1240
                </span>
              </div>

              <div className="relative z-10 flex justify-between items-end">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#596E6D] bg-white/90 px-2.5 py-1 rounded border border-[#182B2A]/10">
                  Estação Cidade Jardim (CPTM)
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C27854] bg-white/90 px-2.5 py-1 rounded border border-[#C27854]/40 font-semibold">
                  Acesso com Segurança 24h
                </span>
              </div>
            </div>

            {/* Map Directions Interactive Tabs */}
            <div className="p-6 bg-[#F5F1EB]/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#596E6D]">
                  Como Chegar com Facilidade
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setActiveTab('carro')}
                    className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                      activeTab === 'carro' ? 'bg-[#1D3B39] text-white font-medium' : 'text-[#596E6D] hover:text-[#122826]'
                    }`}
                  >
                    De Carro
                  </button>
                  <button
                    onClick={() => setActiveTab('transporte')}
                    className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                      activeTab === 'transporte' ? 'bg-[#1D3B39] text-white font-medium' : 'text-[#596E6D] hover:text-[#122826]'
                    }`}
                  >
                    Transporte / Táxi
                  </button>
                  <button
                    onClick={() => setActiveTab('aeroporto')}
                    className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                      activeTab === 'aeroporto' ? 'bg-[#1D3B39] text-white font-medium' : 'text-[#596E6D] hover:text-[#122826]'
                    }`}
                  >
                    Aeroporto
                  </button>
                </div>
              </div>

              <div className="text-xs text-[#182B2A]/85 leading-relaxed bg-white p-3.5 rounded border border-[#182B2A]/8">
                {activeTab === 'carro' && (
                  <p>
                    Acesso facilitado pelas Avenidas Brigadeiro Faria Lima, Nove de Julho e Marginal Pinheiros. Ao se aproximar do número 1240, nossa equipe de manobristas receberá seu veículo diretamente na baia exclusiva.
                  </p>
                )}
                {activeTab === 'transporte' && (
                  <p>
                    Ponto de desembarque coberto e plano para carros de aplicativo ou táxis, com acesso nivelado sem degraus para total acessibilidade e conforto.
                  </p>
                )}
                {activeTab === 'aeroporto' && (
                  <p>
                    A apenas 15 minutos do Aeroporto de Congonhas (CGH) fora do horário de pico. Oferecemos suporte de concierge para coordenar transfers executivos mediante solicitação prévia.
                  </p>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
