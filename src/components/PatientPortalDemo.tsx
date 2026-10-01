import React, { useState } from 'react';
import { Calendar, Clock, FileText, CheckCircle2, ChevronRight, Activity, ArrowRight, ShieldCheck, HeartPulse, User, Sparkles, X } from 'lucide-react';

interface PatientPortalDemoProps {
  isModal?: boolean;
  onCloseModal?: () => void;
  onOpenBooking?: () => void;
}

export const PatientPortalDemo: React.FC<PatientPortalDemoProps> = ({
  isModal = false,
  onCloseModal,
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<'geral' | 'plano' | 'orientacoes' | 'historico'>('geral');
  const [orientacoesChecked, setOrientacoesChecked] = useState<Record<string, boolean>>({
    'check-1': true,
    'check-2': true,
    'check-3': false,
  });

  const toggleCheck = (id: string) => {
    setOrientacoesChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const portalContent = (
    <div className="bg-[#FAF8F5] rounded-xl border border-[#182B2A]/12 shadow-[0_12px_40px_rgba(24,43,42,0.05)] overflow-hidden">
      
      {/* Top Patient Ribbon */}
      <div className="bg-[#122826] text-white p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1D3B39] border border-[#C27854] flex items-center justify-center text-[#C27854] font-serif-display text-xl">
            CS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif-display text-xl sm:text-2xl text-white font-normal">
                Carolina Silveira
              </h3>
              <span className="text-[11px] font-mono text-[#C27854] bg-[#C27854]/15 px-2 py-0.5 rounded">
                VIT-8842
              </span>
            </div>
            <p className="text-xs text-[#EAE4DC]/80">
              Plano Ativo: Cuidado Integrado Longitudinal · Jardim Europa
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#EAE4DC]">
          <div className="text-right hidden sm:block">
            <span className="text-[10px] font-mono uppercase text-[#C27854] block">
              Médica Coordenadora
            </span>
            <span className="font-medium text-white">Dra. Helena Martins</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-emerald-300 text-[11px]">Plano em Sincronia</span>
        </div>
      </div>

      {/* Segmented Sub-Navigation */}
      <div className="flex border-b border-[#182B2A]/10 bg-[#F5F1EB] overflow-x-auto">
        <button
          onClick={() => setActiveTab('geral')}
          className={`py-3 px-5 text-xs font-medium whitespace-nowrap border-b-2 transition-all cursor-pointer ${
            activeTab === 'geral'
              ? 'border-[#C27854] text-[#122826] bg-[#FAF8F5] font-semibold'
              : 'border-transparent text-[#596E6D] hover:text-[#122826]'
          }`}
        >
          Visão Geral & Próxima Consulta
        </button>
        <button
          onClick={() => setActiveTab('plano')}
          className={`py-3 px-5 text-xs font-medium whitespace-nowrap border-b-2 transition-all cursor-pointer ${
            activeTab === 'plano'
              ? 'border-[#C27854] text-[#122826] bg-[#FAF8F5] font-semibold'
              : 'border-transparent text-[#596E6D] hover:text-[#122826]'
          }`}
        >
          Plano Terapêutico Integrado
        </button>
        <button
          onClick={() => setActiveTab('orientacoes')}
          className={`py-3 px-5 text-xs font-medium whitespace-nowrap border-b-2 transition-all cursor-pointer ${
            activeTab === 'orientacoes'
              ? 'border-[#C27854] text-[#122826] bg-[#FAF8F5] font-semibold'
              : 'border-transparent text-[#596E6D] hover:text-[#122826]'
          }`}
        >
          Orientações & Hábitos Ativos
        </button>
        <button
          onClick={() => setActiveTab('historico')}
          className={`py-3 px-5 text-xs font-medium whitespace-nowrap border-b-2 transition-all cursor-pointer ${
            activeTab === 'historico'
              ? 'border-[#C27854] text-[#122826] bg-[#FAF8F5] font-semibold'
              : 'border-transparent text-[#596E6D] hover:text-[#122826]'
          }`}
        >
          Histórico & Laudos
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="p-6 sm:p-8">
        
        {/* Tab 1: Visão Geral */}
        {activeTab === 'geral' && (
          <div className="space-y-6">
            
            {/* Next Appointment Card */}
            <div className="p-5 sm:p-6 rounded-lg bg-white border border-[#C27854]/40 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C27854]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C27854]">
                    Próximo Atendimento Confirmado
                  </span>
                </div>
                <h4 className="font-serif-display text-2xl text-[#122826] font-normal">
                  Consulta Clínica de Reavaliação Longitudinal
                </h4>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#596E6D]">
                  <span className="flex items-center gap-1.5 text-[#122826] font-medium">
                    <User className="w-3.5 h-3.5 text-[#C27854]" />
                    Dra. Helena Martins
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#1D3B39]" />
                    14 de Outubro (Terça-feira)
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1D3B39]" />
                    10h00 às 11h15 (Presencial)
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  onClick={() => alert('Orientações de preparo: Comparecer em jejum leve de 3h apenas se for realizar nova bioimpedância.')}
                  className="px-4 py-2.5 bg-[#F5F1EB] hover:bg-[#EAE4DC] text-[#122826] text-xs font-medium rounded transition-colors text-center cursor-pointer border border-[#182B2A]/10"
                >
                  Orientações de Chegada
                </button>
                <button
                  onClick={() => alert('Lembrete sincronizado com seu calendário.')}
                  className="px-4 py-2.5 bg-[#1D3B39] hover:bg-[#122826] text-white text-xs font-medium rounded transition-colors text-center cursor-pointer"
                >
                  Adicionar à Agenda
                </button>
              </div>
            </div>

            {/* Biomarker Gauge Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-[#F5F1EB] border border-[#182B2A]/8">
                <span className="text-[11px] font-mono text-[#596E6D] uppercase block mb-1">
                  Qualidade do Sono (Oura/Polissono)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-display text-3xl font-medium text-[#122826]">
                    88<span className="text-sm font-sans text-[#596E6D]">/100</span>
                  </span>
                  <span className="text-xs text-emerald-700 font-medium">+14% vs. início</span>
                </div>
                <p className="text-[11px] text-[#596E6D] mt-1">
                  Aumento expressivo no sono profundo após modulação alimentar.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F5F1EB] border border-[#182B2A]/8">
                <span className="text-[11px] font-mono text-[#596E6D] uppercase block mb-1">
                  Índice Inflamatório (PCR Ultra)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-display text-3xl font-medium text-[#122826]">
                    0.6 <span className="text-xs font-sans text-[#596E6D]">mg/L</span>
                  </span>
                  <span className="text-xs text-emerald-700 font-medium">Faixa Ideal</span>
                </div>
                <p className="text-[11px] text-[#596E6D] mt-1">
                  Redução estável de marcadores sistêmicos em 90 dias.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F5F1EB] border border-[#182B2A]/8">
                <span className="text-[11px] font-mono text-[#596E6D] uppercase block mb-1">
                  Aderência ao Protocolo
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-display text-3xl font-medium text-[#122826]">
                    96%
                  </span>
                  <span className="text-xs text-[#C27854] font-medium">Consistente</span>
                </div>
                <p className="text-[11px] text-[#596E6D] mt-1">
                  Check-ins semanais preenchidos com facilidade.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Plano Terapêutico */}
        {activeTab === 'plano' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-[#C27854] tracking-wider">
                Evolução das Fases do Plano
              </span>
              <span className="text-xs text-[#596E6D]">Ciclo 2026.2</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-white border-l-4 border-emerald-600 border border-[#182B2A]/8">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-[#122826]">
                    Fase 01 — Restauração Metabólica & Desinflamação
                  </span>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    Concluída com Sucesso
                  </span>
                </div>
                <p className="text-xs text-[#596E6D] leading-relaxed">
                  Correção de níveis séricos de vitamina D, magnésio treonato e eliminação de alimentos de alta sensibilidade. Sono reparador restaurado.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border-l-4 border-[#C27854] border border-[#182B2A]/8">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-[#122826]">
                    Fase 02 — Alinhamento Biomecânico & Força Funcional
                  </span>
                  <span className="text-[11px] text-[#C27854] bg-[#C27854]/10 px-2 py-0.5 rounded font-medium">
                    Em Andamento (85%)
                  </span>
                </div>
                <p className="text-xs text-[#596E6D] leading-relaxed">
                  6 sessões com Lucas Almeida para liberação miofascial torácica e fortalecimento de cintura escapular para o trabalho em computador.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF8F5] border-l-4 border-[#182B2A]/20 border border-[#182B2A]/8 opacity-75">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-[#122826]">
                    Fase 03 — Longevidade & Manutenção Anual
                  </span>
                  <span className="text-[11px] text-[#596E6D] bg-[#F5F1EB] px-2 py-0.5 rounded font-medium">
                    Prevista para Dezembro
                  </span>
                </div>
                <p className="text-xs text-[#596E6D] leading-relaxed">
                  Consolidação de hábitos e novo rastreio laboratorial semestral com Dra. Helena Martins.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Orientações */}
        {activeTab === 'orientacoes' && (
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase text-[#C27854] tracking-wider block">
              Recomendações Práticas do Colegiado
            </span>

            <div className="space-y-2.5">
              <div 
                onClick={() => toggleCheck('check-1')}
                className="p-3.5 rounded-lg bg-white border border-[#182B2A]/10 flex items-start gap-3 cursor-pointer hover:border-[#C27854]/50 transition-colors"
              >
                <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                  orientacoesChecked['check-1'] ? 'bg-[#1D3B39] border-[#1D3B39] text-white' : 'border-[#182B2A]/30'
                }`}>
                  {orientacoesChecked['check-1'] && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-[#122826]">
                    Exposição à luz solar matinal (15 min até às 09h)
                  </h5>
                  <p className="text-[11px] text-[#596E6D] mt-0.5">
                    Orientação da Medicina Preventiva para sincronização dos genes do relógio biológico.
                  </p>
                </div>
              </div>

              <div 
                onClick={() => toggleCheck('check-2')}
                className="p-3.5 rounded-lg bg-white border border-[#182B2A]/10 flex items-start gap-3 cursor-pointer hover:border-[#C27854]/50 transition-colors"
              >
                <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                  orientacoesChecked['check-2'] ? 'bg-[#1D3B39] border-[#1D3B39] text-white' : 'border-[#182B2A]/30'
                }`}>
                  {orientacoesChecked['check-2'] && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-[#122826]">
                    Hidratação celular com eletrólitos às 10h e 16h
                  </h5>
                  <p className="text-[11px] text-[#596E6D] mt-0.5">
                    Prescrito pela nutricionista Marina Costa para otimização da clareza cognitiva.
                  </p>
                </div>
              </div>

              <div 
                onClick={() => toggleCheck('check-3')}
                className="p-3.5 rounded-lg bg-white border border-[#182B2A]/10 flex items-start gap-3 cursor-pointer hover:border-[#C27854]/50 transition-colors"
              >
                <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                  orientacoesChecked['check-3'] ? 'bg-[#1D3B39] border-[#1D3B39] text-white' : 'border-[#182B2A]/30'
                }`}>
                  {orientacoesChecked['check-3'] && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-[#122826]">
                    Pausa de mobilidade de escápulas a cada 90 min de tela
                  </h5>
                  <p className="text-[11px] text-[#596E6D] mt-0.5">
                    Orientação de Lucas Almeida para descompressão torácica durante o expediente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Histórico & Laudos */}
        {activeTab === 'historico' && (
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase text-[#C27854] tracking-wider block">
              Documentos & Relatórios Consolidados
            </span>

            <div className="space-y-2">
              <div className="p-3.5 bg-white rounded border border-[#182B2A]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[#C27854]" />
                  <div>
                    <span className="text-xs font-medium text-[#122826] block">
                      Relatório Integrado de Avaliação Inicial (PDF)
                    </span>
                    <span className="text-[11px] text-[#596E6D]">
                      Emitido em 12/08/2026 · Dra. Helena Martins
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => alert('Simulação: Download do relatório médico seguro iniciado.')}
                  className="text-xs text-[#1D3B39] hover:text-[#C27854] font-medium"
                >
                  Baixar Laudo
                </button>
              </div>

              <div className="p-3.5 bg-white rounded border border-[#182B2A]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[#C27854]" />
                  <div>
                    <span className="text-xs font-medium text-[#122826] block">
                      Painel Laboratorial Ampliado (48 Biomarcadores)
                    </span>
                    <span className="text-[11px] text-[#596E6D]">
                      Laboratório In-Loco VITRAE · 10/08/2026
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => alert('Simulação: Visualização dos dados laboratoriais.')}
                  className="text-xs text-[#1D3B39] hover:text-[#C27854] font-medium"
                >
                  Visualizar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer of portal demo */}
      <div className="p-4 bg-[#F5F1EB] border-t border-[#182B2A]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#596E6D]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#2E5654]" />
          <span>Ambiente demonstrativo criptografado em repouso</span>
        </div>
        <span className="italic">
          Demonstração da experiência digital acessível aos pacientes VITRAE
        </span>
      </div>

    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 bg-[#122826]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
        <div className="max-w-4xl w-full relative my-8">
          <button
            onClick={onCloseModal}
            className="absolute -top-12 right-0 text-white hover:text-[#C27854] flex items-center gap-1.5 text-xs font-medium cursor-pointer"
          >
            <span>Fechar demonstração</span>
            <X className="w-5 h-5" />
          </button>
          {portalContent}
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854] mb-3">
            <span>Experiência Digital</span>
            <span aria-hidden="true">/</span>
            <span>Área do Paciente</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance mb-4">
            Acompanhamento contínuo na palma da sua mão.
          </h2>

          <p className="text-base text-[#182B2A]/80 leading-relaxed font-normal text-balance">
            Entre uma consulta e outra, você tem acesso transparente ao seu plano terapêutico, próximas datas e orientações integradas através de nossa interface digital exclusiva.
          </p>
        </div>

        {/* Render Portal Component Container */}
        <div className="max-w-4xl mx-auto">
          {portalContent}
        </div>

      </div>
    </section>
  );
};
