import React from "react";
import Button from "@/components/controls/button"

import { Plus, Table2Icon } from "lucide-react"
import AddService from "./services/add-service";
import { useDispatch } from "react-redux";
import { setOpenAddDialoge } from "@/lib/store/slicer";

export default function AdminPage({children,addButton,title,table,titleTable}:AdminPageProps) : React.ReactNode {
    
    const dispatch = useDispatch()

    return <div className="p-5 dark:bg-gray-700 relative">
      <AddService/>
      <p className="text-2xl sticky top-2.5 z-50 mb-2 text-[#061f46]/90 dark:text-white/90 font-semibold bg-gray-100 dark:bg-gray-700 pb-2">{title}</p>
      {table && <div className="bg-white mt-5 dark:bg-gray-800 flex-1 px-5 py-5.5 flex flex-col gap-4 items-center justify-center shadow-sm shadow-black/15 dark:shadow-white/15 relative z-10">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Table2Icon size={24} className="text-[#061f46]/85 dark:text-white"/>
            <p className="font-medium text-lg text-[#061f46]/85 dark:text-white">{titleTable}</p>
          </div>
          {
            addButton && <Button 
              onClick={() => dispatch(setOpenAddDialoge(true)) }
              className="px-2 uppercase gap-1 font-medium py-2 cursor-pointer text-md pr-3 text-white  bg-[#061f46] hover:bg-[#061f46]/85 border duration-700 transition-all" 
              text="Ajouter"
              icon={<Plus size={20} className="font-extrabold"/>}
            />
          }
        </div>
        {table && children}
      </div>}
      {
        !table && children
      }
  </div>
}