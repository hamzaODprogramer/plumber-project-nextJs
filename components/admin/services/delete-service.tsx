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
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Vous etes sûr ?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel onClick={()=>dispatch(setOpenDeleteDialoge(false))}>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}