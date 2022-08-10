import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: "name" | "login" | "email" | "password" | "pswdRepeat" | string;
  id?: string;
  value: string;
  inputStyle: "search" | "formInput";
  error?: boolean;
  errorStyle?: "auth" | string;
}
