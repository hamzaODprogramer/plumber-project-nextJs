"use server"

import { prisma } from "@/lib/prisma/main"

export async function addService(prevState: any, formData: FormData) : Promise<ActionCRUD> {
  try {
    const name = formData.get("name")
    const icon = formData.get("icon")
    const description = formData.get("description")

    const newService = await prisma.services.create({
      data: {
        service_name: name as string,
        service_icon: icon as string,
        service_description: description as string,
      },
    })

    if(newService){
      return {
        success: true,
        message: "Service created successfully",
        data: newService,
      }
    }else{
      return {
        success: false,
        error: "Failed to create service",
      }
    }

  } catch (error: any) {

    return {
      success: false,
      error: error.message || "Failed to create service",
    }
  }
}