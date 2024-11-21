import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ArtistInfoStep() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="artistName">Artist/Band Name</Label>
        <Input id="artistName" placeholder="Your artist or band name" />
      </div>
      <div>
        <Label htmlFor="genre">Primary Genre</Label>
        <Input id="genre" placeholder="e.g. Rock, Hip-Hop, Pop" />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="City, Country" />
      </div>
    </div>
  )
}