"use client"
import React, { useState } from "react";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { setOpenAddDialoge } from "@/lib/store/slicer";
import type { RootState } from '@/lib/store/store'
import { useDispatch, useSelector } from "react-redux";
import AdminInput from "../admin-input";
import AdminTextArea from "../admin-textarea";
import { plumbingIcons } from "@/lib/constant/global";
import { CheckingDirection } from "@/lib/functions/global";

export default function AddService() : React.ReactNode {

  const openAddDialoge = useSelector((state:RootState)=> state.admin.openAddDialoge)
  const dispatch = useDispatch()
  const [selectedIcon, setSelectedIcon] = React.useState("")

  const [isRTL, setIsRTL] = useState<boolean>(false)
  CheckingDirection(setIsRTL) 

  return <Dialog open={openAddDialoge}>
    <DialogContent className="sm:max-w-md !rounded-none [&>button]:hidden" >
      <DialogHeader className="!rounded-none">
        <DialogTitle className={`${isRTL ? "!text-start" : ""}`}>Ajouter une service</DialogTitle>
        <DialogDescription className={`${isRTL ? "text-start" : ""}`}>
          Remplir toutes les champs pour ajouter une services
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center gap-2">
        <div className="grid flex-1 gap-2">
          <AdminInput text="Service" placeholder="Nom de Service" type="text" />
          <div className="flex flex-col w-full  dark:bg-white/5 justify-start pt-0 pb-2 gap-1 ">
            <label className="text-black/95 font-medium">
              Icon
            </label>
            <Select value={selectedIcon} onValueChange={setSelectedIcon}>
              <SelectTrigger className="w-full rounded-none bg-black/5 text-md h-10 border-1 border-black/20 ">
                <SelectValue placeholder="Selectionnez une icon" />
              </SelectTrigger>
              <SelectContent  className="rounded-none  max-h-[200px] overflow-y-auto" position="popper" sideOffset={5}>
                {plumbingIcons.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SelectItem key={item.value} value={item.value}>
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <AdminTextArea text="Description" placeholder="Entrer une description"/>
        </div>
      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button onClick={(e)=>dispatch(setOpenAddDialoge(false))} type="button" variant="secondary" className="cursor-pointer bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80">
            Fermer
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
}