import { Calendar, AlertCircle, Heart, TrendingUp, Plus } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  image: string;
}

interface DashboardProps {
  pets: Pet[];
  onNavigate: (view: string, petId?: string) => void;
}

export function Dashboard({ pets, onNavigate }: DashboardProps) {
  const upcomingEvents = [
    {
      id: 1,
      petName: 'Luna',
      type: 'Vacuna',
      title: 'Vacuna antirrábica',
      date: '15 de noviembre',
      urgent: true
    },
    {
      id: 2,
      petName: 'Milo',
      type: 'Cita',
      title: 'Chequeo anual',
      date: '20 de noviembre',
      urgent: false
    },
    {
      id: 3,
      petName: 'Luna',
      type: 'Medicamento',
      title: 'Desparasitación',
      date: '25 de noviembre',
      urgent: false
    }
  ];

  const healthStats = [
    {
      label: 'Vacunas al día',
      value: '2/2',
      icon: Heart,
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      label: 'Próximas citas',
      value: '3',
      icon: Calendar,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Alertas activas',
      value: '1',
      icon: AlertCircle,
      color: 'from-amber-400 to-amber-600',
      bgColor: 'bg-amber-50'
    }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-emerald-100 text-sm mb-1">Hola, Usuario 👋</p>
            <h1 className="text-2xl">Dashboard</h1>
          </div>
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6" fill="currentColor" />
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {healthStats.map((stat, index) => (
            <div key={index} className="bg-white/20 backdrop-blur rounded-2xl p-3 text-center">
              <stat.icon className="w-5 h-5 mx-auto mb-2" />
              <p className="text-2xl mb-1">{stat.value}</p>
              <p className="text-xs text-emerald-50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pt-6 space-y-6">
        {/* Mis Mascotas */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg text-gray-900">Mis Mascotas</h2>
            <Button
              onClick={() => onNavigate('pets')}
              variant="ghost"
              size="sm"
              className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
            >
              Ver todas
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {pets.map((pet) => (
              <Card
                key={pet.id}
                onClick={() => onNavigate('petProfile', pet.id)}
                className="p-4 bg-white border-0 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                  <ImageWithFallback
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-gray-900 mb-1">{pet.name}</h3>
                <p className="text-sm text-gray-500">{pet.breed}</p>
                <p className="text-xs text-gray-400 mt-1">{pet.age} {pet.age === 1 ? 'año' : 'años'}</p>
              </Card>
            ))}
            
            <Card
              onClick={() => onNavigate('pets')}
              className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-dashed border-emerald-200 hover:border-emerald-300 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[200px] active:scale-95"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                <Plus className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-sm text-emerald-700">Agregar mascota</p>
            </Card>
          </div>
        </div>

        {/* Próximas Citas y Vacunas */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg text-gray-900">Próximos Eventos</h2>
            <Button
              onClick={() => onNavigate('reminders')}
              variant="ghost"
              size="sm"
              className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
            >
              Ver todos
            </Button>
          </div>
          
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="p-4 bg-white border-0 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 ${event.urgent ? 'bg-amber-100' : 'bg-blue-100'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Calendar className={`w-6 h-6 ${event.urgent ? 'text-amber-600' : 'text-blue-600'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-gray-900">{event.title}</h3>
                      {event.urgent && (
                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 flex-shrink-0">
                          Urgente
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{event.petName} • {event.type}</p>
                    <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg text-gray-900 mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => onNavigate('health')}
              variant="outline"
              className="h-auto py-6 flex flex-col gap-2 border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 rounded-2xl"
            >
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              <span className="text-sm">Ver Salud</span>
            </Button>
            
            <Button
              onClick={() => onNavigate('nutrition')}
              variant="outline"
              className="h-auto py-6 flex flex-col gap-2 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 rounded-2xl"
            >
              <Heart className="w-6 h-6 text-purple-600" />
              <span className="text-sm">Nutrición</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
