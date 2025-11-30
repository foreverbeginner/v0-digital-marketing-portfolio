import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    console.log("[v0] EVENT:", {
      event_type: body.event,
      event_value: body.value,
      page: body.page,
      element: body.element,
      href: body.href,
      campaign: body.campaign,
      ad_group: body.ad_group,
      keyword: body.keyword,
      utm_source: body.utm_source || "none",
      timestamp: body.ts || Date.now(),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] Event error:", error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
