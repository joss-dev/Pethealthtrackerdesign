import { ArrowLeft, Edit2, Trash2, Calendar, Weight, Cake } from 'lucide-react';
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
  weight: string;
  image: string;
}

interface PetProfileProps {
  pet: Pet;
  onBack: () => void;
  onViewRecords: () => void;
}

export function PetProfile({ pet, onBack, onViewRecords }: PetProfileProps) {
  const recentRecords = [
    {
      id: 1,
      type: 'Vacuna',
      title: 'Vacuna antirrábica',
      date: '15 de octubre, 2025',
      status: 'completed'
    },
    {
      id: 2,
      type: 'Chequeo',
      title: 'Chequeo general',
      date: '1 de octubre, 2025',
      status: 'completed'
    },
    {
      id: 3,
      type: 'Desparasitación',
      title: 'Desparasitación trimestral',
      date: '20 de septiembre, 2025',
      status: 'completed'
    }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4">
        <Button
          onClick={onBack}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
      </div>

      {/* Pet Profile Card */}
      <div className="px-4 -mt-6">
        <Card className="bg-white border-0 shadow-xl p-6">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
              <ImageWithFallback
                src={pet.image}
                alt={pet.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl text-gray-900 mb-2">{pet.name}</h1>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-4">
              {pet.species}
            </Badge>
            
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Cake className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-xs text-gray-500">Edad</p>
                <p className="text-gray-900">{pet.age} {pet.age === 1 ? 'año' : 'años'}</p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Weight className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-xs text-gray-500">Peso</p>
                <p className="text-gray-900">{pet.weight}</p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-xs text-gray-500">Raza</p>
                <p className="text-gray-900 text-xs">{pet.breed}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
            >
              <Edit2 className="w-4 h-4 mr-2" />
              Editar
            </Button>
            
            <Button
              variant="outline"
              className="rounded-xl border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Eliminar
            </Button>
          </div>
        </Card>
      </div>

      {/* Recent Records */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-900">Registros Recientes</h2>
          <Button
            onClick={onViewRecords}
            variant="ghost"
            size="sm"
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
          >
            Ver todos
          </Button>
        </div>

        <div className="space-y-3">
          {recentRecords.map((record) => (
            <Card
              key={record.id}
              className="p-4 bg-white border-0 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 mb-1">{record.title}</h3>
                  <p className="text-xs text-gray-500">{record.date}</p>
                </div>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  Completado
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <Button
          onClick={onViewRecords}
          className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl py-6 shadow-lg shadow-emerald-200"
        >
          Ver todos los registros
        </Button>
      </div>
    </div>
  );
}
