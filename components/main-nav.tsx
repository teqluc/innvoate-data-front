"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const resetLocalStorageToken = () => {
    localStorage.removeItem("accessToken")
    location.reload()
  }

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.database className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <nav className="flex gap-6">
        <button
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground"
          )}
          onClick={resetLocalStorageToken}
        >
          Reset Token
        </button>
      </nav>
    </div>
  )
}
