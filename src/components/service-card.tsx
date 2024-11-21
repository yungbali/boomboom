import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  credits: number
  onClick: () => void
}

export function ServiceCard({ title, description, icon, credits, onClick }: ServiceCardProps) {
  return (
    <div className="p-6 border rounded-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="mt-2">{credits} credits</p>
      <Button onClick={onClick} className="mt-4">Get Started</Button>
    </div>
  )
}