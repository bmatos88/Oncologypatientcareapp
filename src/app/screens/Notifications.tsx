import { useState } from 'react';
import { ChevronLeft, FileText, User, ClipboardCheck, Calendar, Pill, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

const mockNotifications = [
  { id: 1, type: 'document', icon: FileText, title: 'Enviar documentos', message: 'Por favor, envie os exames solicitados', time: '2h atrás', read: false },
  { id: 2, type: 'profile', icon: User, title: 'Atualizar cadastro', message: 'Complete as informações do seu perfil', time: '5h atrás', read: false },
  { id: 3, type: 'questionnaire', icon: ClipboardCheck, title: 'Novo questionário', message: 'Você tem um questionário pendente para responder', time: '1 dia atrás', read: true },
  { id: 4, type: 'appointment', icon: Calendar, title: 'Consulta agendada', message: 'Consulta marcada para 15/05/2026 às 14:00', time: '2 dias atrás', read: true },
  { id: 5, type: 'medication', icon: Pill, title: 'Próxima medicação', message: 'Lembrete: Ondansetrona 8mg às 14:00', time: '3 dias atrás', read: true },
  { id: 6, type: 'message', icon: MessageCircle, title: 'Mensagem da equipe', message: 'A Dra. Maria deixou uma mensagem para você', time: '4 dias atrás', read: true },
];

export function Notifications() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');

  const filteredNotifications = mockNotifications.filter(notif => {
    if (filter === 'read') return notif.read;
    if (filter === 'unread') return !notif.read;
    return true;
  });

  const unreadCount = mockNotifications.filter(n => !n.read).length;

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
          Central de notificações
        </h1>
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors ${
              filter === 'all'
                ? 'bg-[#00C3C5] text-white'
                : 'bg-white text-[#666e80] border border-[#e8eaed]'
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors relative ${
              filter === 'unread'
                ? 'bg-[#00C3C5] text-white'
                : 'bg-white text-[#666e80] border border-[#e8eaed]'
            }`}
          >
            Não lidas
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E93B5A] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setFilter('read')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors ${
              filter === 'read'
                ? 'bg-[#00C3C5] text-white'
                : 'bg-white text-[#666e80] border border-[#e8eaed]'
            }`}
          >
            Lidas
          </button>
        </div>

        <div className="space-y-3">
          {filteredNotifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                className={`bg-white rounded-2xl p-4 shadow-sm border transition-all hover:shadow-md ${
                  notif.read ? 'border-[#e8eaed]' : 'border-[#00C3C5] bg-[#e6fbfb]'
                }`}
              >
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notif.read ? 'bg-[#f4f6f9]' : 'bg-[#00C3C5]/20'}`}>
                    <Icon className={`w-5 h-5 ${notif.read ? 'text-[#666e80]' : 'text-[#00C3C5]'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-[#004474] text-sm">{notif.title}</h3>
                      {!notif.read && (
                        <span className="w-2 h-2 bg-[#00C3C5] rounded-full flex-shrink-0 ml-2 mt-1"></span>
                      )}
                    </div>
                    <p className="text-sm text-[#666e80] mb-2">{notif.message}</p>
                    <p className="text-xs text-[#666e80]">{notif.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
