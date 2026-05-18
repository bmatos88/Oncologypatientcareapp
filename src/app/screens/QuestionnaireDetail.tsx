import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const questions = [
  {
    id: 1,
    question: 'Como você avalia sua qualidade de sono nas últimas 24 horas?',
    type: 'scale',
    options: ['Muito ruim', 'Ruim', 'Regular', 'Bom', 'Muito bom']
  },
  {
    id: 2,
    question: 'Como está seu apetite hoje?',
    type: 'scale',
    options: ['Nenhum', 'Pouco', 'Regular', 'Bom', 'Muito bom']
  },
  {
    id: 3,
    question: 'Como você classifica seu nível de energia?',
    type: 'scale',
    options: ['Sem energia', 'Baixo', 'Moderado', 'Alto', 'Muito alto']
  },
  {
    id: 4,
    question: 'Você sentiu algum desconforto emocional hoje?',
    type: 'scale',
    options: ['Muito desconfortável', 'Desconfortável', 'Neutro', 'Confortável', 'Muito confortável']
  },
  {
    id: 5,
    question: 'Como está sua capacidade de realizar atividades diárias?',
    type: 'scale',
    options: ['Incapaz', 'Com dificuldade', 'Regular', 'Boa', 'Excelente']
  },
];

export function QuestionnaireDetail() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert('Questionário concluído com sucesso!');
      navigate('/questionnaires');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentAnswer = answers[questions[currentQuestion].id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#f4f6f9] pb-24">
      <div className="bg-white p-4 border-b border-[#e8eaed] sticky top-0 z-10">
        <button
          onClick={() => navigate('/questionnaires')}
          className="flex items-center gap-2 text-[#666e80] mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-bold uppercase">Voltar</span>
        </button>
        <h1 className="text-xl font-semibold text-[#004474] mb-3">
          Avaliação de Bem-Estar
        </h1>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-[#e8eaed] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#00C3C5] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-bold text-[#666e80]">
            {currentQuestion + 1}/{questions.length}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8eaed] mb-6">
          <h2 className="text-lg font-bold text-[#004474] mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  currentAnswer === index
                    ? 'border-[#00C3C5] bg-[#e6fbfb]'
                    : 'border-[#e8eaed] hover:border-[#00C3C5]/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    currentAnswer === index
                      ? 'border-[#00C3C5] bg-[#00C3C5]'
                      : 'border-[#e8eaed]'
                  }`}>
                    {currentAnswer === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    currentAnswer === index ? 'text-[#00C3C5]' : 'text-[#666e80]'
                  }`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {currentQuestion > 0 && (
            <button
              onClick={handlePrevious}
              className="flex-1 bg-white border-2 border-[#00C3C5] text-[#00C3C5] py-4 rounded-full font-bold uppercase hover:bg-[#e6fbfb] transition-colors flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={currentAnswer === undefined}
            className={`flex-1 py-4 rounded-full font-bold uppercase transition-colors flex items-center justify-center gap-2 ${
              currentAnswer !== undefined
                ? 'bg-[#00C3C5] text-white hover:bg-[#009fa4]'
                : 'bg-[#e8eaed] text-[#666e80] cursor-not-allowed'
            }`}
          >
            {currentQuestion < questions.length - 1 ? 'Próxima' : 'Finalizar'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
