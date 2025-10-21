"use server"

import { prisma } from "@/lib/prisma/main"
import { ServiceValidation } from "@/lib/validation/main"

export async function addService(prevState: any, formData: FormData) : Promise<ActionCRUD> {
  try {
    const name = formData.get("name")
    const icon = formData.get("icon")
    const description = formData.get("description")

    const result = ServiceValidation.safeParse({name,description})

    if(!result.success){
      const errorMap: Record<string,string> = {}
      result.error.issues.forEach((err)=>{
        if(err.path[0]){
          errorMap[err.path[0] as string] = err.message
        }
      })

      return {
        success : false,
        ErrorValidation : errorMap,
        message: "Please fix the validation errors in the form"
      }
    }

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