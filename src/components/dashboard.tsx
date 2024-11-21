'use client'

import { useState } from "react"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { ServiceCard } from "./service-card"
import { TestimonialCard } from "./testimonial-card"
import { FeedbackDialog } from "./feedback-dialog"
import { 
  MarketingPlans, 
  EPKCreation, 
  AlbumArtwork, 
  AIMarketingAdvisor 
} from "./services"

export function Dashboard() {
  const [screen, setScreen] = useState<'dashboard' | 'service'>('dashboard')
  const [activeService, setActiveService] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [credits, setCredits] = useState(250)

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId)
    setScreen('service')
  }

  const renderServiceInterface = () => {
    switch (activeService) {
      case 'marketing-plans':
        return <MarketingPlans />
      case 'epk-creation':
        return <EPKCreation />
      case 'album-artwork':
        return <AlbumArtwork />
      case 'ai-marketing-advisor':
        return <AIMarketingAdvisor />
      default:
        return null
    }
  }

  if (screen === 'service') {
    return (
      <div className="min-h-screen bg-background">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4"
          onClick={() => setScreen('dashboard')}
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="sr-only">Back to Dashboard</span>
        </Button>
        <div className="container mx-auto py-8 px-4">
          {renderServiceInterface()}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome to Afromuse Digital</h1>
          <p className="text-xl text-muted-foreground">Empowering African creators worldwide</p>
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </header>

      <Tabs defaultValue="services" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 gap-4">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="projects">My Projects</TabsTrigger>
          <TabsTrigger value="credits">Credits</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Marketing Plans"
              description="Craft effective strategies to promote your music"
              icon="PenTool"
              credits={75}
              onClick={() => handleServiceClick('marketing-plans')}
            />
            <ServiceCard
              title="EPK Creation"
              description="Build a professional Electronic Press Kit"
              icon="FileText"
              credits={100}
              onClick={() => handleServiceClick('epk-creation')}
            />
            <ServiceCard
              title="Album Artwork"
              description="Design stunning visuals for your music"
              icon="Image"
              credits={50}
              onClick={() => handleServiceClick('album-artwork')}
            />
            <ServiceCard
              title="AI Marketing Advisor"
              description="Get personalized marketing insights powered by AI"
              icon="MessageSquare"
              credits={60}
              onClick={() => handleServiceClick('ai-marketing-advisor')}
            />
          </div>
        </TabsContent>

        {/* Add other tab contents */}
      </Tabs>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <TestimonialCard
            name="Teepsoul Entertainment"
            quote="Afromuse Digital helped us reach a global audience we never thought possible!"
            image="/placeholder.svg"
            rating={5}
          />
          <TestimonialCard
            name="Aisha M."
            quote="The AI Marketing Advisor gave me insights that boosted my streams by 200%!"
            image="/placeholder.svg"
            rating={5}
          />
        </div>
      </section>

      <Button 
        className="w-full md:w-auto"
        onClick={() => setShowFeedback(true)}
      >
        Share Your Feedback
      </Button>

      <FeedbackDialog 
        open={showFeedback} 
        onOpenChange={setShowFeedback} 
      />
    </div>
  )
}