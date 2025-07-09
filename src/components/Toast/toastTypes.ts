import { ReactNode } from "react";

export type ToastT = {
  id: string;
  data: ReactNode;
  status?: "info" | "success" | "warning" | "error";
  variant?: "toast-fill" | "toast-glass";
  action?: ReactNode;
  duration?: number;
};
