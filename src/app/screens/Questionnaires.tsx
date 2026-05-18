import { useState } from 'react';
import { ChevronLeft, ClipboardList, CheckCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router';

const pendingQuestionnaires = [
  { id: 1, title: 'Avaliação de Qualidade de Vida', description: 'Questionário sobre seu bem-estar geral', questions: 15 },
  { id: 2, title: 'Sintomas Semanais', description: 'Como você se sentiu esta semana', questions: 10 },
];

const completedQuestionnaires = [
  { id: 3, title: 'Avaliação Nutricional', date: '2026-05-10', questions: 12 },
  { id: 4, title: 'Sintomas Semanais', date: '2026-05-06', questions: 10 },
  { id: 5, title: 'Avaliação de Dor', date: '2026-05-03', questions: 8 },
];

export function Questionnaires() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'pending' | 'completed'>('pending');

  const pendingCount = pendingQuestionnaires.length;

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
          Questionários
        </h1>
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setTab('pending')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors relative ${
              tab === 'pending'
                ? 'bg-[#00C3C5] text-white'
                : 'bg-white text-[#666e80] border border-[#e8eaed]'
            }`}
          >
            Pendentes
            {pendingCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E93B5A] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {pendingCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setTab('completed')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors ${
              tab === 'completed'
                ? 'bg-[#00C3C5] text-white'
                : 'bg-white text-[#666e80] border border-[#e8eaed]'
            }`}
          >
            Respondidos
          </button>
        </div>

        <div className="space-y-3">
          {tab === 'pending' && pendingQuestionnaires.map((quest) => (
            <div
              key={quest.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed] transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-3 rounded-full bg-[#e6fbfb]">
                  <ClipboardList className="w-5 h-5 text-[#00C3C5]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#004474] flex-1 mb-1">{quest.title}</h3>
                  <p className="text-sm text-[#666e80] mb-2">{quest.description}</p>
                  <div className="flex items-center gap-2 text-xs text-[#666e80]">
                    <Clock className="w-3 h-3" />
                    <span>{quest.questions} perguntas • ≈ 5 min</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/questionnaires/detail')}
                className="w-full bg-[#00C3C5] text-white py-3 rounded-full font-bold uppercase text-sm hover:bg-[#009fa4] transition-colors"
              >
                Responder agora
              </button>
            </div>
          ))}

          {tab === 'completed' && completedQuestionnaires.map((quest) => (
            <div
              key={quest.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]"
            >
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-full bg-[#e6f9ed]">
                  <CheckCircle className="w-5 h-5 text-[#00C643]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-[#004474]">{quest.title}</h3>
                    <span className="bg-[#e6f9ed] text-[#00C643] text-xs font-bold px-2 py-1 rounded-full">
                      Completo
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#666e80]">
                    <span>{new Date(quest.date).toLocaleDateString('pt-BR')}</span>
                    <span>•</span>
                    <span>{quest.questions} perguntas</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {tab === 'pending' && pendingQuestionnaires.length === 0 && (
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[#e8eaed]">
            <div className="bg-[#e6f9ed] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#00C643]" />
            </div>
            <h3 className="font-bold text-[#004474] mb-2">Tudo em dia!</h3>
            <p className="text-sm text-[#666e80]">
              Você não possui questionários pendentes
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
