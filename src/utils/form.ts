import { ChangeEvent } from "react"

export const formatInput = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, regex: RegExp) => {
  const { value } = ev.target;

  const filteredValue = Array.from(value).filter(char => regex.test(char)).join("");

  if (filteredValue !== value) {
    ev.target.value = filteredValue;
  }

  return ev.target.value;
}