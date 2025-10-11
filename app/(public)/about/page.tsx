'use client';
import AboutUS from '@/components/public/about-us';
import Footer from '@/components/public/footer';
import Numbers from '@/components/public/numbers';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

export default function AboutPage(): React.ReactNode {
  const lang = useSelector((state: RootState) => state.admin.lang) as keyof typeof translations;
  return (
    <>
      <div className="relative h-[300px] sm:h-78 w-full mt-22 bg-red-600">
        <Image className="object-cover" fill src="/img/bg.jpg" alt="bg" />
        <div className="bg-black/60 px-10 sm:px-20 inset-0 flex flex-col justify-center absolute">
          <p className="text-white font-bold text-5xl capitalize">
            {translations[lang]['AboutPage_Titre']}
          </p>

          <p className="mt-4 text-white/90 w-full sm:w-1/2 text-xl ">
            {translations[lang]['AboutPage_Description']}          
          </p>
        </div>
      </div>
      <AboutUS className="mt-10" />
      <Numbers />
      <Footer className="mt-20" />
    </>
  );
}
