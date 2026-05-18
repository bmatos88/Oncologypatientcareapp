import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, Upload, Info, Phone, X, FileText, Stethoscope, Users, Ambulance } from 'lucide-react';

export function SymptomIntensity() {
  const navigate = useNavigate();
  const { symptomId } = useParams();
  const [intensity, setIntensity] = useState(0);
  const [frequency, setFrequency] = useState('');
  const [specification, setSpecification] = useState('');
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const symptomNames: Record<string, string> = {
    'cansaco': 'Cansaço',
    'falta-ar': 'Falta de ar',
    'diarreia': 'Diarreia',
    'prisao-ventre': 'Prisão de ventre',
    'vomito': 'Vômitos',
    'enjoo': 'Enjoo',
    'dor': 'Dor',
    'dormencia': 'Dormência',
    'febre': 'Febre',
    'falta-apetite': 'Falta de apetite',
    'lesao-pele': 'Lesão na pele',
    'mucosite': 'Mucosite',
    'outros': 'Outro sintoma',
  };

  const symptomName = symptomNames[symptomId || ''] || 'Sintoma';
  const needsFrequency = symptomId === 'diarreia' || symptomId === 'vomito';
  const needsSpecification = symptomId === 'dor' || symptomId === 'dormencia' || symptomId === 'outros';

  const getSpecificationLabel = () => {
    if (symptomId === 'dor') return 'Qual tipo de dor?';
    if (symptomId === 'dormencia') return 'Qual membro está dormente?';
    if (symptomId === 'outros') return 'Descreva o sintoma';
    return '';
  };

  const intensityLevels = [
    {
      value: 1,
      label: 'Leve',
      color: '#00C643',
      bg: '#e6f9ed',
      icon: FileText,
      action: 'Orientações médicas',
      description: 'Receberá orientações médicas por escrito'
    },
    {
      value: 2,
      label: 'Moderado',
      color: '#E8AD17',
      bg: '#fdf8ec',
      icon: Stethoscope,
      action: 'Avaliação por enfermeira',
      description: 'Avaliação via teleconsulta ou chat'
    },
    {
      value: 3,
      label: 'Forte',
      color: '#ED7B3B',
      bg: '#fdf2ec',
      icon: Users,
      action: 'Visita de enfermeira + médico',
      description: 'Equipe realizará visita domiciliar'
    },
    {
      value: 4,
      label: 'Muito forte',
      color: '#E93B5A',
      bg: '#fdecef',
      icon: Ambulance,
      action: 'Atendimento urgente',
      description: 'Remoção para hospital (APH)'
    },
  ];

  const handleConfirm = () => {
    if (intensity === 0) {
      alert('Por favor, selecione a intensidade do sintoma');
      return;
    }

    if (needsSpecification && !specification.trim()) {
      alert(`Por favor, informe: ${getSpecificationLabel()}`);
      return;
    }

    setShowBottomSheet(true);
  };

  const selectedLevel = intensityLevels.find(level => level.value === intensity);

  return (
    <div className="min-h-screen bg-[#f4f6f9]">
      <div className="bg-white p-4 border-b border-[#e8eaed]">
        <button
          onClick={() => navigate('/symptoms')}
          className="flex items-center gap-2 text-[#666e80] mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-bold uppercase">Voltar</span>
        </button>
        <h1 className="text-xl font-semibold text-[#004474]">
          {symptomName}
        </h1>
      </div>

      <div className="p-4 space-y-6 pb-24">
        {needsSpecification && (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]">
            <label className="block text-sm font-bold text-[#004474] mb-3">
              {getSpecificationLabel()}
            </label>
            <input
              type="text"
              value={specification}
              onChange={(e) => setSpecification(e.target.value)}
              placeholder={
                symptomId === 'dor'
                  ? 'Ex: Dor de cabeça, dor nas costas...'
                  : symptomId === 'dormencia'
                  ? 'Ex: Braço esquerdo, perna direita...'
                  : 'Descreva o sintoma'
              }
              className="w-full px-4 py-3 border border-[#e8eaed] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C3C5] text-sm"
            />
          </div>
        )}

        <div>
          <h2 className="text-base font-bold text-[#004474] mb-4">
            Qual a intensidade do sintoma?
          </h2>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8eaed]">
            <div className="mb-6">
              <input
                type="range"
                min="1"
                max="4"
                value={intensity || 1}
                onChange={(e) => setIntensity(parseInt(e.target.value))}
                className="w-full h-3 rounded-lg appearance-none cursor-pointer slider-thumb"
                style={{
                  background: intensity > 0
                    ? `linear-gradient(to right, ${selectedLevel?.color} 0%, ${selectedLevel?.color} ${((intensity - 1) / 3) * 100}%, #e8eaed ${((intensity - 1) / 3) * 100}%, #e8eaed 100%)`
                    : '#e8eaed'
                }}
              />

              <div className="flex justify-between mt-2 px-1">
                {intensityLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setIntensity(level.value)}
                    className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-transform"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                        intensity === level.value ? 'ring-4 ring-offset-2' : ''
                      }`}
                      style={{
                        backgroundColor: intensity === level.value ? level.color : '#e8eaed',
                        color: intensity === level.value ? 'white' : '#666e80',
                        ringColor: intensity === level.value ? level.color : 'transparent'
                      }}
                    >
                      {level.value}
                    </div>
                    <span className="text-[9px] text-center text-[#666e80] leading-tight max-w-[60px]">
                      {level.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {selectedLevel && (
              <div
                className="rounded-xl p-4 border-2 animate-fade-in"
                style={{
                  backgroundColor: selectedLevel.bg,
                  borderColor: selectedLevel.color
                }}
              >
                <div className="flex gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'white' }}
                  >
                    <selectedLevel.icon className="w-6 h-6" style={{ color: selectedLevel.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm mb-1" style={{ color: selectedLevel.color }}>
                      {selectedLevel.action}
                    </h3>
                    <p className="text-xs text-[#666e80]">
                      {selectedLevel.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {needsFrequency && (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]">
            <label className="block text-sm font-bold text-[#004474] mb-3">
              Quantas vezes ocorreu nas últimas 24 horas?
            </label>
            <input
              type="number"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              placeholder="Ex: 3"
              className="w-full px-4 py-3 border border-[#e8eaed] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C3C5] text-sm"
            />
          </div>
        )}

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8eaed]">
          <label className="block text-sm font-bold text-[#004474] mb-3">
            Deseja enviar uma foto? (Opcional)
          </label>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-[#e8eaed] rounded-lg hover:border-[#00C3C5] transition-colors">
            <Upload className="w-5 h-5 text-[#666e80]" />
            <span className="text-sm text-[#666e80]">Enviar imagem</span>
          </button>
        </div>

        <button
          onClick={handleConfirm}
          disabled={intensity === 0}
          className={`w-full py-4 rounded-full font-bold uppercase transition-colors text-sm ${
            intensity > 0
              ? 'bg-[#00C3C5] text-white hover:bg-[#009fa4]'
              : 'bg-[#e8eaed] text-[#666e80] cursor-not-allowed'
          }`}
        >
          Confirmar sintoma
        </button>
      </div>

      {showBottomSheet && selectedLevel && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowBottomSheet(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-50 max-w-[390px] mx-auto animate-slide-up">
            <button
              onClick={() => setShowBottomSheet(false)}
              className="absolute top-4 right-4 p-2 hover:bg-[#f4f6f9] rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-[#666e80]" />
            </button>

            <div className="flex flex-col mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="p-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: selectedLevel.bg }}
                >
                  <selectedLevel.icon className="w-6 h-6" style={{ color: selectedLevel.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#004474] mb-2">
                    Entendemos como você está se sentindo
                  </h3>
                  <p className="text-sm text-[#666e80] leading-relaxed">
                    {intensity === 4
                      ? 'Vamos acionar nossa equipe médica imediatamente para providenciar atendimento de emergência. Sua segurança é nossa prioridade.'
                      : intensity === 3
                      ? 'Nossa equipe médica vai agendar uma visita para avaliar você pessoalmente. Estaremos aí para cuidar de você.'
                      : intensity === 2
                      ? 'Nossa enfermeira especializada entrará em contato para conversar e orientar você da melhor forma possível.'
                      : 'Vamos enviar orientações personalizadas para ajudar você a se sentir melhor. Estamos aqui para cuidar de você.'
                    }
                  </p>
                </div>
              </div>

              <div
                className="rounded-xl p-4 mb-6"
                style={{
                  backgroundColor: selectedLevel.bg,
                  border: `1px solid ${selectedLevel.color}20`
                }}
              >
                <div className="flex items-center gap-2">
                  <selectedLevel.icon className="w-5 h-5" style={{ color: selectedLevel.color }} />
                  <p className="text-sm font-bold" style={{ color: selectedLevel.color }}>
                    Próxima ação: {selectedLevel.action}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowBottomSheet(false);
                  alert('Sintoma registrado com sucesso! Nossa equipe foi notificada.');
                  navigate('/symptoms/history');
                }}
                className="w-full bg-[#00C3C5] text-white py-4 rounded-full font-bold uppercase hover:bg-[#009fa4] transition-colors text-sm"
              >
                Registrar sintoma
              </button>
              <button
                onClick={() => setShowBottomSheet(false)}
                className="w-full bg-white border-2 border-[#e8eaed] text-[#666e80] py-4 rounded-full font-bold uppercase hover:bg-[#f4f6f9] transition-colors text-sm"
              >
                Editar registro
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
