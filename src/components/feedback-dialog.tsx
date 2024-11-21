import { useState } from 'react'
import { Dialog } from '@/components/ui/dialog'

interface FeedbackDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
  }
  
  export function FeedbackDialog({ open, onOpenChange }: FeedbackDialogProps) {
    const [feedback, setFeedback] = useState("")
    
    const handleSubmit = () => {
      // Handle feedback submission
      console.log("Feedback submitted:", feedback)
      setFeedback("")
      onOpenChange(false)
    }
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        // ... existing Dialog content ...
      </Dialog>
    )
  }