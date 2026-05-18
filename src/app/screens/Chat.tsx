import { useState } from 'react';
import { Send, Paperclip, Mic, Phone } from 'lucide-react';

const quickActions = [
  'Quero falar com enfermeira',
  'Estou com dor',
  'Preciso reagendar consulta',
  'Tenho dúvida sobre medicação',
];

const mockMessages = [
  { id: 1, text: 'Olá, Ana! Como você está se sentindo hoje?', sender: 'team', time: '10:30' },
  { id: 2, text: 'Olá! Estou me sentindo melhor, obrigada.', sender: 'user', time: '10:32' },
  { id: 3, text: 'Que bom! Lembre-se de tomar sua medicação no horário. Se precisar de algo, estou aqui.', sender: 'team', time: '10:33' },
];

export function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-white">
      <div className="bg-[#00C3C5] p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">Equipe ISA Saúde</h2>
            <p className="text-xs opacity-90">Online</p>
          </div>
          <button className="p-2 bg-white/20 rounded-full">
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-4 bg-[#e6fbfb] border-b border-[#e8eaed]">
        <p className="text-xs font-bold text-[#00C3C5] mb-2 uppercase">Ações rápidas</p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => setMessage(action)}
              className="px-4 py-2 bg-white text-sm text-[#666e80] rounded-full whitespace-nowrap border border-[#e8eaed] hover:bg-[#00C3C5] hover:text-white transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl p-3 ${
                msg.sender === 'user'
                  ? 'bg-[#00C3C5] text-white rounded-br-none'
                  : 'bg-[#f4f6f9] text-[#004474] rounded-bl-none'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-[#666e80]'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t border-[#e8eaed]">
        <div className="flex items-center gap-2">
          <button className="p-2 text-[#666e80] hover:bg-[#f4f6f9] rounded-full transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Digite sua mensagem..."
            className="flex-1 px-4 py-2 bg-[#f4f6f9] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00C3C5]"
          />
          <button className="p-2 text-[#666e80] hover:bg-[#f4f6f9] rounded-full transition-colors">
            <Mic className="w-5 h-5" />
          </button>
          <button
            onClick={handleSend}
            className="p-2 bg-[#00C3C5] text-white rounded-full hover:bg-[#009fa4] transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
