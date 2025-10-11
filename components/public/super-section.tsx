import Image from 'next/image';
import { JSX } from 'react';
import Button from '../controls/button';
import { Phone } from 'lucide-react';
import { useTranslation } from '@/lib/functions/global';
import translations from '@/lib/translation/main';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
export default function SuperSection(): JSX.Element {
  
  const lang = useSelector((state: RootState) => state.admin.lang) as keyof typeof translations;

  return (
    <div className="relative w-full h-[480px] mt-20">
      <Image
        className="object-cover"
        src="/img/carousel-2.jpg"
        fill
        alt="superlogo"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 pt-5 md:pt-20 pl-5 pr-5 lg:pl-20 lg:pr-20">
        <p className=" text-white transition-all duration-800 text-5xl font-bold md:text-6xl lg:full sm:w-4/5">
          {translations[lang]['SuperSection_Titre']}
        </p>
        <p className="text-white opacity-80 text-xl font-semibold mt-6 lg:w-1/2 sm:w-full">
          {translations[lang]['SuperSection_Description']}
        </p>
        <div className="flex items-center gap-3">
          <Button
            className="px-5 py-5 mt-10 gap-3 cursor-pointer text-xl text-white font-semibold bg-[#184d88] hover:bg-[#1e60aa] border duration-700 transition-all"
            text={translations[lang]['SuperSection_Appeler_maintenant']}
            icon={
              <Phone
                size={24}
                color="white"
                fill="white"
                className="hidden sm:flex"
              />
            }
          />
          <Button
            className="px-5 mt-10 py-5 cursor-pointer text-xl text-white font-semibold bg-[#ff4917] hover:bg-orange-500 duration-700 transition-all"
            text={translations[lang]['SuperSection_Voir_nos_services']}
          />
        </div>
      </div>
    </div>
  );
}
