import { ArrowLeft, Plus, Search } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
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

interface PetsListViewProps {
  pets: Pet[];
  onSelectPet: (petId: string) => void;
  onBack: () => void;
}

export function PetsListView({ pets, onSelectPet, onBack }: PetsListViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pet.breed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-20 lg:pb-0 pt-14 lg:pt-0">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-4 sm:p-6 lg:p-8 rounded-b-3xl lg:rounded-3xl shadow-lg lg:mb-6">
        <Button
          onClick={onBack}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 mb-4 lg:hidden"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Mis Mascotas</h1>
        
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar mascota..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/20 backdrop-blur border-0 text-white placeholder:text-emerald-100 rounded-xl"
          />
        </div>
      </div>

      <div className="px-4 lg:px-0 pt-6 lg:pt-0">
        {/* Add Pet Button */}
        <Card
          className="p-4 lg:p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-dashed border-emerald-200 hover:border-emerald-300 transition-all cursor-pointer hover:scale-102 mb-4 lg:mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Plus className="w-7 h-7 lg:w-8 lg:h-8 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 lg:text-lg mb-1">Agregar nueva mascota</h3>
              <p className="text-sm lg:text-base text-gray-600">Registra una nueva mascota en tu perfil</p>
            </div>
          </div>
        </Card>

        {/* Pets Grid - Desktop, List - Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
          {filteredPets.map((pet) => (
            <Card
              key={pet.id}
              onClick={() => onSelectPet(pet.id)}
              className="p-4 lg:p-5 bg-white border-0 shadow-md hover:shadow-xl transition-all cursor-pointer hover:scale-105"
            >
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                <div className="w-16 h-16 lg:w-full lg:aspect-square rounded-2xl overflow-hidden flex-shrink-0 lg:mb-3">
                  <ImageWithFallback
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 lg:w-full min-w-0">
                  <h3 className="text-gray-900 lg:text-lg mb-1">{pet.name}</h3>
                  <p className="text-sm lg:text-base text-gray-600">{pet.breed}</p>
                  <div className="flex items-center gap-2 lg:gap-3 mt-2 text-xs lg:text-sm text-gray-500 flex-wrap">
                    <span>{pet.species}</span>
                    <span>•</span>
                    <span>{pet.age} {pet.age === 1 ? 'año' : 'años'}</span>
                    <span>•</span>
                    <span>{pet.weight}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500">No se encontraron mascotas</p>
            <p className="text-sm text-gray-400 mt-1">Intenta con otro término de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
}
