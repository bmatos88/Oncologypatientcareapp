import { X, User, Pill, FileText, Stethoscope, Calendar, ClipboardList, Activity, History, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  const menuItems = [
    { icon: User, label: 'Perfil', path: '/profile' },
    { icon: Pill, label: 'Medicação', path: '/medication' },
    { icon: FileText, label: 'Documentos', path: '/documents' },
    { icon: Stethoscope, label: 'Equipe ISA responsável', path: '/team' },
    { icon: Calendar, label: 'Consultas', path: '/appointments' },
    { icon: ClipboardList, label: 'Questionários', path: '/questionnaires' },
    { icon: Activity, label: 'Sintomas', path: '/symptoms' },
    { icon: History, label: 'Histórico de sintomas', path: '/symptoms/history' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-xl flex flex-col max-w-[390px]`}
      >
        <div className="p-4 border-b border-[#e8eaed] flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#004474]">Menu</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-5 h-5 text-[#666e80]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className="w-full flex items-center gap-3 px-4 py-4 hover:bg-[#e6fbfb] transition-colors border-b border-[#e8eaed]"
              >
                <Icon className="w-5 h-5 text-[#ED1E79]" />
                <span className="text-sm text-[#666e80]">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="border-t border-[#e8eaed]">
          <button className="w-full flex items-center gap-3 px-4 py-4 hover:bg-[#e8eaed] transition-colors">
            <Settings className="w-5 h-5 text-[#ED1E79]" />
            <span className="text-sm text-[#666e80]">Configurações</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-4 hover:bg-[#fde9f2] transition-colors">
            <LogOut className="w-5 h-5 text-[#ED1E79]" />
            <span className="text-sm text-[#666e80]">Sair</span>
          </button>
        </div>
      </div>
    </>
  );
}
