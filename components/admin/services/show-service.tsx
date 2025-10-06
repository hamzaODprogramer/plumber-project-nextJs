"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Settings } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from '@/lib/store/store'
import { setOpenShowDialoge } from "@/lib/store/slicer"

export default function ShowService() {
    const dispatch = useDispatch()
    const openShowDialoge = useSelector((state:RootState) => state.admin.openShowDialoge)

    return (
        <Dialog open={openShowDialoge}>
        <DialogContent className="max-w-sm text-center [&>button]:hidden">
            <DialogHeader>
            <div className="flex flex-col items-center gap-3">
                <div className="rounded-full p-5 bg-black/10 dark:bg-white/10">
                    <Settings size={45} fill={false ?`rgb(6,31,70)` : 'white'} className="text-[rgb(6,31,70)] dark:text-white" />
                </div>
                <DialogTitle className="text-xl font-bold">{"service.name"}</DialogTitle>
                <DialogDescription className="text-gray-600 text-center dark:text-gray-300">
                {"service.description"}
                </DialogDescription>
            </div>
            </DialogHeader>
            <DialogFooter className=" flex justify-center items-center w-full">
                <DialogClose className=" flex justify-center items-center w-full" asChild>
                    <Button onClick={()=>dispatch(setOpenShowDialoge(false))} type="button" variant="secondary" className="cursor-pointer bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80">
                        Fermer
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    )
}
