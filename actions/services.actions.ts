"use server"

import { prisma } from "@/lib/prisma/main"
import { RootState } from "@/lib/store/store"
import { ServiceValidation } from "@/lib/validation/main"
import { useSelector } from "react-redux"
import { Action } from "redux"

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

export async function getAllServices(): Promise<serviceDataProps[]> {
  try {
    return await prisma.services.findMany()   
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function deleteService(id:number): Promise<ActionCRUD> {
  try {
    const deletedService = await prisma.services.delete({
      where: {service_id:id}
    })
    if(deletedService) return {
      success: true,
      message: "le service a ete supprimer avec succés"
    };
    else return {
      success: false,
      message: "un erreur produit lors la supprission de service"
    }
  } catch (error) {
    console.log(id)
    return {
      success: false,
      message: "un erreur produit lors la supprission de service",
    }
  }
}

export async function getService(id: number): Promise<ActionCRUD> {
  try {
    const service = await prisma.services.findUnique({
      where: { service_id: id }
    });
    if (service) {
      return {
        success: true,
        data: service as serviceDataProps 
      };
    } else {
      return {
        success: false,
        message: "une erreur produit"
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "une erreur produit"
    };
  }
}


export async function updateService(prevState: any, formData: FormData): Promise<ActionCRUD>{
  try {
    const serviceData : serviceDataProps = {
      service_name : formData.get("name") as string,
      service_icon : formData.get("icon") as string,
      service_description : formData.get("description") as string
    }

    const result = ServiceValidation.safeParse({
      name: serviceData.service_name,
      description: serviceData.service_description
    })

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

    const id = Number(formData.get("id"))

    const updatedService = await prisma.services.update({
      where: {service_id:id},
      data : serviceData
    })

    if(updatedService){

      return {
        success: true,
        message: "Service updated successfully",
        data: updatedService,
      }
    }else{
      return {
        success: false,
        error: "Failed to update service",
      }
    }
    
  } catch (error) {
    return {
      success: false,
      message : "Failed to update service",
    }
  }
}