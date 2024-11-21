import { SpotlightButton } from "@/components/ui/styled-elements"
import { motion } from "framer-motion"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-spotlight animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="max-w-md mx-auto space-y-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <img
              src="/logo.svg"
              alt="Musette"
              className="w-24 h-24 mx-auto animate-float"
            />
            <h1 className="mt-6 text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Musette
            </h1>
            <p className="mt-2 text-gray-400">
              Your music is your voice.
              <br />
              Let's amplify it to the world!
            </p>
          </motion.div>

          <div className="space-y-4">
            <SpotlightButton className="w-full">
              Login
            </SpotlightButton>
            <SpotlightButton 
              className="w-full bg-background hover:bg-gray-900 text-primary border border-primary"
            >
              Sign Up
            </SpotlightButton>
          </div>
        </div>
      </motion.div>
    </div>
  )
}