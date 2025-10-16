"use server"

import { prisma } from "@/lib/prisma/main"
import { revalidatePath } from "next/cache"

export async function addService(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name")
    const icon = formData.get("icon")
    const description = formData.get("description")

    // Validation
    if (!name || !icon || !description) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    const newService = await prisma.services.create({
      data: {
        service_name: name as string,
        service_icon: icon as string,
        service_description: description as string,
      },
    })

    console.log("service : ", newService)

    // IMPORTANT: Revalidate the path to trigger re-render
    revalidatePath("/admin/services") // Update this to your actual path
    
    return {
      success: true,
      message: "Service created successfully",
      data: newService,
    }

  } catch (error: any) {
    console.error("Error creating service:", error)

    return {
      success: false,
      error: error.message || "Failed to create service",
    }
  }
}