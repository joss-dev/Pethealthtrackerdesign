import { Heart, Calendar, Bell, Shield, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm mb-6">
            <Heart className="w-4 h-4 text-rose-500" fill="currentColor" />
            <span className="text-sm text-gray-700">Tu compañero en el cuidado de mascotas</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl mb-6 text-gray-900">
            Cuida a tus mascotas como se merecen 🐾
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lleva el control de su salud, alimentación y bienestar desde una sola app.
          </p>
          
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-200 px-8 py-6 rounded-full transition-all hover:scale-105"
          >
            Comenzar ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        {/* Preview Image */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
            <div className="bg-gradient-to-br from-emerald-100 to-blue-100 p-8 md:p-16 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Heart className="w-12 h-12 text-emerald-500" />
                </div>
                <p className="text-gray-600">Vista previa de la aplicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gestiona la salud y bienestar de tus mascotas de manera simple y efectiva
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-8 bg-white/80 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="mb-3 text-gray-900">Registra sus vacunas</h3>
            <p className="text-gray-600">
              Mantén un historial completo de todas las vacunas y tratamientos de tus mascotas
            </p>
          </Card>
          
          <Card className="p-8 bg-white/80 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-4">
              <Bell className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="mb-3 text-gray-900">Recibe recordatorios automáticos</h3>
            <p className="text-gray-600">
              Nunca olvides una cita veterinaria o una dosis de medicamento
            </p>
          </Card>
          
          <Card className="p-8 bg-white/80 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-4">
              <Calendar className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="mb-3 text-gray-900">Organiza su nutrición</h3>
            <p className="text-gray-600">
              Planifica y registra la alimentación diaria de tus mascotas
            </p>
          </Card>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white/50 backdrop-blur py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Lo que dicen nuestros usuarios
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "María González",
                text: "Desde que uso Pet Health Tracker, nunca más olvidé una vacuna. ¡Es increíble!",
                pets: "2 perros"
              },
              {
                name: "Carlos Ramírez",
                text: "La mejor app para organizar el cuidado de mis gatos. Muy intuitiva y completa.",
                pets: "3 gatos"
              },
              {
                name: "Ana Torres",
                text: "Los recordatorios automáticos me han salvado muchas veces. Totalmente recomendada.",
                pets: "1 perro, 1 gato"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-md">
                <div className="mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-4 h-4 text-rose-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                </div>
                <div>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.pets}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl mb-4 text-white">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Únete a miles de dueños que ya cuidan mejor a sus mascotas
          </p>
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-50 shadow-lg px-8 py-6 rounded-full transition-all hover:scale-105"
          >
            Crear cuenta gratis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-emerald-400" fill="currentColor" />
              <span className="text-xl">Pet Health Tracker</span>
            </div>
            <p className="text-gray-400 mb-6">
              Cuidando a tus mascotas con amor y tecnología
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Contacto</a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              © 2025 Pet Health Tracker. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
