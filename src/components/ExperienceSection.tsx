import React, { useState } from 'react';
import { Check, ArrowRight, Share2, Activity, Layers, HeartPulse, Sparkles } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenBooking: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenBooking }) => {
  const [activeVector, setActiveVector] = useState(0);

  const vectors = [
    {
      id: 'longitudinal',
      title: '01. Mapeamento Longitudinal',
      shortTitle: 'Mapeamento',
      tagline: 'Não tratamos apenas o sintoma de hoje, compreendemos sua história inteira.',
      patientExperience: 'Em vez de uma consulta apressada de 15 minutos, dedicamos até 90 minutos para rastrear o sono, o histórico familiar, a carga de estresse e os exames laboratoriais detalhados.',
      clinicalAction: 'A equipe clínica constrói uma linha do tempo biológica para identificar a causa raiz de indisposições, fadiga ou dores recorrentes.',
      precisionMetric: '90 min',
      precisionLabel: 'Investigação aprofundada na primeira consulta',
      icon: Activity
    },
    {
      id: 'colegiado',
      title: '02. Colegiado Clínico Integrado',
      shortTitle: 'Colegiado',
      tagline: 'Seus médicos e terapeutas conversam entre si antes de definir a conduta.',
      patientExperience: 'Você não precisa levar pastas pesadas de exames ou recontar sua biografia a cada consulta. O nutricionista já conhece suas restrições metabólicas identificadas pelo clínico geral.',
      clinicalAction: 'Reuniões semanais entre clínico geral, dermatologista, nutricionista e fisioterapeuta para alinhar condutas sem contradições.',
      precisionMetric: '100%',
      precisionLabel: 'Casos discutidos em convergência multidisciplinar',
      icon: Layers
    },
    {
      id: 'comunicacao',
      title: '03. Comunicação sem Ruídos',
      shortTitle: 'Comunicação',
      tagline: 'Um único canal de acompanhamento contínuo e sem burocracia.',
      patientExperience: 'Sua rotina pós-consulta conta com suporte de um concierge de saúde e acesso direto à equipe para esclarecer prescrições e dosagens.',
      clinicalAction: 'Monitoramento ativo entre consultas com checagens proativas sobre tolerância e bem-estar do paciente.',
      precisionMetric: '0 ruído',
      precisionLabel: 'Canal direto e humanizado com a clínica',
      icon: Share2
    },
    {
      id: 'longevidade',
      title: '04. Longevidade & Autonomia',
      shortTitle: 'Longevidade',
      tagline: 'Cuidar do presente para garantir vigor e clareza mental nas próximas décadas.',
      patientExperience: 'Metas graduais e exequíveis, desenhadas para seu estilo de vida real, protegendo massa muscular, saúde cardiovascular e cognição.',
      clinicalAction: 'Rastreio precoce de marcadores de senescência celular e inflamação crônica silenciosa.',
      precisionMetric: '10 anos+',
      precisionLabel: 'Visão de planejamento de vitalidade futura',
      icon: HeartPulse
    }
  ];

  const currentVector = vectors[activeVector];
  const CurrentIcon = currentVector.icon;

  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-[#F5F1EB] relative border-y border-[#182B2A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Editorial Proportion */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854] mb-3">
            <span>Experiência VITRAE</span>
            <span aria-hidden="true">/</span>
            <span>Filosofia de Cuidado</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance mb-6">
            Um olhar completo sobre você.
          </h2>

          <p className="text-base sm:text-lg text-[#182B2A]/80 leading-relaxed font-normal text-balance">
            A medicina tradicional costuma fragmentar o ser humano em especialidades isoladas que não se comunicam. 
            Na VITRAE, unimos conhecimento científico avançado, tempo de escuta e integração contínua para orquestrar um cuidado coerente, fluido e humano.
          </p>
        </div>

        {/* Asymmetric Composition: Matrix Diagram & Interactive Vector Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Interactive Vector Navigator (Editorial Selector) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#596E6D] block mb-3">
                Selecione um vetor da integração
              </span>

              {vectors.map((vec, index) => {
                const isSelected = activeVector === index;
                const VecIcon = vec.icon;
                return (
                  <button
                    key={vec.id}
                    onClick={() => setActiveVector(index)}
                    className={`w-full text-left p-4 sm:p-5 rounded transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? 'bg-[#FAF8F5] border-[#C27854] shadow-[0_4px_16px_rgba(24,43,42,0.06)]'
                        : 'bg-[#FAF8F5]/40 border-transparent hover:bg-[#FAF8F5]/80 hover:border-[#182B2A]/10 text-[#596E6D]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded ${isSelected ? 'bg-[#1D3B39] text-[#C27854]' : 'bg-[#EAE4DC] text-[#182B2A]'}`}>
                          <VecIcon className="w-4 h-4" />
                        </div>
                        <span className={`text-sm sm:text-base font-medium ${isSelected ? 'text-[#122826] font-semibold' : 'text-[#182B2A]/80'}`}>
                          {vec.title}
                        </span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#C27854] translate-x-1' : 'text-transparent'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Summary Note */}
            <div className="pt-4 border-t border-[#182B2A]/10 text-xs text-[#596E6D] leading-relaxed">
              <span className="font-semibold text-[#122826]">Diferencial VITRAE:</span> Cada especialista acessa a mesma linha de raciocínio, eliminando exames repetidos e diagnósticos conflitantes.
            </div>
          </div>

          {/* Right Column: Dynamic Deep-Dive Stage (Non-card, architectural plate) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-lg p-6 sm:p-10 border border-[#182B2A]/10 shadow-[0_8px_30px_rgba(24,43,42,0.04)] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header of Active Vector */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#182B2A]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1D3B39] flex items-center justify-center text-[#C27854]">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#C27854] tracking-wider block">
                      Dimensão Ativa
                    </span>
                    <h3 className="font-serif-display text-xl sm:text-2xl text-[#122826]">
                      {currentVector.title}
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-serif-display text-2xl text-[#1D3B39] font-medium">
                    {currentVector.precisionMetric}
                  </div>
                  <div className="text-[11px] text-[#596E6D] max-w-[130px] leading-tight">
                    {currentVector.precisionLabel}
                  </div>
                </div>
              </div>

              {/* Tagline Statement */}
              <p className="font-serif-display text-lg sm:text-xl text-[#1D3B39] italic leading-snug">
                “{currentVector.tagline}”
              </p>

              {/* Two-column architectural comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#C27854] block">
                    O que você vivencia na prática
                  </span>
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#182B2A]/85">
                    {currentVector.patientExperience}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#1D3B39] block">
                    Como nossa equipe médica atua
                  </span>
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#182B2A]/85">
                    {currentVector.clinicalAction}
                  </p>
                </div>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-4 border-t border-[#182B2A]/8 flex flex-wrap gap-4 text-xs text-[#596E6D]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#2E5654]" />
                  <span>Histórico unificado na nuvem segura</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#2E5654]" />
                  <span>Sem sobreposição de medicações</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#2E5654]" />
                  <span>Resumo executivo após cada ciclo</span>
                </div>
              </div>

            </div>

            {/* Bottom Action strip */}
            <div className="pt-8 mt-6 border-t border-[#182B2A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#596E6D]">
                Deseja vivenciar essa experiência de cuidado integrado?
              </span>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-[#1D3B39] hover:bg-[#122826] text-white text-xs font-semibold rounded transition-colors flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
              >
                <span>Conhecer Pessoalmente</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C27854]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
