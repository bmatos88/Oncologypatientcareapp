import { ChevronLeft, Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { useNavigate } from 'react-router';

const team = [
  {
    id: 1,
    name: 'Enf. Maria Santos',
    role: 'Enfermeira Responsável',
    specialty: 'Oncologia',
    phone: '(11) 99999-1111',
    email: 'maria.santos@isasaude.com.br',
    schedule: 'Segunda a Sexta, 8h às 18h',
    image: null,
  },
  {
    id: 2,
    name: 'Dr. João Silva',
    role: 'Médico Oncologista',
    specialty: 'Oncologia Clínica',
    phone: '(11) 99999-2222',
    email: 'joao.silva@isasaude.com.br',
    schedule: 'Segunda, Quarta e Sexta, 9h às 17h',
    image: null,
  },
];

export function ISATeam() {
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
          Equipe ISA responsável
        </h1>
      </div>

      <div className="p-4 space-y-4">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8eaed]"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00C3C5] to-[#004474] rounded-full flex items-center justify-center text-white text-xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#004474] text-lg">{member.name}</h3>
                <p className="text-sm text-[#666e80]">{member.role}</p>
                <p className="text-xs text-[#00C3C5] font-bold mt-1">{member.specialty}</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#666e80]" />
                <a href={`tel:${member.phone}`} className="text-[#004474]">{member.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#666e80]" />
                <a href={`mailto:${member.email}`} className="text-[#004474]">{member.email}</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-[#666e80]" />
                <span className="text-[#666e80]">{member.schedule}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => navigate('/chat')}
                className="flex-1 bg-[#00C3C5] text-white py-3 rounded-full font-bold uppercase text-sm hover:bg-[#009fa4] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Conversar
              </button>
              <button className="flex-1 bg-[#004474] text-white py-3 rounded-full font-bold uppercase text-sm hover:bg-[#002d51] transition-colors flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Ligar
              </button>
            </div>
          </div>
        ))}

        <div className="bg-[#e6fbfb] border border-[#00C3C5] rounded-2xl p-4">
          <p className="text-sm text-[#00C3C5] font-bold text-center">
            Em caso de emergência, ligue para 192 (SAMU) ou dirija-se ao hospital mais próximo
          </p>
        </div>
      </div>
    </div>
  );
}
