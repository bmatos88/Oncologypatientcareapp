import { Home, MessageCircle, Activity, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/chat', icon: MessageCircle, label: 'Chat' },
    { path: '/symptoms', icon: Activity, label: 'Sintomas' },
    { path: '/profile', icon: User, label: 'Perfil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#ED1E79] max-w-[390px] mx-auto shadow-lg">
      <div className="flex justify-around items-center px-4 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 min-w-[60px]"
            >
              <Icon
                className={`w-6 h-6 ${active ? 'text-white' : 'text-white/70'}`}
                fill={active ? 'white' : 'none'}
              />
              <span className={`text-[10px] uppercase font-bold ${active ? 'text-white' : 'text-white/70'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
