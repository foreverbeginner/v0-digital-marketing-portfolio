import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Log conversion event with all relevant data
    console.log("[v0] CONVERSION EVENT:", {
      name: body.name,
      email: body.email,
      service: body.service,
      utm_source: body.utm_source || "direct",
      utm_campaign: body.utm_campaign || "none",
      utm_medium: body.utm_medium || "none",
      referrer: body.referrer || "direct",
      timestamp: body.timestamp || Date.now(),
      converted: true,
    })

    return NextResponse.json({
      ok: true,
      message: "Conversion recorded successfully",
      conversion_id: `conv_${Date.now()}`,
    })
  } catch (error) {
    console.error("[v0] Conversion error:", error)
    return NextResponse.json({ ok: false, error: "Failed to record conversion" }, { status: 500 })
  }
}
