import { ArrowLeft, Plus, Calendar, Bell, Clock, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface RemindersViewProps {
  onBack: () => void;
}

export function RemindersView({ onBack }: RemindersViewProps) {
  const reminders = {
    upcoming: [
      {
        id: 1,
        title: 'Vacuna antirrábica',
        pet: 'Luna',
        date: '15 de noviembre, 2025',
        time: '10:00',
        type: 'vaccine',
        urgent: true
      },
      {
        id: 2,
        title: 'Chequeo anual',
        pet: 'Milo',
        date: '20 de noviembre, 2025',
        time: '16:00',
        type: 'checkup',
        urgent: false
      },
      {
        id: 3,
        title: 'Desparasitación',
        pet: 'Luna',
        date: '25 de noviembre, 2025',
        time: '09:00',
        type: 'treatment',
        urgent: false
      },
      {
        id: 4,
        title: 'Aplicar antipulgas',
        pet: 'Milo',
        date: '1 de diciembre, 2025',
        time: '19:00',
        type: 'treatment',
        urgent: false
      }
    ],
    completed: [
      {
        id: 5,
        title: 'Vacuna polivalente',
        pet: 'Luna',
        date: '15 de octubre, 2025',
        type: 'vaccine'
      },
      {
        id: 6,
        title: 'Control dental',
        pet: 'Milo',
        date: '20 de septiembre, 2025',
        type: 'checkup'
      }
    ]
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'vaccine':
        return { icon: Bell, color: 'blue' };
      case 'checkup':
        return { icon: Calendar, color: 'purple' };
      case 'treatment':
        return { icon: Clock, color: 'emerald' };
      default:
        return { icon: Bell, color: 'gray' };
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'vaccine':
        return 'Vacuna';
      case 'checkup':
        return 'Chequeo';
      case 'treatment':
        return 'Tratamiento';
      default:
        return 'Otro';
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 rounded-b-3xl shadow-lg">
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
            <h1 className="text-2xl mb-2">Recordatorios</h1>
            <p className="text-amber-100">Próximas citas y eventos</p>
          </div>
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Bell className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="px-4 pt-6">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="upcoming">
              Próximos ({reminders.upcoming.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completados ({reminders.completed.length})
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Reminders */}
          <TabsContent value="upcoming" className="space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl py-6 shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Agregar recordatorio
            </Button>

            <div className="space-y-3">
              {reminders.upcoming.map((reminder) => {
                const { icon: Icon, color } = getTypeIcon(reminder.type);
                return (
                  <Card
                    key={reminder.id}
                    className={`p-4 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98 ${
                      reminder.urgent ? 'bg-amber-50 border-l-4 border-amber-500' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 text-${color}-600`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-gray-900">{reminder.title}</h3>
                          {reminder.urgent && (
                            <Badge className="bg-amber-500 text-white hover:bg-amber-500">
                              Urgente
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{reminder.pet}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <Calendar className="w-3 h-3" />
                          <span>{reminder.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{reminder.time}</span>
                        </div>
                        <Badge className={`mt-2 bg-${color}-100 text-${color}-700 hover:bg-${color}-100`}>
                          {getTypeLabel(reminder.type)}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Completed Reminders */}
          <TabsContent value="completed" className="space-y-3">
            {reminders.completed.map((reminder) => {
              const { icon: Icon, color } = getTypeIcon(reminder.type);
              return (
                <Card
                  key={reminder.id}
                  className="p-4 bg-gray-50 border-0 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-gray-900">{reminder.title}</h3>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          Completado
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{reminder.pet}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{reminder.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>

        {/* Calendar View Card */}
        <Card className="mt-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-md">
          <div className="text-center">
            <Calendar className="w-12 h-12 text-amber-600 mx-auto mb-3" />
            <h3 className="text-gray-900 mb-2">Vista de Calendario</h3>
            <p className="text-sm text-gray-600 mb-4">
              Visualiza todos tus recordatorios en un calendario mensual
            </p>
            <Button
              variant="outline"
              className="border-2 border-amber-200 hover:border-amber-300 hover:bg-amber-100 rounded-xl"
            >
              Abrir calendario
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
