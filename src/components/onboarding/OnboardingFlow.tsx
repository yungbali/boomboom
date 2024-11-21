import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ArtistInfoStep, GoalsStep, PlatformsStep } from './steps'

type OnboardingStep = {
  title: string
  description: string
  fields: React.ReactNode
}

export function OnboardingFlow() {
  const [step, setStep] = useState(0)
  
  const steps: OnboardingStep[] = [
    {
      title: "Tell us about yourself",
      description: "Help us personalize your experience",
      fields: <ArtistInfoStep />
    },
    {
      title: "What are your goals?",
      description: "Select your primary marketing objectives",
      fields: <GoalsStep />
    },
    {
      title: "Your music platforms",
      description: "Connect your existing music presence",
      fields: <PlatformsStep />
    }
  ]

  const progress = ((step + 1) / steps.length) * 100

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <Progress value={progress} className="w-full" />
      
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{steps[step].title}</h1>
        <p className="text-muted-foreground">{steps[step].description}</p>
        
        {steps[step].fields}

        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Back
          </Button>
          <Button
            onClick={() => {
              if (step === steps.length - 1) {
                // Navigate to dashboard
                window.location.href = '/dashboard'
              } else {
                setStep(s => s + 1)
              }
            }}
          >
            {step === steps.length - 1 ? 'Get Started' : 'Continue'}
          </Button>
        </div>
      </div>
    </div>
  )
}