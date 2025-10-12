"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Coffee House Website",
      tagline: "Improved conversions by 30%",
      category: "Web Design",
      image: "/modern-coffee-shop-website.png",
      description:
        "Complete website redesign for a local coffee shop, focusing on mobile-first design and online ordering integration. The new site features a clean, modern aesthetic with easy navigation and prominent call-to-action buttons.",
      results: ["30% increase in online orders", "45% improvement in mobile traffic", "2x faster page load times"],
    },
    {
      id: 2,
      title: "Fitness Studio Campaign",
      tagline: "Generated 200+ new leads",
      category: "Google Ads",
      image: "/fitness-studio-google-ads-campaign.jpg",
      description:
        "Comprehensive Google Ads campaign for a boutique fitness studio. We targeted local fitness enthusiasts with compelling ad copy and optimized landing pages, resulting in a significant increase in class bookings.",
      results: ["200+ qualified leads", "25% lower cost per acquisition", "4.5x return on ad spend"],
    },
    {
      id: 3,
      title: "Boutique Retail SEO",
      tagline: "Ranked #1 for key terms",
      category: "SEO",
      image: "/boutique-retail-store-website.jpg",
      description:
        "SEO optimization for a local boutique retail store. Through strategic keyword targeting, content optimization, and local SEO tactics, we helped them dominate local search results.",
      results: ["#1 ranking for 12 keywords", "150% increase in organic traffic", "80% more in-store visits"],
    },
    {
      id: 4,
      title: "Restaurant Social Media",
      tagline: "Grew following by 500%",
      category: "Social Media",
      image: "/restaurant-social-media-content.jpg",
      description:
        "Social media management and content creation for a family-owned restaurant. We developed a consistent posting schedule, created engaging visual content, and ran targeted ad campaigns.",
      results: ["500% follower growth", "10x engagement rate", "40% increase in reservations"],
    },
    {
      id: 5,
      title: "Home Services Landing Page",
      tagline: "Conversion rate up 60%",
      category: "Web Design",
      image: "/home-services-landing-page-design.jpg",
      description:
        "High-converting landing page for a home services company. Focused on clear value propositions, trust signals, and streamlined contact forms to maximize lead generation.",
      results: ["60% higher conversion rate", "3x more quote requests", "50% reduction in bounce rate"],
    },
    {
      id: 6,
      title: "E-commerce PPC Campaign",
      tagline: "ROAS of 6.2x achieved",
      category: "Google Ads",
      image: "/ecommerce-shopping-ads-campaign.jpg",
      description:
        "Multi-channel PPC campaign for an e-commerce store. We optimized product feeds, created compelling shopping ads, and implemented smart bidding strategies to maximize return on ad spend.",
      results: ["6.2x return on ad spend", "250% increase in sales", "35% lower CPA"],
    },
  ]

  const selectedProjectData = selectedProject !== null ? projects.find((p) => p.id === selectedProject) : null

  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">Our Work</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed sm:text-xl">
              Real results from real businesses. See how we've helped companies like yours grow online.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.tagline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              We've helped brands across food, fitness, and retail connect with their audiences through smart campaigns.
            </h2>
            <p className="mb-8 text-lg text-muted-foreground text-pretty leading-relaxed">
              Ready to see similar results for your business?
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProjectData?.title}</DialogTitle>
          </DialogHeader>
          {selectedProjectData && (
            <div className="space-y-6">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={selectedProjectData.image || "/placeholder.svg"}
                  alt={selectedProjectData.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {selectedProjectData.category}
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed">{selectedProjectData.description}</p>
                <div>
                  <h4 className="mb-3 font-semibold">Key Results:</h4>
                  <ul className="space-y-2">
                    {selectedProjectData.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
