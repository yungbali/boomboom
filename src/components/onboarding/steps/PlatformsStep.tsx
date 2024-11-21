import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export function PlatformsStep() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button variant="outline" className="h-24 flex flex-col gap-2">
        <Icons.music className="h-8 w-8" />
        Connect Spotify
      </Button>
      <Button variant="outline" className="h-24 flex flex-col gap-2">
        <Icons.instagram className="h-8 w-8" />
        Connect Instagram
      </Button>
      <Button variant="outline" className="h-24 flex flex-col gap-2">
        <Icons.youtube className="h-8 w-8" />
        Connect YouTube
      </Button>
      <Button variant="outline" className="h-24 flex flex-col gap-2">
        <Icons.soundcloud className="h-8 w-8" />
        Connect SoundCloud
      </Button>
    </div>
  )
}