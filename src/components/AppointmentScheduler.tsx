import React, { useState, useEffect } from 'react';
import { specialtiesData, doctorsData } from '../data';
import { Calendar as CalendarIcon, Clock, User, CheckCircle2, ArrowRight, RotateCcw, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface AppointmentSchedulerProps {
  initialSpecialtyId?: string;
  initialDoctorId?: string;
}

export const AppointmentScheduler: React.FC<AppointmentSchedulerProps> = ({
  initialSpecialtyId,
  initialDoctorId,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(
    initialSpecialtyId || 'clinica-medica'
  );
  const [selectedDoctor, setSelectedDoctor] = useState<string>(
    initialDoctorId || 'dra-helena-martins'
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-14');
  const [selectedTime, setSelectedTime] = useState<string>('10:00');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [bookingError, setBookingError] = useState('');

  // Sincroniza se as props mudarem
  useEffect(() => {
    if (initialSpecialtyId) {
      setSelectedSpecialty(initialSpecialtyId);
      const doc = doctorsData.find((d) => d.specialtyId === initialSpecialtyId);
      if (doc) setSelectedDoctor(doc.id);
    }
    if (initialDoctorId) {
      setSelectedDoctor(initialDoctorId);
      const doc = doctorsData.find((d) => d.id === initialDoctorId);
      if (doc) setSelectedSpecialty(doc.specialtyId);
    }
  }, [initialSpecialtyId, initialDoctorId]);

  // Lista de médicos filtrados pela especialidade selecionada
  const availableDoctors = doctorsData.filter(
    (d) => d.specialtyId === selectedSpecialty
  );

  // Fictional dates (próximos dias úteis)
  const availableDates = [
    { date: '2026-10-14', dayName: 'Ter', dayNum: '14 Out', availableSlots: 3 },
    { date: '2026-10-15', dayName: 'Qua', dayNum: '15 Out', availableSlots: 4 },
    { date: '2026-10-16', dayName: 'Qui', dayNum: '16 Out', availableSlots: 2 },
    { date: '2026-10-19', dayName: 'Seg', dayNum: '19 Out', availableSlots: 5 },
    { date: '2026-10-20', dayName: 'Ter', dayNum: '20 Out', availableSlots: 3 },
    { date: '2026-10-21', dayName: 'Qua', dayNum: '21 Out', availableSlots: 4 },
  ];

  const availableSlots = [
    { time: '08:30', period: 'Manhã' },
    { time: '10:00', period: 'Manhã' },
    { time: '11:30', period: 'Manhã' },
    { time: '14:30', period: 'Tarde' },
    { time: '16:00', period: 'Tarde' },
    { time: '17:30', period: 'Tarde' },
  ];

  const currentSpecialtyData =
    specialtiesData.find((s) => s.id === selectedSpecialty) || specialtiesData[0];
  const currentDoctorData =
    doctorsData.find((d) => d.id === selectedDoctor) ||
    availableDoctors[0] ||
    doctorsData[0];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      setBookingError('Por favor, informe seu nome e telefone para contato.');
      return;
    }
    setBookingError('');
    const code = `VTR-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    setBookingError('');
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
  };

  return (
    <section id="agendamento" className="py-24 sm:py-32 bg-[#F5F1EB] border-y border-[#182B2A]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C27854] mb-3">
            <span>Agendamento Sofisticado</span>
            <span aria-hidden="true">/</span>
            <span>Experiência Presencial</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#122826] font-normal leading-tight text-balance mb-4">
            Reserve seu momento de cuidado.
          </h2>

          <p className="text-base text-[#182B2A]/80 leading-relaxed font-normal text-balance">
            Selecione a especialidade, o profissional de sua preferência e o melhor horário. Toda a nossa infraestrutura e tempo estarão reservados para você.
          </p>
        </div>

        {bookingConfirmed ? (
          /* Visual Confirmation Ticket */
          <div className="max-w-2xl mx-auto bg-[#FAF8F5] rounded-xl p-8 sm:p-12 border border-[#C27854] shadow-xl text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#1D3B39] text-[#C27854] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#C27854] tracking-widest">
                Agendamento Confirmado com Sucesso
              </span>
              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#122826] font-normal">
                Esperamos por você, {patientName.split(' ')[0]}.
              </h3>
              <p className="text-xs sm:text-sm text-[#596E6D]">
                Código de confirmação: <strong className="font-mono text-[#1D3B39]">{confirmationCode}</strong>
              </p>
            </div>

            {/* Ticket Summary Box */}
            <div className="bg-[#F5F1EB] p-6 rounded-lg text-left border border-[#182B2A]/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#182B2A]/10">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#596E6D] block">Especialidade</span>
                  <span className="text-sm font-semibold text-[#122826]">{currentSpecialtyData.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase text-[#596E6D] block">Profissional</span>
                  <span className="text-sm font-semibold text-[#1D3B39]">{currentDoctorData.name}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#596E6D] block">Data Selecionada</span>
                  <span className="text-sm font-medium text-[#122826]">
                    {availableDates.find((d) => d.date === selectedDate)?.dayNum || selectedDate}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#596E6D] block">Horário Reservado</span>
                  <span className="text-sm font-medium text-[#122826]">{selectedTime} (Duração: {currentDoctorData.consultationDuration})</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#182B2A]/10 flex items-start gap-2.5 text-xs text-[#596E6D]">
                <MapPin className="w-4 h-4 text-[#C27854] shrink-0 mt-0.5" />
                <span>Alameda dos Flamboyants, 1240 — Jardim Europa, São Paulo · Valet Cortesia na Entrada</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => alert('Simulação: Lembrete com instruções de rota enviado para seu WhatsApp.')}
                className="px-6 py-3 bg-[#1D3B39] hover:bg-[#122826] text-white text-xs font-semibold rounded transition-colors cursor-pointer"
              >
                Receber Detalhes no WhatsApp
              </button>

              <button
                onClick={handleReset}
                className="text-xs text-[#596E6D] hover:text-[#122826] font-medium underline cursor-pointer"
              >
                Fazer novo agendamento
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Interactive Scheduler Container */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Columns: Selection Workflow */}
            <div className="lg:col-span-7 bg-[#FAF8F5] rounded-xl p-6 sm:p-10 border border-[#182B2A]/10 shadow-[0_8px_30px_rgba(24,43,42,0.03)] space-y-8">
              
              {/* Step 1: Especialidade */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#122826] font-semibold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1D3B39] text-white flex items-center justify-center text-[10px]">1</span>
                    Selecione a Especialidade
                  </label>
                  <span className="text-[11px] text-[#596E6D]">
                    {specialtiesData.length} áreas disponíveis
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {specialtiesData.map((spec) => {
                    const isSelected = selectedSpecialty === spec.id;
                    return (
                      <button
                        type="button"
                        key={spec.id}
                        onClick={() => {
                          setSelectedSpecialty(spec.id);
                          const doc = doctorsData.find((d) => d.specialtyId === spec.id);
                          if (doc) setSelectedDoctor(doc.id);
                        }}
                        className={`p-3 rounded text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1D3B39] text-white border-[#1D3B39] shadow-xs'
                            : 'bg-white border-[#182B2A]/10 text-[#182B2A] hover:bg-[#F5F1EB]'
                        }`}
                      >
                        <span className="text-xs font-medium block leading-snug">
                          {spec.name}
                        </span>
                        <span className={`text-[10px] block mt-0.5 truncate ${isSelected ? 'text-[#EAD0C3]' : 'text-[#596E6D]'}`}>
                          {spec.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Profissional */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-[#122826] font-semibold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1D3B39] text-white flex items-center justify-center text-[10px]">2</span>
                  Profissional de Atendimento
                </label>

                <div className="space-y-2">
                  {availableDoctors.length > 0 ? (
                    availableDoctors.map((doc) => {
                      const isSelected = selectedDoctor === doc.id;
                      return (
                        <div
                          key={doc.id}
                          onClick={() => setSelectedDoctor(doc.id)}
                          className={`p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-white border-[#C27854] shadow-sm'
                              : 'bg-white/60 border-[#182B2A]/8 hover:bg-white'
                          }`}
                        >
                          <div>
                            <h4 className="text-xs sm:text-sm font-semibold text-[#122826]">
                              {doc.name}
                            </h4>
                            <p className="text-[11px] text-[#596E6D]">
                              {doc.specialtyName} · {doc.crm}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-medium text-[#1D3B39]">
                              {doc.consultationDuration}
                            </span>
                            <span className="text-[10px] text-[#596E6D] block">
                              Presencial
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-4 bg-white rounded border border-[#182B2A]/10 text-xs text-[#596E6D]">
                      Profissional padrão atribuído automaticamente pela coordenação.
                    </div>
                  )}
                </div>
              </div>

              {/* Step 3: Dia (Datas disponíveis) */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-[#122826] font-semibold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1D3B39] text-white flex items-center justify-center text-[10px]">3</span>
                  Escolha o Dia
                </label>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.date;
                    return (
                      <button
                        type="button"
                        key={item.date}
                        onClick={() => setSelectedDate(item.date)}
                        className={`p-2.5 rounded text-center border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1D3B39] text-white border-[#1D3B39] shadow-xs'
                            : 'bg-white border-[#182B2A]/10 text-[#182B2A] hover:bg-[#F5F1EB]'
                        }`}
                      >
                        <span className={`text-[10px] font-mono uppercase block ${isSelected ? 'text-[#C27854]' : 'text-[#596E6D]'}`}>
                          {item.dayName}
                        </span>
                        <span className="text-xs font-semibold block my-0.5">
                          {item.dayNum.split(' ')[0]}
                        </span>
                        <span className={`text-[9px] block ${isSelected ? 'text-white/80' : 'text-emerald-700'}`}>
                          {item.availableSlots} horários
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Horário */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-[#122826] font-semibold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1D3B39] text-white flex items-center justify-center text-[10px]">4</span>
                  Horário Disponível
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {availableSlots.map((slot) => {
                    const isSelected = selectedTime === slot.time;
                    return (
                      <button
                        type="button"
                        key={slot.time}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`p-2.5 rounded border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#C27854] text-[#122826] font-semibold shadow-xs'
                            : 'bg-white/60 border-[#182B2A]/10 text-[#596E6D] hover:bg-white'
                        }`}
                      >
                        <span className="text-xs block font-mono">{slot.time}</span>
                        <span className="text-[10px] text-[#596E6D] block">{slot.period}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Resumo & Confirmação */}
            <div className="lg:col-span-5 bg-[#FAF8F5] rounded-xl p-6 sm:p-8 border border-[#182B2A]/12 shadow-[0_8px_30px_rgba(24,43,42,0.04)] space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#C27854] block mb-1">
                  Resumo da Reserva
                </span>
                <h3 className="font-serif-display text-2xl text-[#122826] font-normal">
                  Sua Consulta Integrada
                </h3>
              </div>

              {/* Summary Items */}
              <div className="space-y-3 text-xs border-y border-[#182B2A]/10 py-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#596E6D]">Especialidade</span>
                  <span className="font-medium text-[#122826]">{currentSpecialtyData.name}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#596E6D]">Profissional</span>
                  <span className="font-medium text-[#1D3B39]">{currentDoctorData.name}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#596E6D]">Data</span>
                  <span className="font-medium text-[#122826]">
                    {availableDates.find((d) => d.date === selectedDate)?.dayNum || selectedDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#596E6D]">Horário</span>
                  <span className="font-medium text-[#122826]">{selectedTime}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#596E6D]">Tempo de Consulta</span>
                  <span className="font-medium text-[#122826]">{currentDoctorData.consultationDuration}</span>
                </div>
              </div>

              {/* Patient Basic Fields */}
              <form onSubmit={handleConfirmBooking} className="space-y-3">
                <span className="text-[11px] font-mono uppercase text-[#596E6D] block">
                  Identificação do Paciente
                </span>

                <input
                  type="text"
                  required
                  placeholder="Nome completo *"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#182B2A]/15 rounded text-xs text-[#122826] focus:outline-none focus:border-[#C27854]"
                />

                <input
                  type="tel"
                  required
                  placeholder="Telefone / WhatsApp *"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#182B2A]/15 rounded text-xs text-[#122826] focus:outline-none focus:border-[#C27854]"
                />

                <input
                  type="email"
                  placeholder="E-mail (opcional)"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#182B2A]/15 rounded text-xs text-[#122826] focus:outline-none focus:border-[#C27854]"
                />

                {bookingError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                    {bookingError}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#1D3B39] hover:bg-[#122826] text-white text-xs font-semibold rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Confirmar Agendamento</span>
                    <ArrowRight className="w-4 h-4 text-[#C27854]" />
                  </button>
                </div>
              </form>

              <div className="flex items-center gap-2 text-[11px] text-[#596E6D] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E5654] shrink-0" />
                <span>Cancelamento ou reagendamento sem custo até 24h antes.</span>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
