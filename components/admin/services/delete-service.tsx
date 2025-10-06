import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { setOpenDeleteDialoge } from "@/lib/store/slicer";
import type { RootState } from '@/lib/store/store'
import { useDispatch, useSelector } from "react-redux";

export default function DeleteService() : React.ReactNode {

    const openDeleteDialoge = useSelector((state:RootState)=> state.admin.openDeleteDialoge)
    const dispatch = useDispatch()

    return <AlertDialog open={openDeleteDialoge}>
        <AlertDialogContent className="!rounded-none">
            <AlertDialogHeader>
            <AlertDialogTitle>Vous etes sûr ?</AlertDialogTitle>
            <AlertDialogDescription>
                Cette action sera supprimer de maniere permanent ce service
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel className="rounded-none text-[#061f46] cursor-pointer" onClick={()=>dispatch(setOpenDeleteDialoge(false))}>Anuller</AlertDialogCancel>
            <AlertDialogAction className="rounded-none bg-[#061f46] hover:bg-[#061f46]/90 cursor-pointer">Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}