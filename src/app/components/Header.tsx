import { Bell, Menu } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Logo } from './Logo';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-[#e8eaed] sticky top-0 z-40">
      <Logo />

      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/notifications')}
          className="relative p-1"
        >
          <Bell className="w-6 h-6 text-[#ED1E79]" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#E93B5A] rounded-full"></span>
        </button>
        <button onClick={onMenuClick} className="p-1">
          <Menu className="w-6 h-6 text-[#ED1E79]" />
        </button>
      </div>
    </div>
  );
}
