'use client';
import Button from '@/components/controls/button';
import { colorAccounts } from '@/lib/constant/global';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import { Plus, Reply } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

export default function MessageClient(): React.ReactNode {
  const lang = useSelector((state:RootState) => state.admin.lang) as 'fr' | 'ar'; 
  
  return (
    <div className="w-full bg-white dark:bg-gray-800 p-3 flex flex-col gap-3 shadow-sm shadow-black/15 dark:shadow-white/15">
      <div className="flex items-center gap-2">
        <div
          className="text-white dark:text-[#061f46] flex items-center justify-center rounded-full w-10 h-10 font-bold text-lg"
          style={{
            backgroundColor:
              colorAccounts[Math.floor(Math.random() * colorAccounts.length)],
          }}
        >
          S
        </div>
        <div>
          <p className="font-semibold text-[#061f46] dark:text-white">
            Hamza OUADOUD
          </p>
          <p className="text-gray-500 dark:text-white/50 text-sm">2025-25-20</p>
        </div>
      </div>
      <div className="w-full dark:text-white bg-black/5 dark:bg-white/5 px-3 py-2 font-normal border-1 border-[#061f46]/20 dark:border-white/20 shadow-sm shadow-[#061f46]/10 dark:shadow-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ut autem
        sint incidunt impedit ipsam aliquid libero repudiandae! Minima enim
        deserunt officiis consequatur corrupti et delectus voluptas quibusdam
        atque ea!
      </div>
      <textarea
        placeholder={translations[lang].MessageClient_Text_Placeholder}
        className="w-full mt-2 dark:text-white outline-none focus:ring-blue-300 focus:ring-4 bg-black/5 dark:bg-white/5 px-3 py-2 font-normal"
      />
      <Button
        className="px-2 gap-1 font-medium py-2 cursor-pointer  pr-3 text-white dark:text-[#061f46]  bg-[#061f46] dark:bg-white hover:bg-[#061f46]/85 dark:hover:bg-white/85 border duration-700 transition-all"
        text={translations[lang].MessageClient_Button_Text}
        icon={<Reply size={20} className="font-extrabold" />}
      />
    </div>
  );
}
