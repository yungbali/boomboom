import { cn } from "@/lib/utils"

export const GradientCard = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl bg-background p-6",
      "before:absolute before:inset-0",
      "before:bg-gradient-to-r before:from-primary/20 before:to-transparent",
      "before:opacity-0 hover:before:opacity-100",
      "before:transition-opacity before:duration-500",
      className
    )}>
      {children}
    </div>
  )
}

export const SpotlightButton = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-lg px-6 py-3",
        "bg-gradient-to-r from-primary to-accent text-black font-semibold",
        "transition-all duration-300",
        "hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]",
        "active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}