import { useEffect, useState } from "react"

import { siteConfig } from "@/config/site"

import { columns } from "./table/columns"
import { DataTable } from "./table/data-table"

export default function SurveyDataList(props: any) {
  const [serveyData, setSurveyData] = useState<any>([])

  useEffect(() => {
    fetch(siteConfig.baseUrl + "getAllocatedSurveysPaged", {
      headers: {
        "x-access-token": props.token,
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setSurveyData(res?.result ?? [])
      })
      .catch((error) => {
        console.error("ERROR: ", error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="flex-col">
        <h3>Survey List</h3>
        <div className="mt-6">
          <DataTable columns={columns} data={serveyData} />
        </div>
      </div>
    </div>
  )
}
