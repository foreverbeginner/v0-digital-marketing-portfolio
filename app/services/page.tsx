import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MousePointerClick, Share2, Globe, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Rank higher and attract the right audience with our comprehensive SEO strategies. We optimize your website for search engines, conduct keyword research, and build quality backlinks to improve your organic visibility.",
      features: ["Keyword Research", "On-Page Optimization", "Link Building", "Technical SEO"],
    },
    {
      icon: MousePointerClick,
      title: "Google Ads Management",
      description:
        "Maximize ROI with precise targeting and data-driven campaigns. Our Google Ads experts create, manage, and optimize your paid search campaigns to ensure every dollar counts.",
      features: ["Campaign Strategy", "Ad Copywriting", "Bid Management", "Performance Tracking"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Build your brand where your customers spend time. We create engaging content, manage your social presence, and run targeted ad campaigns across all major platforms.",
      features: ["Content Creation", "Community Management", "Paid Social Ads", "Analytics"],
    },
    {
      icon: Globe,
      title: "Website Design",
      description:
        "Clean, mobile-friendly websites that convert visitors into customers. We design and develop modern, responsive websites optimized for user experience and conversions.",
      features: ["Responsive Design", "UX Optimization", "Fast Loading", "Conversion Focus"],
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">Our Services</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed sm:text-xl">
              Comprehensive digital marketing solutions designed to help your business thrive online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="group transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground transition-transform group-hover:scale-110">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group/btn">
                    <Link href="/contact">
                      Request Service
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground text-pretty leading-relaxed">
            Let's find the right fit together. Schedule a free consultation to discuss your goals.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
