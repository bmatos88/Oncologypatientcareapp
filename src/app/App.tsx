import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { DrawerMenu } from './components/DrawerMenu';
import { Home } from './screens/Home';
import { Symptoms } from './screens/Symptoms';
import { SymptomIntensity } from './screens/SymptomIntensity';
import { SymptomHistory } from './screens/SymptomHistory';
import { Chat } from './screens/Chat';
import { Profile } from './screens/Profile';
import { ProfilePersonalData } from './screens/ProfilePersonalData';
import { Notifications } from './screens/Notifications';
import { Medication } from './screens/Medication';
import { Documents } from './screens/Documents';
import { ISATeam } from './screens/ISATeam';
import { Appointments } from './screens/Appointments';
import { Questionnaires } from './screens/Questionnaires';
import { QuestionnaireDetail } from './screens/QuestionnaireDetail';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#f4f6f9] flex justify-center">
        <div className="w-full max-w-[390px] min-h-screen flex flex-col relative">
          <Header onMenuClick={() => setIsDrawerOpen(true)} />

          <div className="flex-1 overflow-y-auto pb-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/symptoms" element={<Symptoms />} />
              <Route path="/symptoms/:symptomId" element={<SymptomIntensity />} />
              <Route path="/symptoms/history" element={<SymptomHistory />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/personal-data" element={<ProfilePersonalData />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/medication" element={<Medication />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/team" element={<ISATeam />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/questionnaires" element={<Questionnaires />} />
              <Route path="/questionnaires/detail" element={<QuestionnaireDetail />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          <BottomNav />
          <DrawerMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </div>
      </div>
    </BrowserRouter>
  );
}
