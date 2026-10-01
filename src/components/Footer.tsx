import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPortal: () => void;
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenPortal,
  onOpenGuide
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#122826] text-[#FAF8F5] pt-16 pb-12 border-t border-[#182B2A]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Footer Tier: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif-display text-3xl tracking-[0.14em] text-white">
                VITRAE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C27854]" />
            </div>

            <p className="font-serif-display text-base text-[#EAE4DC]/80 italic max-w-sm">
              Cuidado pensado para você. Medicina integrada, arquitetura contemporânea e atenção minuciosa ao ser humano.
            </p>

            <div className="text-xs text-[#EAE4DC]/60 space-y-1">
              <p>Alameda dos Flamboyants, 1240 — Jardim Europa</p>
              <p>São Paulo, SP · CEP 01452-001</p>
              <p>Recepção: (11) 3195-8800</p>
            </div>
          </div>

          {/* Nav links 1 */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C27854] block">
              Explorar a Clínica
            </span>
            <ul className="space-y-2 text-xs text-[#EAE4DC]/80">
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">
                  Experiência VITRAE
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  Especialidades Integradas
                </a>
              </li>
              <li>
                <a href="#jornada" className="hover:text-white transition-colors">
                  Jornada do Paciente
                </a>
              </li>
              <li>
                <a href="#profissionais" className="hover:text-white transition-colors">
                  Corpo Clínico & Coordenação
                </a>
              </li>
              <li>
                <a href="#ambientes" className="hover:text-white transition-colors">
                  Ambientes & Arquitetura
                </a>
              </li>
            </ul>
          </div>

          {/* Nav links 2 */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C27854] block">
              Recursos & Atendimento
            </span>
            <ul className="space-y-2 text-xs text-[#EAE4DC]/80">
              <li>
                <button
                  onClick={onOpenGuide}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Guia VITRAE (Triagem Interativa)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPortal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Área do Paciente (Demonstração)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Agendamento Presencial
                </button>
              </li>
              <li>
                <a href="#avaliacao" className="hover:text-white transition-colors">
                  Avaliação Inicial com Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Right Action Column */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-2 text-xs cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <span>Ao topo</span>
              <ArrowUp className="w-4 h-4 text-[#C27854]" />
            </button>

            <div className="text-left md:text-right text-[11px] text-[#EAE4DC]/50 mt-4 md:mt-0">
              <span>Atendimento com hora marcada</span>
            </div>
          </div>

        </div>

        {/* Regulatory & Ethical Medical Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#EAE4DC]/60">
          <div>
            <p>
              Diretoria Técnica e Coordenação Clínica: <strong className="text-white/80">Dra. Helena Martins</strong> — CRM/SP 148.920 | RQE 62.401.
            </p>
            <p className="mt-0.5">
              VITRAE — Clínica Integrada de Saúde e Bem-Estar Ltda. CNPJ: 48.912.840/0001-92.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#EAE4DC]/50">
            <span>Privacidade & LGPD Médica</span>
            <span aria-hidden="true">·</span>
            <span>Manual de Direitos do Paciente</span>
            <span aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()} VITRAE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
