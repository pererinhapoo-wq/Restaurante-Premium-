import React, { useState } from 'react';
import { X, Compass, ArrowRight, RotateCcw, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';

interface VitrayGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommendation: (specialtyId: string) => void;
}

export const VitrayGuideModal: React.FC<VitrayGuideModalProps> = ({
  isOpen,
  onClose,
  onSelectRecommendation
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [selectedPace, setSelectedPace] = useState<string>('');

  if (!isOpen) return null;

  const reasons = [
    {
      id: 'metabolismo',
      title: 'Vitalidade, Sono & Metabolismo',
      description: 'Fadiga inexplicada, sono não reparador, oscilações de peso ou lentidão digestiva.',
      recommendedSpecialtyId: 'clinica-medica',
      trackName: 'Trilha de Otimização Metabólica & Vitalidade',
      primaryDoctor: 'Dra. Helena Martins (Clínica Médica) + Marina Costa (Nutrição)'
    },
    {
      id: 'pele',
      title: 'Saúde Cutânea & Regeneração',
      description: 'Rosácea, acne persistente, manchas, perda de viço ou desejo de rejuvenescimento sutil.',
      recommendedSpecialtyId: 'dermatologia',
      trackName: 'Trilha Dermatológica & Equilíbrio Celular',
      primaryDoctor: 'Dr. Rafael Duarte (Dermatologia) + Marina Costa (Nutrição)'
    },
    {
      id: 'dor-postura',
      title: 'Dores Articulares, Postura & Mobilidade',
      description: 'Tensões cervicais crônicas pelo trabalho, desconfortos na coluna, lesões ou rigidez.',
      recommendedSpecialtyId: 'fisioterapia',
      trackName: 'Trilha Biomecânica & Reabilitação Funcional',
      primaryDoctor: 'Lucas Almeida (Fisioterapia Integrativa)'
    },
    {
      id: 'preventivo',
      title: 'Check-Up Profundo & Longevidade Ativa',
      description: 'Prevenção primária, mapeamento genético/epigenético e proteção cardiovascular.',
      recommendedSpecialtyId: 'medicina-preventiva',
      trackName: 'Trilha de Longevidade Humana & Medicina Preventiva',
      primaryDoctor: 'Dra. Camila Valença (Medicina Preventiva)'
    },
    {
      id: 'estresse-mente',
      title: 'Sobrecarga Mental, Ansiedade & Burnout',
      description: 'Exaustão cognitiva, ansiedade, sobrecarga profissional e somatizações no corpo.',
      recommendedSpecialtyId: 'psicologia',
      trackName: 'Trilha de Equilíbrio Neurovegetativo & Mente',
      primaryDoctor: 'Dr. Thiago Prado (Psicologia) + Dra. Helena Martins (Clínica Médica)'
    }
  ];

  const paces = [
    {
      id: 'intenso',
      label: 'Rotina intensa com agenda restrita',
      detail: 'Priorizamos condensar avaliações no mesmo dia com agendamentos combinados.'
    },
    {
      id: 'gradual',
      label: 'Busco transição gradual e reflexiva',
      detail: 'Passo a passo com intervalos generosos para implementação de novos hábitos.'
    },
    {
      id: 'checkup',
      label: 'Foco em diagnóstico completo inicial',
      detail: 'Primeira etapa com bateria de exames laboratoriais in-loco e consulta estendida.'
    }
  ];

  const activeResult = reasons.find((r) => r.id === selectedReason) || reasons[0];

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedReason('');
    setSelectedPace('');
  };

  const handleConfirmTrack = () => {
    onSelectRecommendation(activeResult.recommendedSpecialtyId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#122826]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-[#FAF8F5] rounded-xl max-w-2xl w-full border border-[#C27854]/40 shadow-2xl p-6 sm:p-10 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#596E6D] hover:text-[#122826] p-2 rounded-full hover:bg-[#F5F1EB] transition-colors cursor-pointer"
          aria-label="Fechar Guia"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C27854] uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            <span>Guia Interativo VITRAE</span>
            <span aria-hidden="true">·</span>
            <span>Passo {currentStep} de 3</span>
          </div>

          <h3 className="font-serif-display text-2xl sm:text-3xl text-[#122826] font-normal leading-tight">
            {currentStep === 1 && 'Qual é o principal motivo da sua visita?'}
            {currentStep === 2 && 'Qual é o ritmo atual da sua rotina?'}
            {currentStep === 3 && 'Sua sugestão de início na VITRAE'}
          </h3>

          <p className="text-xs sm:text-sm text-[#596E6D] mt-1">
            {currentStep === 1 && 'Selecione a queixa ou objetivo que mais ressoa com o que você sente hoje.'}
            {currentStep === 2 && 'Isso nos ajuda a calibrar a densidade do seu plano inicial de cuidados.'}
            {currentStep === 3 && 'Um roteiro personalizado para sua primeira experiência.'}
          </p>
        </div>

        {/* Step 1: Select Main Reason */}
        {currentStep === 1 && (
          <div className="space-y-3">
            {reasons.map((r) => {
              const isSelected = selectedReason === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedReason(r.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#C27854] shadow-sm'
                      : 'bg-[#F5F1EB]/70 border-[#182B2A]/8 hover:bg-white hover:border-[#182B2A]/20'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-[#122826] mb-1">
                        {r.title}
                      </h4>
                      <p className="text-xs text-[#596E6D] leading-relaxed">
                        {r.description}
                      </p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border mt-1 shrink-0 flex items-center justify-center ${
                      isSelected ? 'border-[#C27854] bg-[#C27854]' : 'border-[#182B2A]/20'
                    }`}>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="pt-4 flex justify-end">
              <button
                disabled={!selectedReason}
                onClick={() => setCurrentStep(2)}
                className={`px-5 py-3 rounded text-xs font-semibold flex items-center gap-2 transition-all ${
                  selectedReason
                    ? 'bg-[#1D3B39] hover:bg-[#122826] text-white cursor-pointer shadow-sm'
                    : 'bg-[#EAE4DC] text-[#596E6D]/50 cursor-not-allowed'
                }`}
              >
                <span>Avançar</span>
                <ArrowRight className="w-4 h-4 text-[#C27854]" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Pace */}
        {currentStep === 2 && (
          <div className="space-y-3">
            {paces.map((p) => {
              const isSelected = selectedPace === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPace(p.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#C27854] shadow-sm'
                      : 'bg-[#F5F1EB]/70 border-[#182B2A]/8 hover:bg-white hover:border-[#182B2A]/20'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-[#122826] mb-1">
                        {p.label}
                      </h4>
                      <p className="text-xs text-[#596E6D] leading-relaxed">
                        {p.detail}
                      </p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border mt-1 shrink-0 flex items-center justify-center ${
                      isSelected ? 'border-[#C27854] bg-[#C27854]' : 'border-[#182B2A]/20'
                    }`}>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-[#596E6D] hover:text-[#122826] font-medium cursor-pointer"
              >
                ← Voltar
              </button>

              <button
                disabled={!selectedPace}
                onClick={() => setCurrentStep(3)}
                className={`px-5 py-3 rounded text-xs font-semibold flex items-center gap-2 transition-all ${
                  selectedPace
                    ? 'bg-[#1D3B39] hover:bg-[#122826] text-white cursor-pointer shadow-sm'
                    : 'bg-[#EAE4DC] text-[#596E6D]/50 cursor-not-allowed'
                }`}
              >
                <span>Ver Recomendação</span>
                <ArrowRight className="w-4 h-4 text-[#C27854]" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Recommendation Result */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#C27854]/40 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C27854]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#C27854]">
                  Trilha Sugerida para Você
                </span>
              </div>

              <div>
                <h4 className="font-serif-display text-2xl text-[#122826] font-normal">
                  {activeResult.trackName}
                </h4>
                <p className="text-xs sm:text-sm text-[#2E5654] font-medium mt-1">
                  Ponto de partida: {activeResult.primaryDoctor}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#182B2A]/8 text-xs text-[#182B2A]/80 leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5654] mt-0.5 shrink-0" />
                  <span>Primeira consulta de até 90 minutos para diagnóstico aprofundado.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5654] mt-0.5 shrink-0" />
                  <span>Exames laboratoriais e bioimpedância integrados realizados na clínica.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5654] mt-0.5 shrink-0" />
                  <span>Discussão de caso em colegiado antes da consolidação do plano final.</span>
                </div>
              </div>
            </div>

            {/* Mandatory Medical Ethical Disclaimer */}
            <div className="p-4 rounded-lg bg-[#F5F1EB] border border-[#182B2A]/10 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#C27854] mt-0.5 shrink-0" />
              <p className="text-[11.5px] leading-relaxed text-[#596E6D]">
                <strong className="text-[#122826] font-medium">Nota de Responsabilidade Médica:</strong> Esta sugestão é exclusivamente orientativa e acolhedora, desenhada para facilitar seu direcionamento inicial e não substitui avaliação ou consulta médica presencial individualizada.
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleReset}
                className="text-xs text-[#596E6D] hover:text-[#122826] font-medium flex items-center gap-1.5 cursor-pointer py-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer perguntas</span>
              </button>

              <button
                onClick={handleConfirmTrack}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#1D3B39] hover:bg-[#122826] text-white text-xs sm:text-sm font-semibold rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Prosseguir para Agendamento com esta Trilha</span>
                <ArrowRight className="w-4 h-4 text-[#C27854]" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
