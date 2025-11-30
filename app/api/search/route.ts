import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    console.log("[v0] ORGANIC SEARCH:", {
      query: body.query,
      keywords: body.keywords,
      timestamp: Date.now(),
    })

    // Return relevant search results
    const results = [
      "Complete Guide to Digital Marketing in 2024",
      "SEO Best Practices for Small Businesses",
      "How to Measure Marketing ROI",
      "Social Media Strategy Templates",
      "Google Ads Optimization Checklist",
    ]

    return NextResponse.json({
      ok: true,
      results,
      query: body.query,
      count: results.length,
    })
  } catch (error) {
    console.error("[v0] Search error:", error)
    return NextResponse.json({ ok: false, error: "Search failed" }, { status: 500 })
  }
}
