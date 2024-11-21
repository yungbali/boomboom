import {
    Music,
    Instagram,
    Youtube,
    Music2,
    LucideProps
  } from "lucide-react"

// Define the type for our icons
type IconComponent = React.ComponentType<LucideProps>

export const Icons = {
    music: Music,
    instagram: Instagram,
    youtube: Youtube,
    soundcloud: Music2,
} as const

// If you need to export a type for the icons
export type IconType = keyof typeof Icons