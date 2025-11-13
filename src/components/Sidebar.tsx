import { Home, Heart, Activity, Bell, User, LogOut, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onLogout: () => void;
}

export function Sidebar({ currentView, onNavigate, onLogout }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'pets', label: 'Mis Mascotas', icon: Heart },
    { id: 'health', label: 'Salud', icon: Activity },
    { id: 'reminders', label: 'Recordatorios', icon: Bell },
    { id: 'settings', label: 'Configuración', icon: User }
  ];

  const NavContent = () => (
    <>
      <div className="p-4 lg:p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
          <div className="hidden lg:block">
            <h2 className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Pet Health
            </h2>
            <p className="text-xs text-gray-500">Usuario Demo</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 lg:p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id || 
                         (item.id === 'pets' && currentView === 'petProfile') ||
                         (item.id === 'health' && currentView === 'nutrition');
          
          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 lg:px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-50 to-teal-50 text-cyan-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'fill-cyan-600/20' : ''}`} />
              <span className={`hidden lg:block ${isActive ? 'font-medium' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="p-3 lg:p-4 border-t border-gray-200">
        <Button
          onClick={() => {
            onLogout();
            setIsMobileMenuOpen(false);
          }}
          variant="outline"
          className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="hidden lg:block">Cerrar sesión</span>
        </Button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Pet Health
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 pt-14"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-64 h-full shadow-xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <NavContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col fixed left-0 top-0 h-full w-64 xl:w-72 bg-white border-r border-gray-200 z-30">
        <NavContent />
      </aside>
    </>
  );
}
