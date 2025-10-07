import React from "react";
import { Bell, Menu, Search, Sun } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function AdminHeader() : React.ReactNode {
    return (
        <div className="flex items-center justify-between w-full  py-4 px-3 dark:bg-gray-800 bg-white  border-b border-black/10">
            <div className="flex-1 flex items-center gap-3">
                <Menu size={48} className="p-3 dark:bg-white/5 bg-black/5 cursor-pointer dark:hover:bg-white/10 dark:text-white hover:bg-black/10"/>
                <div className={`flex flex-row-reverse w-2/4 sm:w-1/4 bg-black/5 dark:bg-white/5 justify-start p-3 gap-2 items-center focus-within:w-1/3 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-100`}>
                    <input 
                        type="search"
                        placeholder="Recherche"
                        className={`flex-1 dark:text-white text-gray-600 font-semibold outline-none w-full bg-transparent `}
                    />
                    <Search size={20} className="text-[rgb(6,31,70)] dark:text-white opacity-50"/>
                </div>
            </div>
            

            <div className="flex items-center gap-5 mr-4 *:cursor-pointer">
                <Bell size={48} className="p-3 bg-black/5 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 hover:bg-black/10"/>
                <Sun size={48}  className="p-3  bg-black/5 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 hover:bg-black/10" />
                
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-2.5 p-2.5 dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10">
                            <Image className="rounded-full" width={27} height={27} src="/francelg.png" alt="lang" />
                            <p className="text-black/80 dark:text-white  font-semibold">FR</p>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="!rounded-none !dark:bg-gray-600">
                        <DropdownMenuItem>
                            <div className="flex items-center gap-2.5  ">
                                <Image className="rounded-full" width={18} height={18} src="/francelg.png" alt="lang" />
                                <p className="text-black/80 dark:text-white  font-semibold">francais</p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <div className="flex items-center gap-2.5  ">
                                <Image className="rounded-full" width={19} height={19} src="/arabiclg.png" alt="lang" />
                                <p className="text-black/80 dark:text-white  font-semibold">العربية</p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}