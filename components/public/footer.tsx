'use client';
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  FacebookIcon,
  Linkedin,
  LocateIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Button from '../controls/button';
import Link from 'next/link';
import { CheckingDirection } from '@/lib/functions/global';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';

export default function Footer({ className }: footerProps): React.ReactNode {
  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

  const lang = useSelector((state: RootState) => state.admin.lang) as keyof typeof translations;

  return (
    <footer
      className={` bg-[#17224D] px-8 sm:px-20 pt-8 sm:pt-20 pb-5 ${className}`}
    >
      <div className="size-full w-full grid gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold text-2xl">{translations[lang]['Footer_Adresse']}</p>
          <div className="mt-5 flex items-center gap-3">
            <MapPin color="white" size={20} />
            <p className="text-white/80 capitalize font-[500]">
              {translations[lang]['Footer_Adresse_Ligne']}
            </p>
          </div>
          <div className="mt-1 flex items-center gap-3">
            <Phone color="white" size={20} />
            <p dir='ltr' className="text-white/80 capitalize font-[500]">
              +212 621 389 558
            </p>
          </div>
          <div className="mt-1 flex items-center gap-3">
            <Mail color="white" size={20} />
            <p className="text-white/80 font-[500]">jaouadplomb@gmail.com</p>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <Facebook
              fill="white"
              color="white"
              className=" p-2 border rounded-full cursor-pointer hover:bg-white hover:text-blue-500"
              size={38}
            />
            <Youtube
              fill="white"
              color="white"
              className=" p-2 border rounded-full cursor-pointer hover:bg-white hover:text-blue-500"
              size={38}
            />
            <Twitter
              fill="white"
              color="white"
              className=" p-2 border rounded-full cursor-pointer hover:bg-white hover:text-blue-500"
              size={38}
            />
            <Linkedin
              fill="white"
              color="white"
              className=" p-2 border rounded-full cursor-pointer hover:bg-white hover:text-blue-500"
              size={38}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold text-2xl capitalize">
            {translations[lang]['Footer_Horaires']}
          </p>
          <div className="mt-3">
            <div className="mt-2 flex flex-col gap-1">
              <p className="text-white font-bold text-lg capitalize">
                {translations[lang]['Footer_Horaires_Lundi_Vendredi']}
              </p>
              <p className="text-white font-normal text-lg">09:00 - 21:00 </p>
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <p className="text-white font-bold text-lg capitalize">
                {translations[lang]['Footer_Horaires_Samedi']}
              </p>
              <p className="text-white font-normal text-lg">09:00 - 12:00 </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold text-2xl capitalize">{translations[lang]['Footer_Services']}</p>
          <div className="mt-5">
            <div className="mt-1 flex cursor-pointer items-center gap-1">
              <ChevronRight size={16} strokeWidth={4} color="white" />
              <p className="text-white transition-all duration-300 hover:tracking-wide font-normal capitalize">
                Nettoyage des canalisations
              </p>
            </div>
            <div className="mt-1 flex cursor-pointer items-center gap-1">
              <ChevronRight size={16} strokeWidth={4} color="white" />
              <p className="text-white transition-all duration-300 hover:tracking-wide font-normal capitalize">
                conduite d'égout
              </p>
            </div>
            <div className="mt-1 flex cursor-pointer items-center gap-1">
              <ChevronRight size={16} strokeWidth={4} color="white" />
              <p className="text-white transition-all duration-300 hover:tracking-wide font-normal capitalize">
                chauffage de l'eau
              </p>
            </div>
            <div className="mt-1 flex cursor-pointer items-center gap-1">
              <ChevronRight size={16} strokeWidth={4} color="white" />
              <p className="text-white transition-all duration-300 hover:tracking-wide font-normal capitalize">
                nettoyage des toilettes
              </p>
            </div>
            <div className="mt-1 flex cursor-pointer items-center gap-1">
              <ChevronRight size={16} strokeWidth={4} color="white" />
              <p className="text-white transition-all duration-300 hover:tracking-wide font-normal capitalize">
                tuyau cassé
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold text-2xl capitalize">{translations[lang]['Footer_Bulletin']}</p>
          <p className="text-white font-normal mt-6 capitalize">
            {translations[lang]['Footer_Bulletin_Description']}
          </p>
          <div className="flex items-center justify-between bg-white p-2 max-w-md mt-2 overflow-hidden">
            <input
              type="email"
              placeholder={translations[lang]['Footer_Bulletin_Input_Placeholder']}
              className="px-2 py-3 outline-none"
            />
            <Button
              text={translations[lang]['Footer_Bulletin_Bouton']}
              className={`bg-blue-700 ${isRTL ? 'mr-auto' : 'ml-auto'}  cursor-pointer text-white  px-3 py-3 font-semibold hover:bg-blue-800`}
            />
          </div>
        </div>
      </div>
      <hr className="mt-10 w-full opacity-40" />
      <div className="mt-10 flex items-center justify-between">
        <p className="text-white">
          {translations[lang]['Footer_Copyright']}
        </p>
        <p className="text-white">
          {translations[lang]['Footer_Developpe_par']}
          <Link className="underline" href="/">
            Hamza OUADOUD
          </Link>
        </p>
      </div>
    </footer>
  );
}
