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

export default function SurveyDialogDetails({ details }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Icons.anchor className="w-9" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <SurveyDetailsDialog details={details} />
      </DialogContent>
    </Dialog>
  )
}

function SurveyDetailsDialog({ details }: any) {
  const [state, setState] = useState<any[]>([])

  useEffect(() => {
    fetch(`${siteConfig.baseUrl}getSurveyTargeting/${details?.surveyId}`, {
      headers: {
        "x-access-token": localStorage.getItem("accessToken") ?? "",
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setState(res?.result)
        console.log("Target Details: ", res)
      })
      .catch((err) => {
        console.error("Target Detail Error: ", err)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCopy = () => {
    const data = { ...details, target: state }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(data))
    }
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Survey Details</DialogTitle>
      </DialogHeader>
      <div className="grid max-h-[550px] gap-4 overflow-auto py-4">
        <div className="flex-col">
          <div>
            {details?.surveyId}-{details?.jobCategory}-{details?.Country}
          </div>
          <div>N: {details?.N}</div>
          <div>LOI: {details?.LOI}</div>
          <br />
          <div className="break-all">
            <div>Live: {details?.entryLink}</div>
            <br />
            <div>Test: {details?.testEntryLink}</div>
          </div>
          <br />
          <h3>Questions</h3>
          <hr className="my-2" />
          <div>
            {state?.map?.((data) => (
              <ul key={data?.QuestionText}>
                {data?.QuestionText}
                <br />
                <pre className="ml-3">
                  {data?.Options?.map((opt: any) => (
                    <li key={opt?.OptionId}>
                      {opt?.ageEnd ?? opt?.OptionText} {opt?.ageStart}
                    </li>
                  ))}
                </pre>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" onClick={handleCopy}>
          Copy
        </Button>
      </DialogFooter>
    </>
  )
}
