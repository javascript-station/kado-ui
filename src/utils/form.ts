import { ChangeEvent } from "react"

export const formatInput = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, regex: RegExp) => {
  const { value } = ev.target

  if (!regex.test(value)) {
    ev.target.value = value.slice(0, -1)
  }

  return ev.target.value
}