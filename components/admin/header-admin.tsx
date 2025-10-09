import React, { useEffect, useState } from "react";
import { Bell, Menu, Search, Sun } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { setSideBarVisibility } from "@/lib/store/slicer";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { admin_links } from "@/lib/constant/global";
import Link from "next/link";
import { CheckingDirection } from "@/lib/functions/global";
import { usePathname } from "next/navigation";

export default function AdminHeader() : React.ReactNode {
    const sideBarVisibility = useSelector((action:RootState)=>action.admin.sideBarVisibility)
    const dispatch = useDispatch()
    const pathname = usePathname()

    const [isRTL, setIsRTL] = useState<boolean>(false)
    CheckingDirection(setIsRTL)
    
    const [clientWidth,setClientWidth] = useState(0)

    useEffect(() => {
        setClientWidth(document.body.clientWidth)
        
        const handleResize = () => {
            setClientWidth(document.body.clientWidth)
        }
        
        window.addEventListener('resize', handleResize)
        
    }, []);

    const handleMenuClick = () => {
        if (clientWidth >= 752) {
            dispatch(setSideBarVisibility(!sideBarVisibility))
        }
    }

    return (
        <div className="flex items-center justify-between w-full  py-4 px-3 dark:bg-gray-800 bg-white  border-b border-black/10">
            <div className="flex-1 flex items-center gap-3">
                {clientWidth < 752 ? (
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Menu size={48} className="p-3 dark:bg-white/5 bg-black/5 cursor-pointer dark:hover:bg-white/10 dark:text-white hover:bg-black/10"/>
                        </DrawerTrigger>
                        <DrawerContent className="!rounded-none">
                            <DrawerHeader className="hidden">
                            <DrawerTitle></DrawerTitle>
                            </DrawerHeader>
                                <div className="*:uppercase *:pr-5  *:py-4 *:pl-5 *:flex *:items-center *:gap-2 *:text-blue-950 *:font-semibold">
                                    {admin_links.map((link,idx)=>{
                                        return <Link key={idx} href={link.route} className={`flex items-center gap-2 w-full cursor-pointer px-3 py-2.5 ${(pathname == link.route) ? 'bg-[#061f46] dark:bg-gray-600' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}>
                                            <link.icon size={20} className={` ${(pathname == link.route) ? 'text-white dark:text-white' : 'opacity-85 text-[#061f46] dark:text-white'}`} />
                                            <p className={`${(pathname == link.route) ? "text-white  opacity-85" : "text-[#061f46] dark:text-white opacity-85"}  font-semibold`}>{link.name}</p>
                                        </Link> 
                                    })}
                                </div>
                            <DrawerFooter>
                            <DrawerClose>
                            </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                ) : (
                    <Menu onClick={handleMenuClick} size={48} className="p-3 dark:bg-white/5 bg-black/5 cursor-pointer dark:hover:bg-white/10 dark:text-white hover:bg-black/10"/>
                )}
                
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