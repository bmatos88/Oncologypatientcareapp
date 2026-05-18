import { useState } from 'react';
import { ChevronLeft, Calendar, X, Image as ImageIcon, FileText } from 'lucide-react';
import { useNavigate } from 'react-router';

interface SymptomHistoryItem {
  id: number;
  symptom: string;
  intensity: number;
  date: string;
  time: string;
  hasImage: boolean;
  frequency: string | null;
  specification: string | null;
}

const mockHistory: SymptomHistoryItem[] = [
  { id: 1, symptom: 'Dor', intensity: 3, date: '2026-05-13', time: '10:30', hasImage: true, frequency: null, specification: 'Dor de cabeça latejante' },
  { id: 2, symptom: 'Enjoo', intensity: 2, date: '2026-05-13', time: '08:15', hasImage: false, frequency: null, specification: null },
  { id: 3, symptom: 'Cansaço', intensity: 2, date: '2026-05-12', time: '16:45', hasImage: false, frequency: null, specification: null },
  { id: 4, symptom: 'Febre', intensity: 4, date: '2026-05-12', time: '14:20', hasImage: true, frequency: null, specification: null },
  { id: 5, symptom: 'Vômitos', intensity: 3, date: '2026-05-11', time: '12:00', hasImage: false, frequency: '3x nas últimas 24h', specification: null },
];

export function SymptomHistory() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'7days' | '30days' | 'all'>('7days');
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomHistoryItem | null>(null);

  const getIntensityColor = (intensity: number) => {
    if (intensity === 1) return '#00C643';
    if (intensity === 2) return '#E8AD17';
    if (intensity === 3) return '#ED7B3B';
    return '#E93B5A';
  };

  const getIntensityBg = (intensity: number) => {
    if (intensity === 1) return '#e6f9ed';
    if (intensity === 2) return '#fdf8ec';
    if (intensity === 3) return '#fdf2ec';
    return '#fdecef';
  };

  const getIntensityLabel = (intensity: number) => {
    if (intensity === 1) return 'Leve';
    if (intensity === 2) return 'Moderado';
    if (intensity === 3) return 'Forte';
    return 'Muito forte';
  };

  const getIntensityAction = (intensity: number) => {
    if (intensity === 1) return 'Orientações médicas';
    if (intensity === 2) return 'Avaliação enfermeira';
    if (intensity === 3) return 'Visita médica';
    return 'APH - Remoção';
  };

  return (
    <div className="min-h-screen bg-[#f4f6f9] pb-24">
      <div className="bg-white p-4 border-b border-[#e8eaed] sticky top-0 z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#666e80] mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-bold uppercase">Voltar</span>
        </button>
        <h1 className="text-xl font-semibold text-[#004474]">
          Histórico de sintomas
        </h1>
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilter('7days')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors ${
              filter === '7days'
                ? 'bg-[#00C3C5] text-white'
                : 'bg-white text-[#666e80] border border-[#e8eaed]'
            }`}
          >
            Últimos 7 dias
          </button>
          <button
            onClick={() => setFilter('30days')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors ${
              filter === '30days'
                ? 'bg-[#00C3C5] text-white'
                : 'bg-white text-[#666e80] border border-[#e8eaed]'
            }`}
          >
            30 dias
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors ${
              filter === 'all'
                ? 'bg-[#00C3C5] text-white'
                : 'bg-white text-[#666e80] border border-[#e8eaed]'
            }`}
          >
            Todos
          </button>
        </div>

        <div className="space-y-3">
          {mockHistory.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedSymptom(item)}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed] cursor-pointer hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-[#004474]">{item.symptom}</h3>
                    {item.hasImage && (
                      <span className="flex items-center gap-1 text-xs bg-[#e6edf1] text-[#004474] px-2 py-1 rounded">
                        <ImageIcon className="w-3 h-3" />
                        Foto
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#666e80] mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(item.date).toLocaleDateString('pt-BR')} às {item.time}</span>
                  </div>
                  {item.specification && (
                    <p className="text-xs text-[#666e80] mt-1 flex items-start gap-1">
                      <FileText className="w-3 h-3 mt-0.5" />
                      {item.specification}
                    </p>
                  )}
                  {item.frequency && (
                    <p className="text-xs text-[#666e80] mt-1">Frequência: {item.frequency}</p>
                  )}
                </div>
                <div
                  className="flex flex-col items-center justify-center w-16 h-16 rounded-full font-bold flex-shrink-0 ml-3"
                  style={{
                    backgroundColor: getIntensityBg(item.intensity),
                    color: getIntensityColor(item.intensity)
                  }}
                >
                  <span className="text-2xl">{item.intensity}</span>
                  <span className="text-[8px] leading-tight text-center px-1">{getIntensityLabel(item.intensity)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSymptom && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSelectedSymptom(null)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-50 max-w-[390px] mx-auto animate-slide-up">
            <button
              onClick={() => setSelectedSymptom(null)}
              className="absolute top-4 right-4 p-2 hover:bg-[#f4f6f9] rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-[#666e80]" />
            </button>

            <h3 className="text-lg font-bold text-[#004474] mb-4">
              Detalhes do sintoma
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-[#666e80] mb-1">Sintoma</p>
                <p className="text-base text-[#004474]">{selectedSymptom.symptom}</p>
              </div>

              <div>
                <p className="text-sm font-bold text-[#666e80] mb-1">Intensidade</p>
                <div className="flex items-center gap-3">
                  <div
                    className="flex flex-col items-center justify-center w-16 h-16 rounded-full font-bold"
                    style={{
                      backgroundColor: getIntensityBg(selectedSymptom.intensity),
                      color: getIntensityColor(selectedSymptom.intensity)
                    }}
                  >
                    <span className="text-2xl">{selectedSymptom.intensity}</span>
                    <span className="text-[8px] leading-tight">{getIntensityLabel(selectedSymptom.intensity)}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#004474]">{getIntensityLabel(selectedSymptom.intensity)}</p>
                    <p className="text-xs text-[#666e80]">Escala de 1 a 4</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-[#666e80] mb-1">Ação tomada</p>
                <div
                  className="rounded-lg p-3 border"
                  style={{
                    backgroundColor: getIntensityBg(selectedSymptom.intensity),
                    borderColor: getIntensityColor(selectedSymptom.intensity)
                  }}
                >
                  <p className="text-sm font-bold" style={{ color: getIntensityColor(selectedSymptom.intensity) }}>
                    {getIntensityAction(selectedSymptom.intensity)}
                  </p>
                </div>
              </div>

              {selectedSymptom.specification && (
                <div>
                  <p className="text-sm font-bold text-[#666e80] mb-1">Detalhes</p>
                  <p className="text-base text-[#004474]">{selectedSymptom.specification}</p>
                </div>
              )}

              <div>
                <p className="text-sm font-bold text-[#666e80] mb-1">Data e hora</p>
                <p className="text-base text-[#004474]">
                  {new Date(selectedSymptom.date).toLocaleDateString('pt-BR')} às {selectedSymptom.time}
                </p>
              </div>

              {selectedSymptom.frequency && (
                <div>
                  <p className="text-sm font-bold text-[#666e80] mb-1">Frequência</p>
                  <p className="text-base text-[#004474]">{selectedSymptom.frequency}</p>
                </div>
              )}

              {selectedSymptom.hasImage && (
                <div>
                  <p className="text-sm font-bold text-[#666e80] mb-1">Imagem anexada</p>
                  <div className="bg-[#f4f6f9] rounded-lg p-4 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-[#666e80]" />
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setSelectedSymptom(null)}
              className="w-full bg-[#00C3C5] text-white py-4 rounded-full font-bold uppercase hover:bg-[#009fa4] transition-colors mt-6"
            >
              Fechar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
