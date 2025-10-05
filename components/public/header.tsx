"use client";
import Image from "next/image";
import Link from "next/link";
import React, { JSX, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Button from "../controls/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { links } from "@/lib/constant/global";
import { usePathname } from "next/navigation";
import { CheckingDirection } from "@/lib/functions/global";

export default function Header() : JSX.Element {

  const [isRTL, setIsRTL] = useState<boolean>(false)
  CheckingDirection(setIsRTL)

  const pathname = usePathname()
  console.log('path : ',pathname)

  return <>
    <nav className="fixed top-0 w-full shadow-lg shadow-black/20  z-50 bg-white flex items-center pl-5 pr-20 lg:pl-20 lg:pr-20 h-fit">
      <Image className="mb-0" width={90} height={90} src="/logo.png" alt="logo"></Image>
      <div className="hidden md:flex md:gap-3 lg:gap-8 xl:gap-10 items-center md:ml-4 lg:ml-10 mr-5 gap-8 *:font-[Poppins] *:transition-colors duration-500 ease-linear ">
          {
            links.map((link,id)=>{
              return <Link key={id} className={`uppercase font-semibold  ${(pathname == (link.route)) ? 'text-blue-500' : 'text-blue-950 hover:text-blue-500' }`} href={link.route}>{link.name}</Link>
            })
          }
      </div>

      <Drawer>
        <DrawerTrigger asChild>
          <div className={`flex md:hidden ${isRTL ? 'mr-auto -ml-1' : 'ml-auto -mr-10'} p-2 hover:bg-black/5`}>
            <Button icon={<Menu size={28} color="black" className="cursor-pointer"/>} />
          </div>  
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="hidden">
            <DrawerTitle></DrawerTitle>
          </DrawerHeader>
            <div className="*:uppercase *:pr-5 *:hover:bg-black/10 *:py-4 *:pl-5 *:flex *:items-center *:gap-2 *:text-blue-950 *:font-semibold">
              {
                links.map((link,idx) => {
                  return <Link key={idx} href={link.route}>
                    <link.icon size={24} className="text-blue-950 "/>
                    {link.name}
                  </Link>
                })
              }
            </div>
          <DrawerFooter>
            <DrawerClose>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> 
    </nav>
  </>
}