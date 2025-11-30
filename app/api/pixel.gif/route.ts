import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const src = searchParams.get("src") || "unknown"
  const campaign = searchParams.get("campaign") || "none"

  console.log("[v0] PIXEL FIRED:", {
    source: src,
    campaign,
    timestamp: Date.now(),
  })

  // 1x1 transparent GIF in base64
  const pixel = Buffer.from(
    "47494638396101000100800000ffffff00000021f90401000001002c00000000010001000002024401003b",
    "hex",
  )

  return new NextResponse(pixel, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  })
}
