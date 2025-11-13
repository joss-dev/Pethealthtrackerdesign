import { ArrowLeft, Plus, Syringe, Stethoscope, Pill, FileText, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface HealthRecordsViewProps {
  onBack: () => void;
}

export function HealthRecordsView({ onBack }: HealthRecordsViewProps) {
  const healthRecords = {
    vaccines: [
      {
        id: 1,
        name: 'Vacuna antirrábica',
        pet: 'Luna',
        date: '15 de octubre, 2025',
        nextDue: '15 de octubre, 2026',
        veterinarian: 'Dr. García'
      },
      {
        id: 2,
        name: 'Vacuna polivalente',
        pet: 'Milo',
        date: '5 de septiembre, 2025',
        nextDue: '5 de septiembre, 2026',
        veterinarian: 'Dra. Martínez'
      }
    ],
    checkups: [
      {
        id: 1,
        name: 'Chequeo general anual',
        pet: 'Luna',
        date: '1 de octubre, 2025',
        notes: 'Estado de salud excelente. Peso ideal.',
        veterinarian: 'Dr. García'
      },
      {
        id: 2,
        name: 'Control dental',
        pet: 'Milo',
        date: '20 de septiembre, 2025',
        notes: 'Limpieza dental realizada. Sin problemas.',
        veterinarian: 'Dra. López'
      }
    ],
    treatments: [
      {
        id: 1,
        name: 'Desparasitación trimestral',
        pet: 'Luna',
        date: '20 de septiembre, 2025',
        nextDue: '20 de diciembre, 2025',
        medication: 'Drontal Plus'
      },
      {
        id: 2,
        name: 'Tratamiento antipulgas',
        pet: 'Milo',
        date: '1 de octubre, 2025',
        nextDue: '1 de noviembre, 2025',
        medication: 'Frontline'
      }
    ]
  };

  return (
    <div className="pb-20 lg:pb-0 pt-14 lg:pt-0">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 sm:p-6 lg:p-8 rounded-b-3xl lg:rounded-3xl shadow-lg lg:mb-6">
        <Button
          onClick={onBack}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 mb-4 lg:hidden"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2">Registros de Salud</h1>
            <p className="text-blue-100 text-sm sm:text-base">Historial médico completo</p>
          </div>
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Stethoscope className="w-6 h-6 lg:w-8 lg:h-8" />
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-0 pt-6 lg:pt-0">
        <Tabs defaultValue="vaccines" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="vaccines">Vacunas</TabsTrigger>
            <TabsTrigger value="checkups">Chequeos</TabsTrigger>
            <TabsTrigger value="treatments">Tratamientos</TabsTrigger>
          </TabsList>

          {/* Vaccines Tab */}
          <TabsContent value="vaccines" className="space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl py-6 shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Agregar vacuna
            </Button>

            <div className="space-y-3">
              {healthRecords.vaccines.map((vaccine) => (
                <Card
                  key={vaccine.id}
                  className="p-4 bg-white border-0 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Syringe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 mb-1">{vaccine.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{vaccine.pet}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>Aplicada: {vaccine.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>Próxima: {vaccine.nextDue}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        {vaccine.veterinarian}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Checkups Tab */}
          <TabsContent value="checkups" className="space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl py-6 shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Agregar chequeo
            </Button>

            <div className="space-y-3">
              {healthRecords.checkups.map((checkup) => (
                <Card
                  key={checkup.id}
                  className="p-4 bg-white border-0 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 mb-1">{checkup.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{checkup.pet}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{checkup.date}</span>
                      </div>
                      <div className="bg-purple-50 border border-purple-100 rounded-lg p-2 mb-2">
                        <p className="text-xs text-gray-700">{checkup.notes}</p>
                      </div>
                      <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                        {checkup.veterinarian}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Treatments Tab */}
          <TabsContent value="treatments" className="space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl py-6 shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Agregar tratamiento
            </Button>

            <div className="space-y-3">
              {healthRecords.treatments.map((treatment) => (
                <Card
                  key={treatment.id}
                  className="p-4 bg-white border-0 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Pill className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 mb-1">{treatment.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{treatment.pet}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>Aplicado: {treatment.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>Próximo: {treatment.nextDue}</span>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                        {treatment.medication}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
