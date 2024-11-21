import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function CreditsCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6 hover-glow transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gradient">2,500</h3>
          <p className="text-sm text-muted-foreground">Available Credits</p>
        </div>
        <div className="p-3 bg-primary/10 rounded-full">
          <Icons.music className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Monthly Usage</span>
          <span className="font-medium">750/1000</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent"
            style={{ width: '75%' }}
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <Button className="flex-1">Buy Credits</Button>
        <Button className="flex-1" variant="outline">View History</Button>
      </div>
    </div>
  )
}