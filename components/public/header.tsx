'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { JSX, useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import Button from '../controls/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getLinks } from '@/lib/constant/global';
import { usePathname } from 'next/navigation';
import { CheckingDirection, useTranslation } from '@/lib/functions/global';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';

export default function Header(): JSX.Element {
  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

  const pathname = usePathname();

  // Multilingua Logic Section
  const { changeLanguage ,language } = useTranslation()
  const lang : "fr" | "ar" = useSelector((state:RootState)=> state.admin.lang) as "fr" | "ar"
  const links = getLinks(lang);

  

  return (
    <>
      <nav className={`fixed top-0 w-full shadow-lg shadow-black/20  z-50 bg-white flex items-center ${isRTL ? 'pl-5 pr-1' : 'pl-1 pr-20'}  lg:pl-20 lg:pr-20 h-fit py-3.5`}>
        <Image
          className="mb-0"
          width={90}
          height={90}
          src="/logo2.png"
          alt="logo"
        ></Image>
        <div className="hidden md:flex md:gap-3 lg:gap-8 xl:gap-10 items-center md:ml-4 lg:ml-10 mr-5 gap-8  *:transition-colors duration-500 ease-linear ">
          {links.map((link) => {
            return (
              <Link
                key={link.route}
                className={`uppercase font-semibold  ${pathname == link.route ? 'text-blue-500' : 'text-blue-950 hover:text-blue-500'}`}
                href={link.route}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className={`flex items-center gap-3 ${isRTL ? 'mr-auto' : 'ml-auto'}`}>
          <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center cursor-pointer gap-2.5 p-2.5 dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10">
              <Image
                className="rounded-full"
                width={27}
                height={27}
                src={lang=='fr' ? "/francelg.png" : '/arabiclg.png'}
                alt="lang"
              />
              <p className="text-black/80 dark:text-white font-semibold">{lang=='fr' ? "français" : "عربية"}</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!rounded-none !dark:bg-gray-600 space-y-1 *:cursor-pointer">
            <DropdownMenuItem className={`${lang=='fr' ? 'bg-[#184d88] hover:bg-[#184d88]' : ''} !rounded-none`} onClick={() => changeLanguage('fr')}>
              <div className="flex items-center gap-2.5  ">
                <Image
                  className="rounded-full"
                  width={18}
                  height={18}
                  src={"/francelg.png"}
                  alt="lang"
                />
                <p className={`${lang=='fr' ? 'text-white' : 'text-black/80'}  dark:text-white  font-semibold`}>
                  francais
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className={`${lang=='ar' ? 'bg-[#184d88] hover:bg-[#184d88]' : ''} !rounded-none`} onClick={() => changeLanguage('ar')}>
              <div className="flex items-center gap-2.5  ">
                <Image
                  className="rounded-full"
                  width={19}
                  height={19}
                  src="/arabiclg.png"
                  alt="lang"
                />
                <p className={`${lang=='ar' ? 'text-white' : 'text-black/80'}  dark:text-white  font-semibold`}>
                  العربية
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          <Drawer modal={false}>
          <DrawerTrigger asChild>
            <div
              className={`flex md:hidden ${isRTL ? 'mr-auto -ml-1' : 'ml-auto -mr-10'} p-[9] dark:bg-white/5 bg-black/5 cursor-pointer dark:hover:bg-white/10 dark:text-white hover:bg-black/10`}
            >
              <Button
                icon={
                  <Menu size={28} color="black" className="cursor-pointer" />
                }
              />
            </div>
          </DrawerTrigger>
          <DrawerContent className="!rounded-none">
            <DrawerHeader className="hidden">
              <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <div className="*:uppercase *:pr-5 *:hover:bg-black/10 *:py-4 *:pl-5 *:flex *:items-center *:gap-2 *:text-blue-950 *:font-semibold">
              {links.map((link, idx) => {
                return (
                  <Link key={idx} href={link.route}>
                    <link.icon size={24} className="text-blue-950 " />
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <DrawerFooter>
              <DrawerClose></DrawerClose>
            </DrawerFooter>
          </DrawerContent>
          </Drawer>
        </div>
        
      </nav>
    </>
  );
}
