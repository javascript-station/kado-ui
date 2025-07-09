import { nanoid } from "nanoid";
import { create } from "zustand";

import { ToastT } from "./types";

type NewToastT = Omit<ToastT, "id">;

type UseToastT = {
  toasts: ToastT[];
  add: (newToast: NewToastT) => void;
  remove: (id: ToastT["id"]) => void;
}

export const useToast = create<UseToastT>((set) => ({
  toasts: [],
  add: (newToast) => set(prev => ({ toasts: [...prev.toasts, { id: nanoid(), ...newToast }] })),
  remove: id => set(prev => ({ toasts: prev.toasts.filter(item => item.id !== id) })),
}));

export const addToast = (newToast: NewToastT) => {
  useToast.getState().add(newToast);
};