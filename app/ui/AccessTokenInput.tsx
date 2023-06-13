"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export default function AccessTokenInput(props: any) {
  const { toast } = useToast()

  const [value, setValue] = useState("")
  const handeChangeValue = (event: any) => {
    setValue(event.target.value)
  }

  const handleSave = () => {
    const tokenCheck = value.split(".")
    if (tokenCheck.length < 3) {
      toast({
        variant: "destructive",
        title: "Wrong Access Token!",
        description: "Not a valid JWT token, check again",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      return
    }
    props.setToken(value)
    localStorage.setItem("accessToken", value)
  }

  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="email"
        placeholder="Access Token, to identify yourself!"
        onChange={handeChangeValue}
      />
      <Button type="button" onClick={handleSave}>
        Procced
      </Button>
    </div>
  )
}
