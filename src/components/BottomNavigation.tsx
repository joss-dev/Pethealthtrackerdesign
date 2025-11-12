import { Home, Heart, Activity, Bell, User } from 'lucide-react';

interface BottomNavigationProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function BottomNavigation({ currentView, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Inicio', icon: Home },
    { id: 'pets', label: 'Mascotas', icon: Heart },
    { id: 'health', label: 'Salud', icon: Activity },
    { id: 'reminders', label: 'Alertas', icon: Bell },
    { id: 'settings', label: 'Perfil', icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-screen-md mx-auto">
        <div className="grid grid-cols-5 gap-1 p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id || 
                           (item.id === 'pets' && currentView === 'petProfile') ||
                           (item.id === 'health' && currentView === 'nutrition');
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <Icon 
                  className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`}
                  fill={isActive ? 'currentColor' : 'none'}
                />
                <span className={`text-xs transition-all ${isActive ? 'font-medium' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
