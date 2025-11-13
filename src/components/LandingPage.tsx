import { Heart, Calendar, FileText, Bell, Shield, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onGetStarted: () => void;
}

const features = [
  {
    icon: FileText,
    title: 'Historial Médico',
    description: 'Mantén todos los registros veterinarios, vacunas e historial médico en un solo lugar.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Calendar,
    title: 'Recordatorios Inteligentes',
    description: 'Nunca pierdas una cita, vacuna o hora de alimentación con alertas inteligentes.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Bell,
    title: 'Notificaciones en Tiempo Real',
    description: 'Recibe actualizaciones instantáneas sobre eventos de salud próximos e hitos importantes.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Seguro y Privado',
    description: 'Los datos de tu mascota están encriptados y almacenados de forma segura con protección empresarial.',
    color: 'from-green-500 to-teal-500'
  }
];

const benefits = [
  'Rastrea múltiples mascotas en una cuenta',
  'Accede a registros desde cualquier dispositivo',
  'Comparte información de salud con tu veterinario',
  'Exporta reportes e historial',
  'Planes de nutrición y alimentación',
  'Recordatorios de medicamentos'
];

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
              </div>
              <span className="text-base sm:text-xl bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Pet Health
              </span>
            </div>
            <Button
              onClick={onGetStarted}
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 shadow-lg shadow-cyan-500/25 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Iniciar Sesión</span>
              <span className="sm:hidden">Entrar</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600')] opacity-5 bg-cover bg-center" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-100 text-cyan-700 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
                <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                Disponible en todos los dispositivos
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 leading-tight">
                La Salud de tu Mascota,
                <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent"> Todo en un Solo Lugar</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Lleva el control de vacunas, citas, medicamentos y el historial completo de salud de tu mascota con nuestra plataforma intuitiva.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={onGetStarted}
                  className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 shadow-xl shadow-cyan-500/30"
                >
                  Comenzar Gratis
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onGetStarted}
                  className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 border-2"
                >
                  Ver Demostración
                </Button>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  Sin tarjeta de crédito
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  Gratis para siempre
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative px-4 sm:px-0">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-3xl blur-2xl opacity-20" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800"
                  alt="Mascotas felices"
                  className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full"
                />
                <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-900">Vacunación Completa</p>
                      <p className="text-xs sm:text-sm text-gray-500">Max • Ahora mismo</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3 sm:mb-4">
              Todo lo que tu Mascota Necesita
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Herramientas completas de seguimiento de salud diseñadas para dueños modernos de mascotas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-5 sm:p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '10K+', label: 'Usuarios Activos' },
              { number: '25K+', label: 'Mascotas Registradas' },
              { number: '50K+', label: 'Vacunas Registradas' },
              { number: '4.9', label: 'Calificación Promedio' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800"
                alt="Cuidado de mascotas"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-6">
                Por qué nos Aman los Dueños de Mascotas
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Únete a miles de dueños de mascotas que confían en nosotros con la salud de sus miembros peludos de la familia.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                onClick={onGetStarted}
                className="w-full sm:w-auto text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 shadow-xl shadow-cyan-500/30"
              >
                Comenzar a Rastrear Hoy
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3 sm:mb-4">
              Lo que Dicen Nuestros Usuarios
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Testimonios reales de dueños felices de mascotas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                name: 'María González',
                role: 'Dueña de 2 perros',
                text: 'Desde que uso Pet Health Tracker, nunca más olvidé una vacuna. La app es intuitiva y me ahorra mucho tiempo. ¡Increíble!',
                rating: 5
              },
              {
                name: 'Carlos Ramírez',
                role: 'Dueño de 3 gatos',
                text: 'La mejor herramienta para organizar el cuidado de mis gatos. Los recordatorios automáticos son perfectos.',
                rating: 5
              },
              {
                name: 'Ana Torres',
                role: 'Dueña de 1 perro y 1 gato',
                text: 'Excelente app. Puedo compartir la información con mi veterinario fácilmente. Totalmente recomendada.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-5 sm:p-6 border-0 shadow-lg h-full hover:shadow-xl transition-all">
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Heart key={i} className="w-4 h-4 text-rose-400 fill-rose-400" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm sm:text-base">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-900">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600')] opacity-10 bg-cover bg-center" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 px-4">
              ¿Listo para Darle a tu Mascota el Mejor Cuidado?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-cyan-100 mb-6 sm:mb-8 px-4">
              Comienza a gestionar la salud de tu mascota hoy. Sin tarjeta de crédito requerida.
            </p>
            <Button
              size="lg"
              onClick={onGetStarted}
              className="w-full sm:w-auto text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-white text-cyan-600 hover:bg-gray-50 shadow-xl mx-4"
            >
              Comenzar Gratis
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-white text-sm sm:text-base">Pet Health Tracker</span>
            </div>
            <p className="text-xs sm:text-sm text-center">
              © 2025 Pet Health Tracker. Hecho con ❤️ para dueños de mascotas en todas partes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
