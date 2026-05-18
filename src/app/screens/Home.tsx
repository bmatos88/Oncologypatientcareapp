import { Heart, FileQuestion, MessageCircle, Pill, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <div className="mt-2 mb-6">
        <h1 className="text-2xl font-semibold text-[#004474] mb-1">
          Olá, Ana 💜
        </h1>
        <p className="text-[#666e80] text-sm">
          Estamos aqui para cuidar de você.
        </p>
      </div>

      <div className="space-y-3">
        <div
          onClick={() => navigate('/symptoms')}
          className="bg-gradient-to-br from-[#00C3C5] to-[#009fa4] rounded-2xl p-5 shadow-md cursor-pointer hover:shadow-lg transition-all text-white"
        >
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">
                Como você está se sentindo hoje?
              </h3>
              <p className="text-sm text-white/90 mb-3">
                Conte como está se sentindo e receba o melhor cuidado.
              </p>
              <button className="bg-white text-[#00C3C5] px-5 py-2 rounded-full text-xs font-bold uppercase hover:bg-white/90 transition-colors">
                Informar sintomas
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div
            onClick={() => navigate('/questionnaires')}
            className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed] cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-start">
              <div className="bg-[#fde9f2] p-3 rounded-full mb-3">
                <FileQuestion className="w-5 h-5 text-[#ED1E79]" />
              </div>
              <span className="bg-[#E93B5A] text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
                2 pendentes
              </span>
              <h4 className="text-sm font-bold text-[#004474] mb-1">
                Questionários
              </h4>
              <p className="text-xs text-[#666e80]">
                Responder agora
              </p>
            </div>
          </div>

          <div
            onClick={() => navigate('/medication')}
            className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed] cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-start">
              <div className="bg-[#e6f9ed] p-3 rounded-full mb-3">
                <Pill className="w-5 h-5 text-[#00C643]" />
              </div>
              <span className="text-xs text-[#00C643] font-bold mb-2">
                14:00
              </span>
              <h4 className="text-sm font-bold text-[#004474] mb-1">
                Próxima dose
              </h4>
              <p className="text-xs text-[#666e80]">
                Ondansetrona
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate('/chat')}
          className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8eaed] cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="bg-[#e6edf1] p-3 rounded-full">
              <MessageCircle className="w-6 h-6 text-[#004474]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#004474] mb-1">
                Fale com nossos profissionais
              </h3>
              <p className="text-sm text-[#666e80] mb-3">
                Nossa equipe está disponível para ajudar você.
              </p>
              <button className="bg-[#004474] text-white px-5 py-2 rounded-full text-xs font-bold uppercase hover:bg-[#002d51] transition-colors">
                Iniciar conversa
              </button>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate('/appointments')}
          className="bg-[#e6fbfb] border-2 border-[#00C3C5] rounded-2xl p-4 cursor-pointer hover:bg-[#d0f5f7] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#00C3C5] p-2 rounded-full">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-[#00C3C5]">
                Próxima consulta: 15/05 às 14:00
              </p>
              <p className="text-xs text-[#00C3C5] mt-1">
                Dr. João Silva - Oncologia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
