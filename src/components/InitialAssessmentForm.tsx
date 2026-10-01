import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, Clock, Phone, Mail, User, Sparkles } from 'lucide-react';

export const InitialAssessmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    areaInteresse: 'avaliacao-global',
    objetivoPrincipal: '',
    horarioContato: 'manha',
  });

  const [submitted, setSubmitted] = useState(false);
  const [protocolCode, setProtocolCode] = useState('');

  const quickObjectives = [
    'Fadiga e disposição',
    'Check-up de longevidade',
    'Dores na coluna e postura',
    'Equilíbrio metabólico e sono',
    'Dermatologia e saúde cutânea',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone || !formData.email) {
      alert('Por favor, preencha os campos obrigatórios (Nome, Telefone e E-mail).');
      return;
    }

    const randomProtocol = `VIT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setProtocolCode(randomProtocol);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      areaInteresse: 'avaliacao-global',
      objetivoPrincipal: '',
      horarioContato: 'manha',
    });
    setSubmitted(false);
  };

  return (
    <section id="avaliacao" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Conceptual Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854]">
              <span>Acolhimento Inicial</span>
              <span aria-hidden="true">/</span>
              <span>Contato Personalizado</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance">
              Vamos entender o que você precisa.
            </h2>

            <p className="text-base text-[#182B2A]/80 leading-relaxed font-normal text-balance">
              Antes de definir consultas ou procedimentos, nossa equipe dedica tempo para compreender seu momento. Preencha os campos ao lado e nosso concierge clínico entrará em contato com a discrição que você merece.
            </p>

            {/* Reassurance points */}
            <div className="pt-6 border-t border-[#182B2A]/10 space-y-4 text-xs text-[#596E6D]">
              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-[#2E5654] mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#122826] font-medium block">Confidencialidade Médica</strong>
                  <span>Seus dados são protegidos por sigilo e tratados exclusivamente por nossa equipe interna.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C27854] mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#122826] font-medium block">Retorno Atencioso</strong>
                  <span>Contato em até 2 horas úteis no turno de sua preferência.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Architectural Form */}
          <div className="lg:col-span-7 bg-[#F5F1EB] rounded-xl p-6 sm:p-10 border border-[#182B2A]/10 shadow-[0_8px_30px_rgba(24,43,42,0.03)]">
            
            {submitted ? (
              <div className="py-8 space-y-6 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#1D3B39] text-[#C27854] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-[#C27854] tracking-wider block">
                    Solicitação Recebida com Sucesso
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#122826] font-normal">
                    Obrigado, {formData.nome.split(' ')[0]}.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#596E6D] max-w-md mx-auto leading-relaxed">
                    Seu formulário inicial foi direcionado ao concierge da VITRAE. Entraremos em contato no período da <strong>{formData.horarioContato}</strong> pelo telefone ou WhatsApp informado.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-[#182B2A]/10 max-w-sm mx-auto text-left space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#596E6D] block">
                    Protocolo de Acolhimento
                  </span>
                  <span className="text-sm font-mono font-semibold text-[#1D3B39]">
                    {protocolCode}
                  </span>
                  <p className="text-[11px] text-[#596E6D]">
                    Guarde este código para agilizar qualquer contato com nossa recepção.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="text-xs text-[#1D3B39] hover:text-[#C27854] font-medium underline cursor-pointer"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Nome */}
                <div className="space-y-1.5">
                  <label htmlFor="nome" className="text-xs font-medium text-[#122826] block">
                    Nome completo <span className="text-[#C27854]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="nome"
                      type="text"
                      required
                      placeholder="Como prefere ser chamado(a)?"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#182B2A]/15 rounded text-xs sm:text-sm text-[#122826] placeholder-[#596E6D]/50 focus:outline-none focus:border-[#C27854] focus:ring-1 focus:ring-[#C27854] transition-all"
                    />
                    <User className="w-4 h-4 text-[#596E6D]/50 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                {/* Telefone & E-mail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="telefone" className="text-xs font-medium text-[#122826] block">
                      Telefone / WhatsApp <span className="text-[#C27854]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="telefone"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#182B2A]/15 rounded text-xs sm:text-sm text-[#122826] placeholder-[#596E6D]/50 focus:outline-none focus:border-[#C27854] focus:ring-1 focus:ring-[#C27854] transition-all"
                      />
                      <Phone className="w-4 h-4 text-[#596E6D]/50 absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-[#122826] block">
                      E-mail de contato <span className="text-[#C27854]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#182B2A]/15 rounded text-xs sm:text-sm text-[#122826] placeholder-[#596E6D]/50 focus:outline-none focus:border-[#C27854] focus:ring-1 focus:ring-[#C27854] transition-all"
                      />
                      <Mail className="w-4 h-4 text-[#596E6D]/50 absolute right-3 top-3 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Área de Interesse */}
                <div className="space-y-1.5">
                  <label htmlFor="areaInteresse" className="text-xs font-medium text-[#122826] block">
                    Área principal de interesse
                  </label>
                  <select
                    id="areaInteresse"
                    value={formData.areaInteresse}
                    onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#182B2A]/15 rounded text-xs sm:text-sm text-[#122826] focus:outline-none focus:border-[#C27854] focus:ring-1 focus:ring-[#C27854] transition-all cursor-pointer"
                  >
                    <option value="avaliacao-global">Avaliação Global Integrada VITRAE</option>
                    <option value="clinica-medica">Clínica Médica & Coordenação Terapêutica</option>
                    <option value="dermatologia">Dermatologia Clínica & Tecnologias Cutâneas</option>
                    <option value="nutricao">Nutrição Funcional & Metabólica</option>
                    <option value="fisioterapia">Fisioterapia Integrativa & Biomecânica</option>
                    <option value="medicina-preventiva">Medicina Preventiva & Longevidade</option>
                    <option value="psicologia">Psicologia Clínica & Manejo do Estresse</option>
                  </select>
                </div>

                {/* Objetivo Principal */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="objetivo" className="text-xs font-medium text-[#122826] block">
                      Qual é o seu objetivo principal?
                    </label>
                    <span className="text-[10px] text-[#596E6D]">Opcional</span>
                  </div>
                  <textarea
                    id="objetivo"
                    rows={3}
                    placeholder="Conte resumidamente o que você sente, sintomas ou o que busca alcançar com nossos especialistas..."
                    value={formData.objetivoPrincipal}
                    onChange={(e) => setFormData({ ...formData, objetivoPrincipal: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#182B2A]/15 rounded text-xs sm:text-sm text-[#122826] placeholder-[#596E6D]/50 focus:outline-none focus:border-[#C27854] focus:ring-1 focus:ring-[#C27854] transition-all resize-none"
                  />

                  {/* Quick tags to click */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {quickObjectives.map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            objetivoPrincipal: formData.objetivoPrincipal
                              ? `${formData.objetivoPrincipal}; ${tag}`
                              : tag,
                          })
                        }
                        className="text-[11px] text-[#596E6D] hover:text-[#122826] bg-white/70 hover:bg-white px-2.5 py-0.5 rounded border border-[#182B2A]/8 transition-colors cursor-pointer"
                      >
                        + {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Melhor Horário para Contato */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#122826] block">
                    Melhor horário para retorno do concierge
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'manha', label: 'Manhã', hours: '08h – 12h' },
                      { id: 'tarde', label: 'Tarde', hours: '12h – 18h' },
                      { id: 'noite', label: 'Noite', hours: '18h – 20h' },
                    ].map((slot) => {
                      const isSelected = formData.horarioContato === slot.id;
                      return (
                        <button
                          type="button"
                          key={slot.id}
                          onClick={() => setFormData({ ...formData, horarioContato: slot.id })}
                          className={`p-2.5 rounded border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-white border-[#C27854] text-[#122826] shadow-xs'
                              : 'bg-white/50 border-[#182B2A]/10 text-[#596E6D] hover:bg-white'
                          }`}
                        >
                          <span className="text-xs font-medium block">{slot.label}</span>
                          <span className="text-[10px] text-[#596E6D] block">{slot.hours}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#1D3B39] hover:bg-[#122826] text-white text-xs sm:text-sm font-semibold rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <span>Solicitar Contato do Concierge VITRAE</span>
                    <Send className="w-4 h-4 text-[#C27854]" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
