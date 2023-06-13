"use client"

import { useEffect, useState } from "react"

import { Toaster } from "@/components/ui/toaster"

import AccessTokenInput from "./AccessTokenInput"
import SurveyDataList from "./SurveyDataList"

export default function SurveyMasterPage() {
  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") ?? "")
  }, [])

  return (
    <div className="md:container">
      {!token ? (
        <AccessTokenInput setToken={setToken} />
      ) : (
        <SurveyDataList token={token} />
      )}
      <Toaster />
    </div>
  )
}
