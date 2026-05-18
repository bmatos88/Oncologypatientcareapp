import { useNavigate } from 'react-router';
import {
  BatteryLow,
  Wind,
  Droplet,
  Package,
  Flame,
  Utensils,
  Hand,
  Thermometer,
  UtensilsCrossed,
  Waves,
  FileQuestion,
  MoreHorizontal,
  Activity
} from 'lucide-react';

const symptoms = [
  { id: 'cansaco', icon: BatteryLow, label: 'Cansaço', color: '#666E80' },
  { id: 'falta-ar', icon: Wind, label: 'Falta de ar', color: '#004474' },
  { id: 'diarreia', icon: Droplet, label: 'Diarreia', color: '#00C3C5', hasFrequency: true },
  { id: 'prisao-ventre', icon: Package, label: 'Prisão de ventre', color: '#ED7B3B' },
  { id: 'vomito', icon: Activity, label: 'Vômitos', color: '#E93B5A', hasFrequency: true },
  { id: 'enjoo', icon: Waves, label: 'Enjoo', color: '#00C643' },
  { id: 'dor', icon: Flame, label: 'Dor', color: '#E93B5A', hasSpecification: true },
  { id: 'dormencia', icon: Hand, label: 'Dormência', color: '#666E80', hasSpecification: true },
  { id: 'febre', icon: Thermometer, label: 'Febre', color: '#E93B5A' },
  { id: 'falta-apetite', icon: UtensilsCrossed, label: 'Falta de apetite', color: '#E8AD17' },
  { id: 'lesao-pele', icon: FileQuestion, label: 'Lesão na pele', color: '#ED1E79' },
  { id: 'mucosite', icon: Utensils, label: 'Mucosite', color: '#ED1E79' },
  { id: 'outros', icon: MoreHorizontal, label: 'Outro sintoma', color: '#666E80', hasSpecification: true },
];

export function Symptoms() {
  const navigate = useNavigate();

  return (
    <div className="p-4 pb-24">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#004474] mb-2">
          Como você está se sentindo?
        </h1>
        <p className="text-sm text-[#666e80]">
          Selecione os sintomas que você está sentindo
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {symptoms.map((symptom) => {
          const Icon = symptom.icon;
          return (
            <button
              key={symptom.id}
              onClick={() => navigate(`/symptoms/${symptom.id}`)}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed] hover:shadow-md transition-all hover:scale-105 flex flex-col items-center gap-3"
            >
              <div
                className="p-3 rounded-full"
                style={{ backgroundColor: `${symptom.color}20` }}
              >
                <Icon
                  className="w-6 h-6"
                  style={{ color: symptom.color }}
                />
              </div>
              <span className="text-xs text-center text-[#666e80] font-medium leading-tight">
                {symptom.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
