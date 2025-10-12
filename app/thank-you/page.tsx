"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function ThankYouPage() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-2xl">
          <CardContent className="p-12 text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
              <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">Thank You!</h1>
            <p className="mb-2 text-lg text-muted-foreground">Your message has been received.</p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              We'll contact you soon to discuss how we can help grow your business.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/">Back to Home</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Simple confetti effect */}
      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: ["#3b82f6", "#06b6d4", "#8b5cf6", "#ec4899"][Math.floor(Math.random() * 4)],
                }}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
