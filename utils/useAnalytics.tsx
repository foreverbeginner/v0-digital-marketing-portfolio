"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function useAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get UTM parameters if present (for paid traffic)
    const utmSource = searchParams.get("utm_source")
    const utmCampaign = searchParams.get("utm_campaign")
    const utmMedium = searchParams.get("utm_medium")

    // 1. Pageview with UTM data
    fetch("/api/analytics/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: pathname,
        utm_source: utmSource,
        utm_campaign: utmCampaign,
        utm_medium: utmMedium,
        referrer: document.referrer || "direct",
        ts: Date.now(),
      }),
    }).catch(() => {})

    // 2. Scroll depth tracking
    let lastScrollPercent = 0
    const onScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)

      // Only send if scrolled past 25%, 50%, 75%, 100% thresholds
      if (
        (scrollPercent >= 25 && lastScrollPercent < 25) ||
        (scrollPercent >= 50 && lastScrollPercent < 50) ||
        (scrollPercent >= 75 && lastScrollPercent < 75) ||
        (scrollPercent >= 100 && lastScrollPercent < 100)
      ) {
        fetch("/api/analytics/event", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "scroll",
            value: scrollPercent,
            page: pathname,
            utm_source: utmSource,
            ts: Date.now(),
          }),
        }).catch(() => {})

        lastScrollPercent = scrollPercent
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    // 3. Time on page ping every 3 seconds
    const interval = setInterval(() => {
      fetch("/api/analytics/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "time_ping",
          page: pathname,
          utm_source: utmSource,
          ts: Date.now(),
        }),
      }).catch(() => {})
    }, 3000)

    // 4. Click tracking on CTAs and links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a, button")

      if (link) {
        fetch("/api/analytics/event", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "click",
            element: link.textContent?.slice(0, 50),
            href: (link as HTMLAnchorElement).href || "",
            page: pathname,
            utm_source: utmSource,
            ts: Date.now(),
          }),
        }).catch(() => {})
      }
    }
    document.addEventListener("click", handleClick)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", onScroll)
      clearInterval(interval)
      document.removeEventListener("click", handleClick)
    }
  }, [pathname, searchParams])
}
