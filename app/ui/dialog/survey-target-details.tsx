import { useEffect, useState } from "react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icons } from "@/components/icons"

export default function SurveyDialogTargetDetails({ details }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Icons.plane className="w-9" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <SurveyDetailTarget details={details} />
      </DialogContent>
    </Dialog>
  )
}

function SurveyDetailTarget({ details }: any) {
  const [state, setState] = useState<any[]>([])

  useEffect(() => {
    fetch(`${siteConfig.baseUrl}getQuotaForSurvey/${details?.surveyId}`, {
      headers: {
        "x-access-token": localStorage.getItem("accessToken") ?? "",
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        const newResult = res?.result?.map((data: any) => ({
          targeting: data.targeting,
        }))
        setState(newResult)
        console.log("Target Details: ", res)
      })
      .catch((err) => {
        console.error("Target Detail Error: ", err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <DialogHeader>
        <DialogTitle>Survey Target Details</DialogTitle>
        <pre className="max-h-[550px] overflow-auto break-all">
          {JSON.stringify(state ?? [], null, 2)}
        </pre>
      </DialogHeader>
      <DialogFooter>
        <Button type="submit">Copy</Button>
      </DialogFooter>
    </>
  )
}
