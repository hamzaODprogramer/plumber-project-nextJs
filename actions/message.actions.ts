"use server"
import { prisma } from "@/lib/prisma/main"
import { MessageValidation } from "@/lib/validation/main"

export async function addMessage(prevState:any,formData:FormData): Promise<ActionCRUD> {
    try {
        const username = formData.get('username') as string
        const email = formData.get('email') as string
        const description = formData.get('description') as string
        const servicesService_id = Number(formData.get('serviceId'))
        

        const result = MessageValidation.safeParse({
            username: username,
            email: email
        })

        if(!result.success){
            const errorMap : Record<string,string> = {}
            result.error.issues.forEach((issue)=>{
                if(issue.path[0]) errorMap[issue.path[0] as string] = issue.message
                
            })
            return {
                success : false,
                ErrorValidation : errorMap,
                message: "Please fix the validation errors in the form"
            }
        }

        const newMessage = await prisma.message.create({
            data:{
                message_username : username as string,
                message_email: email as string,
                message_description : description as string,
                servicesService_id: servicesService_id as number,
            }
        });
        if(newMessage){
            return {
                success: true,
                message: "Message send successfully",
                data: newMessage,
            }
        }else{
            return {
                success: false,
                error: "Failed to send message",
            }
        }
        
    } catch (error:any) {
        return {
            success: false,
            error: error.message || "Failed to create service",
        }
    }
}

export async function getAllMessages() : Promise<messageDataProps[]> {
    try{
        return await prisma.message.findMany() as messageDataProps[]
    }catch(error:any){
        return []
    }
}