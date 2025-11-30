"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, TrendingUp, Award, Clock } from "lucide-react"

export default function PaidPage() {
  useEffect(() => {
    // Load tracking pixel for paid traffic
    const img = new Image()
    img.src = "/api/pixel.gif?src=paid&campaign=google_cpc"

    // Fire campaign-specific analytics event
    fetch("/api/analytics/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "ad_click",
        campaign: "google_cpc",
        ad_group: "digital_marketing_services",
        keyword: "digital marketing expert",
        ts: Date.now(),
      }),
    }).catch(() => {})

    // Additional paid-specific tracking beacon
    fetch("/api/analytics/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "landing_page_view",
        source: "paid",
        ts: Date.now(),
      }),
    }).catch(() => {})
  }, [])

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-background" />
        <div className="container relative mx-auto px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 dark:bg-orange-900/30 px-4 py-2 text-sm font-medium text-orange-700 dark:text-orange-300">
              <Zap className="h-4 w-4" />
              <span>Limited Time Offer - 20% Off First Month</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Double Your Leads in{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                90 Days or Less
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty leading-relaxed sm:text-xl">
              Proven digital marketing strategies used by 500+ small businesses. Get results fast or your money back.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700">
                <Link href="/contact?utm_source=google&utm_medium=cpc&utm_campaign=fyp_demo">
                  Claim Your Discount Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                <Link href="/portfolio?utm_source=google&utm_medium=cpc&utm_campaign=fyp_demo">
                  See Success Stories
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">⏰ Offer expires in 48 hours • No credit card required</p>
          </div>
        </div>
      </section>

      {/* Social proof section */}
      <section className="border-t border-border bg-orange-50 dark:bg-orange-950/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="mb-2 text-4xl font-bold text-orange-600">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-orange-600">2.5x</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-orange-600">90</div>
              <div className="text-sm text-muted-foreground">Days to Results</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-orange-600">4.9★</div>
              <div className="text-sm text-muted-foreground">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What You Get with Our Service</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Everything you need to dominate your market online.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Guaranteed Results",
                description: "See measurable growth in 90 days or get your money back",
              },
              {
                icon: Clock,
                title: "Fast Implementation",
                description: "We start working on your campaigns within 48 hours",
              },
              {
                icon: Award,
                title: "Expert Team",
                description: "Google & Meta certified specialists managing your account",
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="border-orange-200 dark:border-orange-800">
                <CardContent className="p-6">
                  <benefit.icon className="mb-4 h-10 w-10 text-orange-600" />
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="border-t border-border bg-gradient-to-br from-orange-500/10 to-red-500/10 py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <Zap className="mx-auto mb-6 h-16 w-16 text-orange-600" />
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Don't Miss This Limited Time Offer
          </h2>
          <p className="mb-8 text-lg text-muted-foreground text-pretty leading-relaxed">
            Join 500+ businesses growing with our proven marketing system.
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
            <Link href="/contact?utm_source=google&utm_medium=cpc&utm_campaign=fyp_demo&utm_content=bottom_cta">
              Start Growing Today - 20% Off
            </Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            ⭐ Risk-free guarantee • Cancel anytime • No long-term contracts
          </p>
        </div>
      </section>
    </main>
  )
}
