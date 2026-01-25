import { useStreak } from "@/contexts/StreakContext";
import { Card } from "@/components/ui/card";
import { Flame, Trophy, AlertCircle, Zap } from "lucide-react";

export default function StreakDisplay() {
  const { streak, isActiveToday, daysUntilLoss, getStreakBonus, getStreakMilestones } = useStreak();

  const streakMilestones = getStreakMilestones();
  const nextMilestone = streakMilestones.find((m) => !m.reached);

  return (
    <div className="space-y-4">
      {/* Main Streak Card */}
      <Card className="p-6 border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-5xl">🔥</div>
            <div>
              <h3 className="font-display text-2xl text-gray-900">Seu Streak</h3>
              <p className="text-sm text-gray-600">Dias consecutivos de estudo</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-orange-600">{streak.currentStreak}</div>
            <p className="text-xs text-gray-600">dias</p>
          </div>
        </div>

        {/* Status */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Recorde Pessoal</p>
            <p className="text-2xl font-bold text-blue-600">{streak.longestStreak}</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Dias Ativos</p>
            <p className="text-2xl font-bold text-green-600">{streak.totalDaysActive}</p>
          </div>
        </div>

        {/* Activity Status */}
        {isActiveToday ? (
          <div className="bg-green-100 border border-green-300 rounded-lg p-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-semibold text-green-900">Ótimo trabalho!</p>
              <p className="text-sm text-green-800">Você já estudou hoje. Continue assim!</p>
            </div>
          </div>
        ) : daysUntilLoss === 1 ? (
          <div className="bg-red-100 border border-red-300 rounded-lg p-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <div>
              <p className="font-semibold text-red-900">Atenção!</p>
              <p className="text-sm text-red-800">Estude hoje para manter seu streak!</p>
            </div>
          </div>
        ) : daysUntilLoss === 0 ? (
          <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <div>
              <p className="font-semibold text-orange-900">Streak em risco!</p>
              <p className="text-sm text-orange-800">Estude agora para não perder seu streak!</p>
            </div>
          </div>
        ) : null}
      </Card>

      {/* Bonus Points */}
      <Card className="p-4 border border-yellow-300 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            <div>
              <p className="font-semibold text-gray-900">Bônus Diário</p>
              <p className="text-xs text-gray-600">Pontos por manter o streak</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-yellow-600">+{getStreakBonus()}</p>
            <p className="text-xs text-gray-600">pontos/dia</p>
          </div>
        </div>
      </Card>

      {/* Milestones */}
      <Card className="p-4 border border-purple-300 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex items-center gap-2 mb-3">
          <Trophy className="w-5 h-5 text-purple-600" />
          <h4 className="font-semibold text-gray-900">Marcos de Streak</h4>
        </div>
        <div className="space-y-2">
          {streakMilestones.map((milestone) => (
            <div
              key={milestone.days}
              className={`flex items-center justify-between p-2 rounded-lg transition-all ${
                milestone.reached
                  ? "bg-purple-100 border border-purple-200"
                  : "bg-gray-100 border border-gray-200 opacity-60"
              }`}
            >
              <div className="flex items-center gap-2">
                {milestone.reached ? (
                  <span className="text-lg">✨</span>
                ) : (
                  <span className="text-lg">🔒</span>
                )}
                <span className={`font-semibold ${milestone.reached ? "text-purple-900" : "text-gray-600"}`}>
                  {milestone.days} dias
                </span>
              </div>
              <span className={`font-bold ${milestone.reached ? "text-purple-600" : "text-gray-500"}`}>
                +{milestone.bonus} pts
              </span>
            </div>
          ))}
        </div>
        {nextMilestone && (
          <div className="mt-3 pt-3 border-t border-purple-200">
            <p className="text-xs text-gray-600">
              <span className="font-semibold">{nextMilestone.days - streak.currentStreak}</span> dias até o próximo marco
            </p>
          </div>
        )}
      </Card>

      {/* Stats */}
      <Card className="p-4 border border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50">
        <h4 className="font-semibold text-gray-900 mb-3">Estatísticas</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Taxa de Atividade</span>
            <span className="font-bold text-blue-600">
              {streak.totalDaysActive > 0
                ? Math.round((streak.totalDaysActive / (streak.longestStreak || 1)) * 100)
                : 0}
              %
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Pontos de Streak</span>
            <span className="font-bold text-blue-600">{streak.streakBonusPoints}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Média por Semana</span>
            <span className="font-bold text-blue-600">
              {streak.totalDaysActive > 0 ? Math.round(streak.totalDaysActive / 4) : 0} dias
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
