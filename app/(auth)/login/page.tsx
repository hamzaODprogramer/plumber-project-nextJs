"use client"
import Button from '@/components/controls/button';
import Input from '@/components/controls/input';
import { CheckingDirection } from '@/lib/functions/global';
import translations from '@/lib/translation/main';
import { Key, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


export default function Login(): React.ReactNode {
  const lang = useSelector((state: any) => state.admin.lang) as keyof typeof translations
  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

  return (
    <div
      style={{ backgroundImage: "url('/bg-login.mp4')" }}
      className="flex h-full items-center bg-amber-700 justify-center"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-login.mp4" type="video/mp4" />
      </video>
      <div className="w-1/3 z-90 flex flex-col py-10 px-15 items-center h-fit bg-white shadow-md shadow-black/30">
        <Image width={160} height={160} src="/logo2.png" alt="logo" />
        <p className="text-2xl font-semibold text-[#061f46]">
          {translations[lang]['Login_Welcome']}
        </p>
        <Input
          type="text"
          icon={<User size={24} className="text-[#061f46] opacity-85" />}
          placeholder={translations[lang]['Login_Username_Placeholder']}
          classNameContainer="mt-4 w-full border-1 border-blue-700/50"
          className="text-lg"
        />
        <Input
          type="password"
          icon={<Key size={24} className="text-blue-950 opacity-85" />}
          placeholder={translations[lang]['Login_Password_Placeholder']}
          classNameContainer="mt-4 w-full border-1 border-blue-700/50"
          className="text-lg"
        />
        <Link
          href={'/reset'}
          className={`text-[#061f46] font-medium mt-2 underline ${isRTL ? 'ml-auto' : 'mr-auto'}`}
        >
          {translations[lang]['Login_ForgotPassword']}
        </Link>
        <Button
          text={translations[lang]['Login_Button_Text']}
          className="mt-3 py-3 text-white font-semibold cursor-pointer hover:bg-blue-700 transition-all duration-300 bg-blue-800 w-full p-2 justify-center"
        />
      </div>
    </div>
  );
}
