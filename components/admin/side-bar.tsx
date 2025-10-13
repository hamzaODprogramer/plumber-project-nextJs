'use client';
import { get_admin_links } from '@/lib/constant/global';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import {
  Contact,
  GalleryThumbnails,
  Home,
  Images,
  Info,
  LogOut,
  MessageCircle,
  ShowerHead,
  User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

export default function SideBar(): React.ReactNode {
  const pathname = usePathname();

  const lang : 'fr' | 'ar' = useSelector((state: RootState) => state.admin.lang) as "fr" | "ar";
  const admin_links = get_admin_links(lang as 'fr' | 'ar');

  return (
    <div className="border-r hidden md:flex dark:bg-gray-800 bg-white w-64 items-center flex-col h-screen sticky top-0">
      <div className="flex relative items-center justify-center gap-1 w-full py-5">
        <span className="text-[rgb(6,31,70)] z-90 text-shadow-xs text-shadow-white flex items-center gap-1 font-bold tracking-tight text-3xl">
          <p className="text-4xl">#</p> JaouadOD
        </span>
        <Image src="/admin-name-bg.jpg" fill alt="bg water" />
      </div>

      <div className="flex flex-col mt-5 *:px-3 w-full">
        <div className="flex gap-1 items-center">
          <hr className="w-3 size-[2px] bg-black/25 dark:bg-white/25" />
          <p className="text-black/70 dark:text-white/70 text-sm font-stretch-90%">
            {translations[lang].SideBar_Menu_Label}
          </p>
          <hr className=" w-1/3 size-[2px] bg-black/25 dark:bg-white/25" />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {admin_links.slice(0, 5).map((link) => {
            return (
              <Link
                key={link.route}
                href={link.route}
                className={`flex items-center gap-2 w-full cursor-pointer px-3 py-2.5 ${pathname == link.route ? 'bg-[#061f46] dark:bg-gray-600' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
              >
                <link.icon
                  size={20}
                  className={` ${pathname == link.route ? 'text-white dark:text-white' : 'opacity-85 text-[#061f46] dark:text-white'}`}
                />
                <p
                  className={`${pathname == link.route ? 'text-white  opacity-85' : 'text-[#061f46] dark:text-white opacity-85'}  font-semibold`}
                >
                  {link.name}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="flex gap-1 items-center mt-4">
          <hr className="w-3 size-[2px] bg-black/25 dark:bg-white/25" />
          <p className="text-black/70 dark:text-white/70 text-sm font-stretch-90%">
            {translations[lang].SideBar_Account_Label}
          </p>
          <hr className=" w-1/3 size-[2px] bg-black/25 dark:bg-white/25" />
        </div>
        <div className="mt-3 gap-2">
          {admin_links.slice(5, 7).map((link) => {
            return (
              <Link
                key={link.route}
                href={link.route}
                className={`flex items-center gap-2 w-full cursor-pointer px-3 py-2.5 ${pathname == link.route ? 'bg-[#061f46] dark:bg-white' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
              >
                <link.icon
                  size={20}
                  className={` ${pathname == link.route ? 'text-white dark:text-[#061f46]' : 'opacity-85 text-[#061f46] dark:text-white'}`}
                />
                <p
                  className={`${pathname == link.route ? 'text-white dark:text-[#061f46] opacity-85' : 'text-[#061f46] dark:text-white opacity-85'}  font-semibold`}
                >
                  {link.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
