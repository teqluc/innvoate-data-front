import { ColumnDef } from "@tanstack/react-table"

import { siteConfig } from "@/config/site"

import SurveyDialogDetails from "../dialog/survey-detail"
import SurveyDialogTargetDetails from "../dialog/survey-target-details"

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "surveyId",
    header: "Survey ID",
  },
  {
    accessorKey: "N",
    header: "N",
  },
  {
    accessorKey: "remainingN",
    header: "RemainingN",
  },
  {
    accessorKey: "CPI",
    header: "CPI",
  },
  {
    accessorKey: "groupType",
    header: "Grouptype",
  },
  {
    accessorKey: "Country",
    header: "Country",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }: any) => {
      const isCopy = row.original.isQuota ? true : false
      const surveyId = row.original.surveyId
      const details = row.original

      const handleSurveyDetails = () => {
        fetch(`${siteConfig.baseUrl}getQuotaForSurvey/${surveyId}`, {
          headers: {
            "x-access-token": localStorage.getItem("accessToken") ?? "",
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            console.log("Survey Details: ", res)
          })
          .catch((err) => {
            console.error("Survey Detail Error: ", err)
          })
      }
      return (
        <div className="flex gap-2">
          {isCopy ? (
            <div className="cursor-pointer">
              <SurveyDialogTargetDetails details={details} />
            </div>
          ) : null}
          <div className="cursor-pointer">
            <SurveyDialogDetails details={details} />
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "entryLink",
    header: "EntryLink",
  },
  {
    accessorKey: "testEntryLink",
    header: "TestEntryLink",
    cell(props) {
      /* @ts-ignore */
      return <div className="">{props?.getValue()}</div>
    },
  },
]
