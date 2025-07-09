import { nanoid } from "nanoid";
import { create } from "zustand";

import { ToastT } from "./toastTypes";

type NewToastT = Omit<ToastT, "id">;

type UseToastStoreT = {
  toasts: ToastT[];
  add: (newToast: NewToastT) => void;
  remove: (id: ToastT["id"]) => void;
};

export const useToastStore = create<UseToastStoreT>((set) => ({
  toasts: [],
  add: (newToast) => set(prev => ({ toasts: [...prev.toasts, { id: nanoid(), ...newToast }] })),
  remove: id => set(prev => ({ toasts: prev.toasts.filter(item => item.id !== id) })),
}));

export const addToast = (newToast: NewToastT) => {
  useToastStore.getState().add(newToast);
};