'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  quote: string
  image: string
  rating: number
}

export function TestimonialCard({ name, quote, image, rating }: TestimonialCardProps) {
  return (
    <div className="p-6 border rounded-lg">
      <p className="text-lg">{quote}</p>
      <div className="mt-4 flex items-center gap-2">
        <img src={image} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{name}</p>
          <div>{'⭐'.repeat(rating)}</div>
        </div>
      </div>
    </div>
  )
}