'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronRight, FileText, Target, Users } from 'lucide-react'

export function MarketingPlans() {
  const [step, setStep] = useState<'select' | 'customize' | 'generate'>('select')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      title: "Social Media Growth",
      description: "Perfect for artists looking to build their online presence",
      icon: <Users className="h-6 w-6 text-primary" />,
      features: ["Platform-specific strategy", "Content calendar", "Engagement tactics"]
    },
    {
      title: "Release Campaign",
      description: "Comprehensive plan for your next music release",
      icon: <Target className="h-6 w-6 text-primary" />,
      features: ["Pre-release buildup", "Launch strategy", "Post-release engagement"]
    },
    {
      title: "Brand Development",
      description: "Establish and grow your artist brand",
      icon: <FileText className="h-6 w-6 text-primary" />,
      features: ["Brand identity", "Visual guidelines", "Messaging strategy"]
    }
  ]

  const renderPlanSelection = () => (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <Card 
          key={plan.title}
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedPlan === plan.title ? 'ring-2 ring-primary' : ''
          }`}
          onClick={() => setSelectedPlan(plan.title)}
        >
          <CardHeader>
            <div className="flex items-center gap-2">
              {plan.icon}
              <CardTitle className="text-xl">{plan.title}</CardTitle>
            </div>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderCustomization = () => (
    <Card>
      <CardHeader>
        <CardTitle>Customize Your Plan</CardTitle>
        <CardDescription>Tailor the plan to your specific needs</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add customization options here */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep('select')}>
            Back
          </Button>
          <Button onClick={() => setStep('generate')}>
            Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const renderGeneration = () => (
    <Card>
      <CardHeader>
        <CardTitle>Your Marketing Plan</CardTitle>
        <CardDescription>Generated based on your preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add generated plan content here */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep('customize')}>
            Back
          </Button>
          <Button>
            Download Plan
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Marketing Plans</h2>
        <p className="text-muted-foreground">
          Choose a marketing plan template to get started
        </p>
      </div>

      {step === 'select' && (
        <div className="space-y-6">
          {renderPlanSelection()}
          <div className="flex justify-end">
            <Button 
              onClick={() => setStep('customize')}
              disabled={!selectedPlan}
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {step === 'customize' && renderCustomization()}
      {step === 'generate' && renderGeneration()}
    </div>
  )
}