"use client";
import Image from "next/image";
import Link from "next/link";
import React, { JSX, useEffect, useState } from "react";
import { Contact, Home, Images, Info, Menu, ShowerHead } from "lucide-react";
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

export default function Header() : JSX.Element {

  const [isRTL, setIsRTL] = useState<boolean>(false)
  
  useEffect(() => {
    const checkRTL = () => {
      const htmlDir = document.documentElement.dir;
      const bodyDir = document.body.dir;
      const computedDir = window.getComputedStyle(document.documentElement).direction;
      
      const isRTLDetected = htmlDir === "rtl" || bodyDir === "rtl" || computedDir === "rtl";
      setIsRTL(isRTLDetected);
    };

    checkRTL();
    
    const timeoutId = setTimeout(checkRTL, 100);
    
    const observer = new MutationObserver(checkRTL);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir']
    });
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [])

  return <>
    <nav className="fixed top-0 w-full shadow-lg shadow-black/20  z-50 bg-white flex items-center pl-5 pr-20 lg:pl-20 lg:pr-20 h-fit">
      <Image className="mb-0" width={90} height={90} src="/logo.png" alt="logo"></Image>
      <div className="hidden md:flex md:gap-3 lg:gap-8 xl:gap-10 items-center md:ml-4 lg:ml-10 mr-5 gap-8 *:font-[Poppins] *:transition-colors duration-500 ease-linear *:text-blue-950  *:hover:text-blue-500">
          <Link className="uppercase font-semibold" href={"/"}>Acceuil</Link>
          <Link className="uppercase font-semibold" href={"/"}>À propos</Link>
          <Link className="uppercase font-semibold" href={"/"}>nos services</Link>
          <Link className="uppercase font-semibold" href={"/"}>contact</Link>
          <Link className="uppercase font-semibold" href={"/"}>Galerie</Link>
      </div>

      {/* DropDown true Langs Switcher */}
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
              <Link href={"/"}>
                <Home size={24} className="text-blue-950 "/>
                Acceuil
              </Link>
              <Link href={"/"}>
                <Info size={24} className="text-blue-950 "/>
                À propos
              </Link>
              <Link href={"/"}>
                <ShowerHead size={24} className="text-blue-950 "/>
                nos services
              </Link>
              <Link href={"/"}>
                <Contact size={24} className="text-blue-950 "/>
                contact
              </Link>
              <Link href={"/"}>
                <Images size={24} className="text-blue-950 "/>
                Galerie
              </Link>
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