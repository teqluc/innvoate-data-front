import { create } from "zustand"

export const useSurveyDialog = create((set) => ({
  isModalSurveyOpen: false,
  isModalTargetOpen: false,
  controlModalSurveyVisibleState: (value: boolean) =>
    set((state: any) => ({ isModalSurveyOpen: value })),
  controlModalTargetVisibleState: (value: boolean) =>
    set((state: any) => ({ isModalTargetOpen: value })),
}))
