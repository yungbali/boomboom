'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  ImageIcon, 
  Palette, 
  Wand2,
  RefreshCcw,
  Download,
  CheckCircle,
  Loader2
} from 'lucide-react'

type Style = {
  name: string
  description: string
  preview: string
}

export function AlbumArtwork() {
  const [step, setStep] = useState<'details' | 'style' | 'generate' | 'results'>('details')
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    albumTitle: '',
    artistName: '',
    mood: '',
    description: '',
  })

  const styles: Style[] = [
    {
      name: "Afrofuturism",
      description: "Blend of African aesthetics with futuristic elements",
      preview: "/styles/afrofuturism.jpg"
    },
    {
      name: "Traditional",
      description: "Inspired by traditional African art and patterns",
      preview: "/styles/traditional.jpg"
    },
    {
      name: "Contemporary",
      description: "Modern, minimalist design with bold elements",
      preview: "/styles/contemporary.jpg"
    },
    {
      name: "Abstract",
      description: "Non-representational art with vibrant colors",
      preview: "/styles/abstract.jpg"
    },
    {
      name: "Photography",
      description: "Photo-based design with artistic effects",
      preview: "/styles/photography.jpg"
    },
    {
      name: "Street Art",
      description: "Urban-inspired with graffiti elements",
      preview: "/styles/street.jpg"
    }
  ]

  const renderDetailsForm = () => (
    <Card>
      <CardHeader>
        <CardTitle>Album Details</CardTitle>
        <CardDescription>Tell us about your album</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="albumTitle">Album Title</Label>
          <Input
            id="albumTitle"
            value={formData.albumTitle}
            onChange={(e) => setFormData(prev => ({ ...prev, albumTitle: e.target.value }))}
            placeholder="Enter your album title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="artistName">Artist Name</Label>
          <Input
            id="artistName"
            value={formData.artistName}
            onChange={(e) => setFormData(prev => ({ ...prev, artistName: e.target.value }))}
            placeholder="Your artist/band name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mood">Mood/Vibe</Label>
          <Input
            id="mood"
            value={formData.mood}
            onChange={(e) => setFormData(prev => ({ ...prev, mood: e.target.value }))}
            placeholder="e.g., energetic, soulful, nostalgic"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Visual Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Describe the visual elements you'd like to see..."
            className="min-h-[100px]"
          />
        </div>

        <div className="flex justify-end">
          <Button onClick={() => setStep('style')}>
            Choose Style
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const renderStyleSelection = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Choose Your Style</CardTitle>
          <CardDescription>Select an artistic direction for your album artwork</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {styles.map((style) => (
              <div
                key={style.name}
                className={`cursor-pointer rounded-lg border p-4 transition-all hover:shadow-md ${
                  selectedStyle === style.name ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedStyle(style.name)}
              >
                <div className="aspect-square rounded-md bg-muted mb-4">
                  <img
                    src={style.preview}
                    alt={style.name}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold">{style.name}</h3>
                <p className="text-sm text-muted-foreground">{style.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={() => setStep('details')}>
              Back
            </Button>
            <Button 
              onClick={() => setStep('generate')}
              disabled={!selectedStyle}
            >
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderGeneration = () => (
    <Card>
      <CardHeader>
        <CardTitle>Generate Artwork</CardTitle>
        <CardDescription>Review and confirm your choices</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-2">Album Details</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-muted-foreground">Title</dt>
                <dd>{formData.albumTitle}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Artist</dt>
                <dd>{formData.artistName}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Mood</dt>
                <dd>{formData.mood}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Style</h3>
            <p>{selectedStyle}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {styles.find(s => s.name === selectedStyle)?.description}
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep('style')}>
            Back
          </Button>
          <Button 
            onClick={() => {
              setIsGenerating(true)
              // Simulate generation process
              setTimeout(() => {
                setIsGenerating(false)
                setStep('results')
              }, 3000)
            }}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Artwork
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const renderResults = () => (
    <Card>
      <CardHeader>
        <CardTitle>Your Album Artwork</CardTitle>
        <CardDescription>Choose your preferred version</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <div className="aspect-square rounded-lg bg-muted"></div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCcw className="h-4 w-4 mr-2" />
                  Regenerate
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep('generate')}>
            Back
          </Button>
          <Button>
            <CheckCircle className="mr-2 h-4 w-4" />
            Finish
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Album Artwork</h2>
        <p className="text-muted-foreground">
          Create unique album artwork with AI
        </p>
      </div>

      {step === 'details' && renderDetailsForm()}
      {step === 'style' && renderStyleSelection()}
      {step === 'generate' && renderGeneration()}
      {step === 'results' && renderResults()}
    </div>
  )
}