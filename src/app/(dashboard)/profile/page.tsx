import { ProfileHeader } from "@/components/profile/ProfileHeader"
import { CreditsCard } from "@/components/credits/CreditsCard"
import { CreditHistory } from "@/components/credits/CreditHistory"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Profile Section */}
      <ProfileHeader />
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-muted/50 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-muted-foreground">
              Independent artist passionate about creating meaningful music...
            </p>
          </div>
          
          <CreditHistory />
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          <CreditsCard />
          
          {/* Additional widgets can go here */}
        </div>
      </div>
    </div>
  )
}