import { useState } from 'react';
import { ChevronLeft, Calendar, Clock, User, FileText, X, RefreshCw, FastForward } from 'lucide-react';
import { useNavigate } from 'react-router';

const upcomingAppointments = [
  { id: 1, doctor: 'Dr. João Silva', specialty: 'Oncologia', date: '2026-05-15', time: '14:00', reason: 'Consulta de acompanhamento' },
  { id: 2, doctor: 'Enf. Maria Santos', specialty: 'Enfermagem', date: '2026-05-18', time: '10:00', reason: 'Aplicação de medicação' },
  { id: 3, doctor: 'Dr. Pedro Costa', specialty: 'Cardiologia', date: '2026-05-22', time: '16:00', reason: 'Avaliação cardíaca' },
];

const pastAppointments = [
  { id: 4, doctor: 'Dr. João Silva', specialty: 'Oncologia', date: '2026-05-01', time: '14:00', conclusion: 'Paciente apresentando boa evolução. Manter tratamento atual.' },
  { id: 5, doctor: 'Enf. Maria Santos', specialty: 'Enfermagem', date: '2026-04-28', time: '10:00', conclusion: 'Medicação aplicada conforme protocolo. Sem intercorrências.' },
];

export function Appointments() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'upcoming' | 'history'>('upcoming');

  return (
    <div className="min-h-screen bg-[#f4f6f9] pb-20">
      <div className="bg-white p-4 border-b border-[#e8eaed] sticky top-0 z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#666e80] mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-bold uppercase">Voltar</span>
        </button>
        <h1 className="text-xl font-semibold text-[#004474]">
          Consultas
        </h1>
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setTab('upcoming')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors ${
              tab === 'upcoming'
                ? 'bg-[#00C3C5] text-white'
                : 'bg-white text-[#666e80] border border-[#e8eaed]'
            }`}
          >
            Próximas
          </button>
          <button
            onClick={() => setTab('history')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors ${
              tab === 'history'
                ? 'bg-[#00C3C5] text-white'
                : 'bg-white text-[#666e80] border border-[#e8eaed]'
            }`}
          >
            Histórico
          </button>
        </div>

        <div className="space-y-3">
          {tab === 'upcoming' && upcomingAppointments.map((apt) => (
            <div
              key={apt.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00C3C5] to-[#004474] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {apt.doctor.split(' ')[1][0]}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#004474]">{apt.doctor}</h3>
                  <p className="text-sm text-[#666e80]">{apt.specialty}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-[#666e80]" />
                  <span className="text-[#004474]">{new Date(apt.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-[#666e80]" />
                  <span className="text-[#004474]">{apt.time}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <FileText className="w-4 h-4 text-[#666e80] mt-0.5" />
                  <span className="text-[#666e80]">{apt.reason}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-[#e6fbfb] text-[#00C3C5] py-2 rounded-full font-bold uppercase text-xs hover:bg-[#00C3C5] hover:text-white transition-colors flex items-center justify-center gap-1">
                  <RefreshCw className="w-3 h-3" />
                  Reagendar
                </button>
                <button className="flex-1 bg-[#e6edf1] text-[#004474] py-2 rounded-full font-bold uppercase text-xs hover:bg-[#004474] hover:text-white transition-colors flex items-center justify-center gap-1">
                  <FastForward className="w-3 h-3" />
                  Adiantar
                </button>
                <button className="flex-1 bg-[#fdecef] text-[#E93B5A] py-2 rounded-full font-bold uppercase text-xs hover:bg-[#E93B5A] hover:text-white transition-colors flex items-center justify-center gap-1">
                  <X className="w-3 h-3" />
                  Cancelar
                </button>
              </div>
            </div>
          ))}

          {tab === 'history' && pastAppointments.map((apt) => (
            <div
              key={apt.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#e8eaed] rounded-full flex items-center justify-center text-[#666e80] text-sm font-bold">
                  {apt.doctor.split(' ')[1][0]}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#004474]">{apt.doctor}</h3>
                  <p className="text-sm text-[#666e80]">{apt.specialty}</p>
                </div>
                <span className="bg-[#e6f9ed] text-[#00C643] text-xs font-bold px-2 py-1 rounded-full">
                  Realizada
                </span>
              </div>

              <div className="flex items-center gap-4 mb-3 text-sm text-[#666e80]">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(apt.date).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {apt.time}
                </div>
              </div>

              <div className="bg-[#f4f6f9] rounded-lg p-3">
                <p className="text-xs font-bold text-[#666e80] mb-1 uppercase">Conduta final</p>
                <p className="text-sm text-[#004474]">{apt.conclusion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
