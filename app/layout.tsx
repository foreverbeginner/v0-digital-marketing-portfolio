import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import AnalyticsWrapper from "@/components/analytics-wrapper"

export const metadata: Metadata = {
  title: "Digital Marketing Freelancer | Grow Your Business Online",
  description:
    "Helping small businesses grow through smart digital marketing. From SEO to Google Ads — we craft strategies that deliver measurable results.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <AnalyticsWrapper>
            <Navigation />
            {children}
            <Footer />
          </AnalyticsWrapper>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
