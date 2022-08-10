import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DateTagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  date: string;
  dateStyle: "violet" | "ghost" | "withoutYear";
}
