"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        unstyled: false,
        classNames: {
          toast: "group toast",
          success: "!bg-green-600 !text-white !border-green-600 !rounded-none",
          error: "!bg-red-600 !text-white !border-red-600 !rounded-none",
          warning: "!bg-yellow-500 !text-white !border-yellow-500 !rounded-none",
          info: "!bg-blue-600 !text-white !border-blue-600 !rounded-none",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }