"use client"

import type React from "react"

import useAnalytics from "@/utils/useAnalytics"

export default function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  useAnalytics()
  return <>{children}</>
}
