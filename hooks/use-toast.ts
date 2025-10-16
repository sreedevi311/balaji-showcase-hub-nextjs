import { useState } from "react"

type ToastItem = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
}

let globalToasts: ToastItem[] = []

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>(globalToasts)

  function toast(item: Omit<ToastItem, "id">) {
    const id = Math.random().toString(36).slice(2, 9)
    const newToast = { id, ...item }
    globalToasts = [...globalToasts, newToast]
    setToasts(globalToasts)
    // Auto-remove after 5s
    setTimeout(() => {
      globalToasts = globalToasts.filter((t) => t.id !== id)
      setToasts(globalToasts)
    }, 5000)
    return id
  }

  return { toasts, toast }
}

// top-level helper for imperative usage
export function toast(item: Omit<ToastItem, "id">) {
  const id = Math.random().toString(36).slice(2, 9)
  const newToast = { id, ...item }
  globalToasts = [...globalToasts, newToast]
  // Note: Consumers using the hook will pick this up when they call setToasts
  setTimeout(() => {
    globalToasts = globalToasts.filter((t) => t.id !== id)
  }, 5000)
  return id
}
