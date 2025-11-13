import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoginScreen } from './components/LoginScreen';
import { Dashboard } from './components/Dashboard';
import { PetsListView } from './components/PetsListView';
import { PetProfile } from './components/PetProfile';
import { HealthRecordsView } from './components/HealthRecordsView';
import { NutritionView } from './components/NutritionView';
import { RemindersView } from './components/RemindersView';
import { SettingsView } from './components/SettingsView';
import { BottomNavigation } from './components/BottomNavigation';
import { Sidebar } from './components/Sidebar';

export default function App() {
  const [appState, setAppState] = useState<'landing' | 'login' | 'app'>('landing');
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  // Mock data for pets
  const mockPets = [
    {
      id: '1',
      name: 'Luna',
      species: 'Perro',
      breed: 'Golden Retriever',
      age: 3,
      weight: '28kg',
      image: 'https://images.unsplash.com/photo-1637852423789-f3a74a632851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2d8ZW58MXx8fHwxNzYyODI2NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: '2',
      name: 'Milo',
      species: 'Gato',
      breed: 'Siamés',
      age: 2,
      weight: '4.5kg',
      image: 'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWFtZXNlJTIwY2F0fGVufDF8fHx8MTc2Mjg2Njg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const handleGetStarted = () => {
    setAppState('login');
  };

  const handleLogin = () => {
    setAppState('app');
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setAppState('landing');
    setCurrentView('dashboard');
    setSelectedPetId(null);
  };

  const handleBackToLanding = () => {
    setAppState('landing');
  };

  const handleNavigate = (view: string, petId?: string) => {
    setCurrentView(view);
    if (petId) {
      setSelectedPetId(petId);
    }
  };

  const handleBack = () => {
    if (currentView === 'petProfile') {
      setCurrentView('pets');
      setSelectedPetId(null);
    } else {
      setCurrentView('dashboard');
    }
  };

  // Landing page view
  if (appState === 'landing') {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  // Login view
  if (appState === 'login') {
    return (
      <LoginScreen 
        onLogin={handleLogin}
        onBack={handleBackToLanding}
      />
    );
  }

  // Main app view
  const selectedPet = selectedPetId ? mockPets.find(p => p.id === selectedPetId) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar for Desktop */}
      <Sidebar 
        currentView={currentView}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="lg:ml-64 xl:ml-72 min-h-screen">
        <div className="max-w-screen-xl mx-auto bg-white lg:bg-transparent min-h-screen">
          {/* Content Container */}
          <div className="lg:p-6 lg:pt-14">
            <div className="lg:bg-white lg:rounded-3xl lg:shadow-sm lg:min-h-[calc(100vh-7rem)] lg:p-8">
              {/* Main Content */}
              {currentView === 'dashboard' && (
                <Dashboard 
                  pets={mockPets} 
                  onNavigate={handleNavigate}
                />
              )}

              {currentView === 'pets' && (
                <PetsListView 
                  pets={mockPets}
                  onSelectPet={(petId) => handleNavigate('petProfile', petId)}
                  onBack={handleBack}
                />
              )}

              {currentView === 'petProfile' && selectedPet && (
                <PetProfile
                  pet={selectedPet}
                  onBack={handleBack}
                  onViewRecords={() => handleNavigate('health')}
                />
              )}

              {currentView === 'health' && (
                <HealthRecordsView onBack={handleBack} />
              )}

              {currentView === 'nutrition' && (
                <NutritionView onBack={handleBack} />
              )}

              {currentView === 'reminders' && (
                <RemindersView onBack={handleBack} />
              )}

              {currentView === 'settings' && (
                <SettingsView 
                  onBack={handleBack}
                  onLogout={handleLogout}
                />
              )}
            </div>
          </div>

          {/* Bottom Navigation - Mobile Only */}
          <div className="lg:hidden">
            <BottomNavigation 
              currentView={currentView}
              onNavigate={handleNavigate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
