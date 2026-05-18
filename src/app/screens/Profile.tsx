import { ChevronRight, User, MapPin, CreditCard, ClipboardList, Key, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';

const profileSections = [
  {
    title: 'Informações Pessoais',
    items: [
      { icon: User, label: 'Dados pessoais', path: '/profile/personal-data' },
      { icon: MapPin, label: 'Endereço', path: '/profile/address' },
    ]
  },
  {
    title: 'Saúde',
    items: [
      { icon: CreditCard, label: 'Plano de saúde', path: '/profile/health-plan' },
      { icon: ClipboardList, label: 'Questionários respondidos', path: '/questionnaires', badge: '12' },
    ]
  },
  {
    title: 'Conta',
    items: [
      { icon: Key, label: 'Trocar senha', path: '/profile/change-password' },
      { icon: LogOut, label: 'Sair', path: '/logout', danger: true },
    ]
  },
];

export function Profile() {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-6 pb-24">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8eaed]">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00C3C5] to-[#ED1E79] rounded-full flex items-center justify-center text-white text-2xl font-bold">
            A
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-[#004474] text-lg">Ana Silva</h2>
            <p className="text-sm text-[#666e80]">ana.silva@email.com</p>
            <p className="text-xs text-[#666e80] mt-1">ID: 12345</p>
          </div>
        </div>
      </div>

      {profileSections.map((section, idx) => (
        <div key={idx} className="space-y-2">
          <h3 className="text-sm font-bold text-[#666e80] uppercase px-2">
            {section.title}
          </h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8eaed]">
            {section.items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <button
                  key={itemIdx}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 p-4 hover:bg-[#f4f6f9] transition-colors ${
                    itemIdx < section.items.length - 1 ? 'border-b border-[#e8eaed]' : ''
                  }`}
                >
                  <Icon className={`w-5 h-5 ${item.danger ? 'text-[#E93B5A]' : 'text-[#00C3C5]'}`} />
                  <span className={`flex-1 text-left text-sm ${item.danger ? 'text-[#E93B5A]' : 'text-[#666e80]'}`}>
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="bg-[#ED1E79] text-white text-xs font-bold px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className={`w-5 h-5 ${item.danger ? 'text-[#E93B5A]' : 'text-[#666e80]'}`} />
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
