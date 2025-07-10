import { ReactNode } from "react";

export type ToastT = {
  id: string;
  data: ReactNode;
  status?: "info" | "success" | "warning" | "error";
  variant?: "toast-fill" | "toast-glass";
  size?: "toast-sm" | "toast-lg";
  action?: ReactNode;
  duration?: number;
};
