import { useState } from 'react'

type Goal = {
  id: string
  label: string
}

export function GoalsStep() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])

  const goals: Goal[] = [
    { id: 'grow-audience', label: 'Grow my audience' },
    { id: 'promote-music', label: 'Promote new releases' },
    { id: 'engage-fans', label: 'Engage with fans' },
    { id: 'monetize', label: 'Monetize my music' }
  ]

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    )
  }

  return (
    <div className="space-y-4">
      {goals.map(goal => (
        <div 
          key={goal.id}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => toggleGoal(goal.id)}
        >
          <div className={`w-5 h-5 border-2 rounded flex items-center justify-center
            ${selectedGoals.includes(goal.id) 
              ? 'border-primary bg-primary' 
              : 'border-gray-400'
            }`}
          >
            {selectedGoals.includes(goal.id) && (
              <span className="text-black text-sm">✓</span>
            )}
          </div>
          <span className="text-sm">{goal.label}</span>
        </div>
      ))}
    </div>
  )
}