import { useState } from 'react';
import { Heart, Mail, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

interface LoginScreenProps {
  onLogin: () => void;
  onBack: () => void;
}

export function LoginScreen({ onLogin, onBack }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would validate credentials
    if (email && password) {
      onLogin();
    }
  };

  const handleDemoLogin = () => {
    setEmail('demo@pethealth.com');
    setPassword('demo1234');
    setTimeout(() => onLogin(), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur shadow-2xl border-0 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-white" fill="currentColor" />
          </div>
          <h1 className="text-2xl mb-2 text-gray-900">
            {isRegister ? 'Crear cuenta' : 'Bienvenido de vuelta'}
          </h1>
          <p className="text-gray-600">
            {isRegister ? 'Comienza a cuidar a tus mascotas' : 'Inicia sesión para continuar'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Correo electrónico
            </label>
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border-gray-200 focus:border-emerald-400 focus:ring-emerald-400"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-700 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Contraseña
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border-gray-200 focus:border-emerald-400 focus:ring-emerald-400"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl py-6 shadow-lg shadow-emerald-200"
          >
            {isRegister ? 'Crear cuenta' : 'Iniciar sesión'}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">o</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleDemoLogin}
            className="w-full rounded-xl border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 py-6"
          >
            Probar con cuenta demo
          </Button>

          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              {isRegister ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
            </button>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={onBack}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              ← Volver al inicio
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
          <p className="text-sm text-gray-700 text-center">
            <strong>Cuenta demo:</strong> demo@pethealth.com / demo1234
          </p>
        </div>
      </Card>
    </div>
  );
}
