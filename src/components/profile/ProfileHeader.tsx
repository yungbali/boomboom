import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function ProfileHeader() {
  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-spotlight animate-pulse opacity-30" />
      </div>
      
      {/* Profile Info */}
      <div className="px-6 pb-6">
        <div className="flex items-end gap-6 -mt-12 relative z-10">
          <Avatar className="w-24 h-24 border-4 border-background shadow-xl">
            <img src="/placeholder-avatar.jpg" alt="Profile" />
          </Avatar>
          
          <div className="flex-1 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-gradient">Artist Name</h1>
              <p className="text-muted-foreground">@artisthandle</p>
            </div>
            
            <Button variant="outline" className="hover-glow">
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mt-6 text-sm">
          <div>
            <span className="text-muted-foreground">Credits</span>
            <p className="text-xl font-bold">2,500</p>
          </div>
          <div>
            <span className="text-muted-foreground">Projects</span>
            <p className="text-xl font-bold">12</p>
          </div>
          <div>
            <span className="text-muted-foreground">Followers</span>
            <p className="text-xl font-bold">1.2K</p>
          </div>
        </div>
      </div>
    </div>
  )
}