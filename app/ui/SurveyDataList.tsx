import { useEffect, useState } from "react"

import { columns } from "./table/columns"
import { DataTable } from "./table/data-table"
import { siteConfig } from "@/config/site"

const getData = () => {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52a",
      amount: 100,
      status: "completed",
      email: "abhijit.nair659@gmail.com",
    },
    {
      id: "728ed52b",
      amount: 100,
      status: "discard",
      email: "abhijit.nair659@gmail.com",
      name: "Alex",
    },
  ]
}

export default function SurveyDataList(props: any) {
  const [serveyData, setSurveyData] = useState<any>([])

  useEffect(() => {
    fetch(
      siteConfig.baseUrl + "getAllocatedSurveysPaged",
      {
        headers: {
          "x-access-token": props.token,
        },
      }
    )
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
  const data = getData()
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
