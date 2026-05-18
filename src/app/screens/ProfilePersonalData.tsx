import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export function ProfilePersonalData() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f4f6f9] pb-24">
      <div className="bg-white p-4 border-b border-[#e8eaed] sticky top-0 z-10">
        <button
          onClick={() => navigate('/profile')}
          className="flex items-center gap-2 text-[#666e80] mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-bold uppercase">Voltar</span>
        </button>
        <h1 className="text-xl font-semibold text-[#004474]">
          Dados pessoais
        </h1>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]">
          <label className="block text-sm font-bold text-[#666e80] mb-2">Nome completo</label>
          <input
            type="text"
            defaultValue="Ana Silva"
            className="w-full px-4 py-3 border border-[#e8eaed] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C3C5]"
          />
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]">
          <label className="block text-sm font-bold text-[#666e80] mb-2">Email</label>
          <input
            type="email"
            defaultValue="ana.silva@email.com"
            className="w-full px-4 py-3 border border-[#e8eaed] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C3C5]"
          />
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]">
          <label className="block text-sm font-bold text-[#666e80] mb-2">Telefone</label>
          <input
            type="tel"
            defaultValue="(11) 99999-9999"
            className="w-full px-4 py-3 border border-[#e8eaed] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C3C5]"
          />
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]">
          <label className="block text-sm font-bold text-[#666e80] mb-2">Data de nascimento</label>
          <input
            type="date"
            defaultValue="1985-03-15"
            className="w-full px-4 py-3 border border-[#e8eaed] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C3C5]"
          />
        </div>

        <button className="w-full bg-[#00C3C5] text-white py-4 rounded-full font-bold uppercase hover:bg-[#009fa4] transition-colors">
          Salvar alterações
        </button>
      </div>
    </div>
  );
}
