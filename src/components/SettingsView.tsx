import { ArrowLeft, User, Mail, Bell, Moon, LogOut, Shield, HelpCircle, Info } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';

interface SettingsViewProps {
  onBack: () => void;
  onLogout: () => void;
}

export function SettingsView({ onBack, onLogout }: SettingsViewProps) {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-6 rounded-b-3xl shadow-lg">
        <Button
          onClick={onBack}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl mb-2">Configuración</h1>
            <p className="text-gray-300">Gestiona tu cuenta y preferencias</p>
          </div>
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="px-4 pt-6 space-y-6">
        {/* User Profile */}
        <Card className="p-6 bg-white border-0 shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-900 mb-1">Usuario Demo</h3>
              <p className="text-sm text-gray-600">demo@pethealth.com</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full rounded-xl border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50"
          >
            Editar perfil
          </Button>
        </Card>

        {/* Account Settings */}
        <div>
          <h2 className="text-lg text-gray-900 mb-3 px-2">Cuenta</h2>
          <Card className="bg-white border-0 shadow-md divide-y divide-gray-100">
            <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors active:bg-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">Correo electrónico</p>
                <p className="text-sm text-gray-500">demo@pethealth.com</p>
              </div>
            </button>

            <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors active:bg-gray-100">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">Cambiar contraseña</p>
                <p className="text-sm text-gray-500">Actualiza tu contraseña</p>
              </div>
            </button>
          </Card>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-lg text-gray-900 mb-3 px-2">Notificaciones</h2>
          <Card className="bg-white border-0 shadow-md divide-y divide-gray-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-gray-900">Recordatorios</p>
                  <p className="text-sm text-gray-500">Recibe alertas de eventos</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-gray-900">Notificaciones push</p>
                  <p className="text-sm text-gray-500">Alertas en tiempo real</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </Card>
        </div>

        {/* Preferences */}
        <div>
          <h2 className="text-lg text-gray-900 mb-3 px-2">Preferencias</h2>
          <Card className="bg-white border-0 shadow-md divide-y divide-gray-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Moon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-gray-900">Modo oscuro</p>
                  <p className="text-sm text-gray-500">Tema de la aplicación</p>
                </div>
              </div>
              <Switch />
            </div>
          </Card>
        </div>

        {/* Help & Support */}
        <div>
          <h2 className="text-lg text-gray-900 mb-3 px-2">Ayuda y soporte</h2>
          <Card className="bg-white border-0 shadow-md divide-y divide-gray-100">
            <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors active:bg-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">Centro de ayuda</p>
                <p className="text-sm text-gray-500">Preguntas frecuentes</p>
              </div>
            </button>

            <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors active:bg-gray-100">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Info className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">Acerca de</p>
                <p className="text-sm text-gray-500">Versión 1.0.0</p>
              </div>
            </button>
          </Card>
        </div>

        {/* Logout Button */}
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full rounded-xl border-2 border-red-200 hover:border-red-300 hover:bg-red-50 text-red-600 hover:text-red-700 py-6"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Cerrar sesión
        </Button>

        {/* Footer Info */}
        <div className="text-center py-4">
          <p className="text-sm text-gray-500">
            Pet Health Tracker v1.0.0
          </p>
          <p className="text-xs text-gray-400 mt-1">
            © 2025 Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
