"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, TrendingUp, CheckCircle2 } from "lucide-react"

export default function OrganicPage() {
  const [searchResults, setSearchResults] = useState<string[]>([])

  useEffect(() => {
    // Organic-specific search action - simulates user coming from Google search
    fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: "digital marketing tips",
        keywords: ["SEO", "content marketing", "social media strategy"],
      }),
    })
      .then((res) => res.json())
      .then((data) => setSearchResults(data.results || []))
      .catch(() => {})
  }, [])

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-background" />
        <div className="container relative mx-auto px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-300">
              <Search className="h-4 w-4" />
              <span>You found us on Google!</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Expert Digital Marketing Services That{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Rank & Convert
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty leading-relaxed sm:text-xl">
              You searched for the best digital marketing help — and you found it. Let's grow your business together.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact?utm_source=organic&utm_medium=search">Get a Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-focused content section */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Businesses Choose Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Proven strategies that help you rank higher and convert more customers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "SEO That Works", description: "First page rankings in 90 days or less" },
              { title: "Content Strategy", description: "Engaging content that converts visitors" },
              { title: "Data-Driven", description: "Track every lead and measure ROI" },
            ].map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6">
                  <CheckCircle2 className="mb-4 h-10 w-10 text-green-600" />
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {searchResults.length > 0 && (
            <div className="mt-12 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950/20">
              <h3 className="mb-3 text-lg font-semibold text-green-900 dark:text-green-100">
                Related Topics You Might Like:
              </h3>
              <ul className="space-y-2">
                {searchResults.map((result, i) => (
                  <li key={i} className="text-sm text-green-700 dark:text-green-300">
                    • {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <TrendingUp className="mx-auto mb-6 h-16 w-16 text-green-600" />
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Ready to Dominate Search Results?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground text-pretty leading-relaxed">
            Get a customized strategy for your business.
          </p>
          <Button asChild size="lg">
            <Link href="/contact?utm_source=organic&utm_medium=search">Schedule Your Free Audit</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
