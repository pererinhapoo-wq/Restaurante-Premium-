import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (specialtyId?: string, doctorId?: string) => void;
  onOpenPortal: () => void;
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenPortal,
  onOpenGuide
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'A Jornada', href: '#jornada' },
    { label: 'Profissionais', href: '#profissionais' },
    { label: 'Ambientes', href: '#ambientes' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#182B2A]/8 py-3.5 shadow-[0_4px_20px_rgba(24,43,42,0.03)]'
            : 'bg-[#FAF8F5]/60 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-baseline gap-1.5 focus:outline-none"
            aria-label="VITRAE Clínica Integrada"
          >
            <span className="font-serif-display text-2xl sm:text-[26px] tracking-[0.14em] text-[#122826] font-normal transition-colors group-hover:text-[#C27854]">
              VITRAE
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C27854]/80 transition-transform group-hover:scale-125" />
          </a>

          {/* Zone 2: Clean text navigation links (4-6 links, single-line) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-[#182B2A]/75 tracking-normal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#122826] transition-colors whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C27854] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenGuide}
              className="relative py-1 text-[#2E5654] hover:text-[#C27854] font-medium transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer"
            >
              Guia VITRAE
              <span className="text-[10px] text-[#C27854] font-serif-display italic">Interativo</span>
            </button>
          </nav>

          {/* Zone 3: 1-2 Primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPortal}
              className="text-xs font-medium text-[#182B2A]/80 hover:text-[#182B2A] py-2 px-3 rounded border border-[#182B2A]/15 hover:border-[#182B2A]/30 transition-all cursor-pointer whitespace-nowrap"
            >
              Área do Paciente
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="text-xs font-semibold tracking-wide text-white bg-[#1D3B39] hover:bg-[#122826] py-2 px-4 rounded transition-all shadow-[0_2px_8px_rgba(29,59,57,0.15)] hover:shadow-[0_4px_12px_rgba(29,59,57,0.25)] cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Agendar Consulta</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C27854]" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="text-xs font-medium text-white bg-[#1D3B39] py-1.5 px-3 rounded"
            >
              Agendar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#182B2A] focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF8F5]/98 pt-20 px-6 pb-8 flex flex-col justify-between sm:hidden backdrop-blur-lg animate-fadeIn">
          <div className="space-y-4 pt-4">
            <p className="text-xs tracking-widest uppercase text-[#596E6D] font-mono">Navegação</p>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif-display text-2xl text-[#122826] py-1 border-b border-[#182B2A]/10"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="font-serif-display text-2xl text-left text-[#C27854] py-1 border-b border-[#182B2A]/10 flex items-center justify-between"
              >
                <span>Guia VITRAE</span>
                <span className="text-xs font-sans text-[#596E6D]">Interativo</span>
              </button>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#182B2A]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full py-3 text-center text-sm font-medium text-[#182B2A] border border-[#182B2A]/20 rounded"
            >
              Área Digital do Paciente (Demonstração)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-medium text-white bg-[#1D3B39] rounded"
            >
              Agendar Consulta Presencial
            </button>
          </div>
        </div>
      )}
    </>
  );
};
