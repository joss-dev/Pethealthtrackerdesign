import { ArrowLeft, Plus, Clock, Apple, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface NutritionViewProps {
  onBack: () => void;
}

export function NutritionView({ onBack }: NutritionViewProps) {
  const nutritionData = {
    luna: {
      dailyCalories: 1200,
      caloriesConsumed: 850,
      meals: [
        { time: '08:00', name: 'Desayuno', amount: '200g', completed: true },
        { time: '13:00', name: 'Almuerzo', amount: '250g', completed: true },
        { time: '19:00', name: 'Cena', amount: '250g', completed: false }
      ]
    },
    milo: {
      dailyCalories: 300,
      caloriesConsumed: 200,
      meals: [
        { time: '09:00', name: 'Desayuno', amount: '80g', completed: true },
        { time: '20:00', name: 'Cena', amount: '80g', completed: false }
      ]
    }
  };

  const weeklyStats = [
    { day: 'Lun', percentage: 95 },
    { day: 'Mar', percentage: 100 },
    { day: 'Mié', percentage: 85 },
    { day: 'Jue', percentage: 100 },
    { day: 'Vie', percentage: 90 },
    { day: 'Sáb', percentage: 100 },
    { day: 'Dom', percentage: 70 }
  ];

  return (
    <div className="pb-20 lg:pb-0 pt-14 lg:pt-0">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-4 sm:p-6 lg:p-8 rounded-b-3xl lg:rounded-3xl shadow-lg lg:mb-6">
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
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2">Nutrición</h1>
            <p className="text-purple-100 text-sm sm:text-base">Plan de alimentación</p>
          </div>
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Apple className="w-6 h-6 lg:w-8 lg:h-8" />
          </div>
        </div>
      </div>

      {/* Desktop: 2 column layout */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="px-4 lg:px-0 pt-6 lg:pt-0">
            {/* Weekly Stats */}
            <Card className="p-5 lg:p-6 bg-white border-0 shadow-md hover:shadow-lg transition-all mb-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
                <h2 className="text-lg lg:text-xl text-gray-900">Estadísticas Semanales</h2>
              </div>
              <div className="flex items-end justify-between gap-2 h-32 lg:h-40">
                {weeklyStats.map((stat, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-gray-100 rounded-full overflow-hidden flex flex-col justify-end h-full">
                      <div
                        className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full transition-all"
                        style={{ height: `${stat.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs lg:text-sm text-gray-600">{stat.day}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Luna's Nutrition */}
            <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg text-gray-900">Luna - Golden Retriever</h2>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              Activo
            </Badge>
          </div>

          <Card className="p-4 bg-white border-0 shadow-md mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Calorías diarias</span>
              <span className="text-gray-900">
                {nutritionData.luna.caloriesConsumed} / {nutritionData.luna.dailyCalories} kcal
              </span>
            </div>
            <Progress 
              value={(nutritionData.luna.caloriesConsumed / nutritionData.luna.dailyCalories) * 100} 
              className="h-2 bg-gray-100"
            />
          </Card>

          <div className="space-y-3 mb-4">
            {nutritionData.luna.meals.map((meal, index) => (
              <Card
                key={index}
                className={`p-4 border-0 shadow-md transition-all ${
                  meal.completed ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    meal.completed ? 'bg-green-100' : 'bg-purple-100'
                  }`}>
                    <Clock className={`w-6 h-6 ${meal.completed ? 'text-green-600' : 'text-purple-600'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-gray-900">{meal.name}</h3>
                      {meal.completed && (
                        <Badge className="bg-green-600 text-white hover:bg-green-600">
                          Completado
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{meal.time} • {meal.amount}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="px-4 lg:px-0 pt-6 lg:pt-0 space-y-6">
          {/* Milo's Nutrition */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg lg:text-xl text-gray-900">Milo - Gato Siamés</h2>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                Activo
              </Badge>
            </div>

            <Card className="p-4 lg:p-5 bg-white border-0 shadow-md hover:shadow-lg transition-all mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm lg:text-base text-gray-600">Calorías diarias</span>
                <span className="text-gray-900">
                  {nutritionData.milo.caloriesConsumed} / {nutritionData.milo.dailyCalories} kcal
                </span>
              </div>
              <Progress 
                value={(nutritionData.milo.caloriesConsumed / nutritionData.milo.dailyCalories) * 100} 
                className="h-2 bg-gray-100"
              />
            </Card>

            <div className="space-y-3 mb-4">
              {nutritionData.milo.meals.map((meal, index) => (
                <Card
                  key={index}
                  className={`p-4 lg:p-5 border-0 shadow-md hover:shadow-lg transition-all ${
                    meal.completed ? 'bg-green-50' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      meal.completed ? 'bg-green-100' : 'bg-purple-100'
                    }`}>
                      <Clock className={`w-6 h-6 lg:w-7 lg:h-7 ${meal.completed ? 'text-green-600' : 'text-purple-600'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-gray-900 lg:text-lg">{meal.name}</h3>
                        {meal.completed && (
                          <Badge className="bg-green-600 text-white hover:bg-green-600">
                            Completado
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm lg:text-base text-gray-600">{meal.time} • {meal.amount}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Add Meal Button */}
          <Button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl py-6 shadow-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Agregar recordatorio de comida
          </Button>
        </div>
      </div>
    </div>
  );
}
