'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  MessageSquare, 
  Target, 
  BarChart, 
  Users,
  Send,
  Loader2,
  ThumbsUp,
  ThumbsDown,
  Download,
  RefreshCcw
} from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

type Analysis = {
  title: string
  description: string
  icon: JSX.Element
  metrics?: {
    label: string
    value: string
    change?: string
  }[]
}

export function AIMarketingAdvisor() {
  const [activeTab, setActiveTab] = useState<'chat' | 'analysis'>('chat')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI Marketing Advisor. How can I help you promote your music today?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const analyses: Analysis[] = [
    {
      title: "Audience Growth",
      description: "Your follower growth across platforms",
      icon: <Users className="h-6 w-6 text-primary" />,
      metrics: [
        { label: "Instagram", value: "12.5K", change: "+15%" },
        { label: "TikTok", value: "8.2K", change: "+32%" },
        { label: "Twitter", value: "5.4K", change: "+8%" }
      ]
    },
    {
      title: "Content Performance",
      description: "Engagement rates for your content",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      metrics: [
        { label: "Average Likes", value: "856", change: "+12%" },
        { label: "Comments", value: "142", change: "+24%" },
        { label: "Shares", value: "67", change: "+18%" }
      ]
    },
    {
      title: "Campaign Impact",
      description: "Results from your recent campaigns",
      icon: <Target className="h-6 w-6 text-primary" />,
      metrics: [
        { label: "Reach", value: "45.2K", change: "+28%" },
        { label: "Conversions", value: "1.2K", change: "+22%" },
        { label: "ROI", value: "3.5x", change: "+15%" }
      ]
    }
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const response: Message = {
        role: 'assistant',
        content: 'Here\'s a customized marketing strategy based on your input...',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, response])
      setIsTyping(false)
    }, 2000)
  }

  const renderChat = () => (
    <div className="space-y-4">
      <div className="h-[400px] overflow-y-auto space-y-4 p-4 border rounded-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              <p>{message.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-3">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Ask about marketing strategies..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button onClick={handleSendMessage}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  const renderAnalysis = () => (
    <div className="space-y-6">
      {analyses.map((analysis, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center gap-2">
              {analysis.icon}
              <div>
                <CardTitle>{analysis.title}</CardTitle>
                <CardDescription>{analysis.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {analysis.metrics?.map((metric, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <span className={`text-sm ${
                      metric.change?.startsWith('+') 
                        ? 'text-green-500' 
                        : 'text-red-500'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-end gap-2">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
        <Button variant="outline">
          <RefreshCcw className="mr-2 h-4 w-4" />
          Refresh Data
        </Button>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">AI Marketing Advisor</h2>
        <p className="text-muted-foreground">
          Get personalized marketing insights and recommendations
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <CardTitle>Marketing Assistant</CardTitle>
              <CardDescription>Chat with AI for marketing strategies</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant={activeTab === 'chat' ? 'default' : 'outline'}
                onClick={() => setActiveTab('chat')}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat
              </Button>
              <Button
                variant={activeTab === 'analysis' ? 'default' : 'outline'}
                onClick={() => setActiveTab('analysis')}
              >
                <Target className="mr-2 h-4 w-4" />
                Analysis
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {activeTab === 'chat' ? renderChat() : renderAnalysis()}
        </CardContent>
      </Card>
    </div>
  )
}