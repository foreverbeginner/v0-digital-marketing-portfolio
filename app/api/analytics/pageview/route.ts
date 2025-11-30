import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    console.log("[v0] PAGEVIEW:", {
      page: body.page || "/",
      utm_source: body.utm_source || "none",
      utm_campaign: body.utm_campaign || "none",
      utm_medium: body.utm_medium || "none",
      referrer: body.referrer || "direct",
      timestamp: body.ts || Date.now(),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] Pageview error:", error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
