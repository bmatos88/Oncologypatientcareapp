import { ChevronLeft, Clock, Plus, Pill } from 'lucide-react';
import { useNavigate } from 'react-router';

const nextMedication = {
  name: 'Ondansetrona',
  dosage: '8mg',
  time: '14:00',
  remaining: '2h 15min'
};

const medications = [
  { id: 1, name: 'Ondansetrona', dosage: '8mg', frequency: '3x ao dia', times: ['08:00', '14:00', '20:00'] },
  { id: 2, name: 'Omeprazol', dosage: '20mg', frequency: '1x ao dia', times: ['08:00'] },
  { id: 3, name: 'Metoclopramida', dosage: '10mg', frequency: 'Se necessário', times: ['Conforme prescrição'] },
  { id: 4, name: 'Dexametasona', dosage: '4mg', frequency: '2x ao dia', times: ['09:00', '18:00'] },
];

export function Medication() {
  const navigate = useNavigate();

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
          Medicação
        </h1>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-br from-[#00C3C5] to-[#009fa4] rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">Próxima medicação</p>
              <h2 className="text-2xl font-bold">{nextMedication.name}</h2>
              <p className="text-sm opacity-90">{nextMedication.dosage}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Pill className="w-6 h-6" />
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 w-fit">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-bold">{nextMedication.time}</span>
            <span className="text-sm opacity-90">• em {nextMedication.remaining}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-[#666e80] uppercase">Todos os medicamentos</h3>
          <button className="flex items-center gap-1 text-[#00C3C5] text-sm font-bold uppercase">
            <Plus className="w-4 h-4" />
            Adicionar
          </button>
        </div>

        <div className="space-y-3">
          {medications.map((med) => (
            <div
              key={med.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-[#004474]">{med.name}</h3>
                  <p className="text-sm text-[#666e80]">{med.dosage}</p>
                </div>
                <span className="bg-[#e6fbfb] text-[#00C3C5] text-xs font-bold px-3 py-1 rounded-full">
                  {med.frequency}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {med.times.map((time, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1 bg-[#f4f6f9] px-3 py-1 rounded-full text-sm text-[#666e80]"
                  >
                    <Clock className="w-3 h-3" />
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-[#00C3C5] text-white py-4 rounded-full font-bold uppercase hover:bg-[#009fa4] transition-colors flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" />
          Novo lembrete de medicação
        </button>
      </div>
    </div>
  );
}
