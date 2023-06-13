import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyToClipboard(data: any) {
  let selBox = document.createElement("textarea")
  selBox.style.position = "fixed"
  selBox.style.left = "0"
  selBox.style.top = "0"
  selBox.style.opacity = "0"
  selBox.value = JSON.stringify(data)
  document.body.appendChild(selBox)
  selBox.focus()
  selBox.select()
  document.execCommand("copy")
  document.body.removeChild(selBox)
}
