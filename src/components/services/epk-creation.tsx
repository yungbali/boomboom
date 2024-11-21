'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Music, 
  Image as ImageIcon, 
  Link as LinkIcon, 
  FileText, 
  Upload,
  Plus
} from 'lucide-react'

export function EPKCreation() {
  const [step, setStep] = useState<'info' | 'media' | 'preview'>('info')
  const [formData, setFormData] = useState({
    artistName: '',
    genre: '',
    bio: '',
    location: '',
    socialLinks: [''],
    pressQuotes: [''],
  })

  const handleSocialLinkAdd = () => {
    setFormData(prev => ({
      ...prev,
      socialLinks: [...prev.socialLinks, '']
    }))
  }

  const handlePressQuoteAdd = () => {
    setFormData(prev => ({
      ...prev,
      pressQuotes: [...prev.pressQuotes, '']
    }))
  }

  const handleSocialLinkChange = (index: number, value: string) => {
    const newLinks = [...formData.socialLinks]
    newLinks[index] = value
    setFormData(prev => ({
      ...prev,
      socialLinks: newLinks
    }))
  }

  const handlePressQuoteChange = (index: number, value: string) => {
    const newQuotes = [...formData.pressQuotes]
    newQuotes[index] = value
    setFormData(prev => ({
      ...prev,
      pressQuotes: newQuotes
    }))
  }

  const renderBasicInfo = () => (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>Let's start with the essentials</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="artistName">Artist/Band Name</Label>
          <Input
            id="artistName"
            value={formData.artistName}
            onChange={(e) => setFormData(prev => ({ ...prev, artistName: e.target.value }))}
            placeholder="Enter your artist or band name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Input
            id="genre"
            value={formData.genre}
            onChange={(e) => setFormData(prev => ({ ...prev, genre: e.target.value }))}
            placeholder="e.g., Afrobeats, Highlife, Amapiano"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Biography</Label>
          <Textarea
            id="bio"
            value={formData.bio}
            onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
            placeholder="Tell your story..."
            className="min-h-[150px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            placeholder="City, Country"
          />
        </div>

        <div className="space-y-4">
          <Label>Social Media Links</Label>
          {formData.socialLinks.map((link, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={link}
                onChange={(e) => handleSocialLinkChange(index, e.target.value)}
                placeholder="https://"
              />
              {index === formData.socialLinks.length - 1 && (
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon"
                  onClick={handleSocialLinkAdd}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button onClick={() => setStep('media')}>
            Continue to Media
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const renderMediaUpload = () => (
    <Card>
      <CardHeader>
        <CardTitle>Media & Press</CardTitle>
        <CardDescription>Add your visual and press materials</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Label>Profile Photos</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground" />
              <div className="mt-2">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Photos
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Music Samples</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Music className="mx-auto h-8 w-8 text-muted-foreground" />
              <div className="mt-2">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Music
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Press Quotes</Label>
          {formData.pressQuotes.map((quote, index) => (
            <div key={index} className="flex gap-2">
              <Textarea
                value={quote}
                onChange={(e) => handlePressQuoteChange(index, e.target.value)}
                placeholder="Add a press quote..."
              />
              {index === formData.pressQuotes.length - 1 && (
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon"
                  onClick={handlePressQuoteAdd}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep('info')}>
            Back
          </Button>
          <Button onClick={() => setStep('preview')}>
            Preview EPK
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const renderPreview = () => (
    <Card>
      <CardHeader>
        <CardTitle>EPK Preview</CardTitle>
        <CardDescription>Review your Electronic Press Kit</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{formData.artistName}</h3>
          <div className="flex gap-2 text-muted-foreground">
            <span>{formData.genre}</span>
            {formData.location && (
              <>
                <span>•</span>
                <span>{formData.location}</span>
              </>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Biography</h4>
          <p>{formData.bio}</p>
        </div>

        {formData.socialLinks.filter(link => link).length > 0 && (
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              {formData.socialLinks.map((link, index) => (
                link && (
                  <a 
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    <LinkIcon className="h-4 w-4" />
                  </a>
                )
              ))}
            </div>
          </div>
        )}

        {formData.pressQuotes.filter(quote => quote).length > 0 && (
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Press Quotes</h4>
            {formData.pressQuotes.map((quote, index) => (
              quote && (
                <blockquote key={index} className="border-l-2 pl-4 italic">
                  {quote}
                </blockquote>
              )
            ))}
          </div>
        )}

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep('media')}>
            Back
          </Button>
          <Button>Generate EPK</Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">EPK Creation</h2>
        <p className="text-muted-foreground">
          Create your professional Electronic Press Kit
        </p>
      </div>

      {step === 'info' && renderBasicInfo()}
      {step === 'media' && renderMediaUpload()}
      {step === 'preview' && renderPreview()}
    </div>
  )
}