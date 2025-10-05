import Image from "next/image";
import { JSX } from "react";
import Button from "../controls/button";
import {Phone} from "lucide-react"
export default function SuperSection(): JSX.Element {
  return (
    <div className="relative w-full h-[480px] mt-20">
      <Image className="object-cover" src='/img/carousel-2.jpg' fill alt="superlogo" />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 pt-5 md:pt-20 pl-5 pr-5 lg:pl-20 lg:pr-20">
        <p className=" text-white transition-all duration-800 text-5xl font-bold md:text-6xl lg:full sm:w-4/5">Solutions plomberie pour tous</p>
        <p className="text-white opacity-80 text-xl font-semibold mt-6 lg:w-1/2 sm:w-full">Avec plus de 20 ans d’expérience, <i>Jaouad OD</i> vous offre des services fiables  : réparation de fuites, installation de tuyauterie, entretien et dépannage.</p>
        <div className="flex items-center gap-3">
          <Button 
            className="px-5 py-5 mt-10 gap-3 cursor-pointer text-xl text-white font-semibold bg-[#184d88] hover:bg-[#1e60aa] border duration-700 transition-all" 
            text="Appler maintenant" 
            icon={<Phone size={24} color="white" fill="white" className="hidden sm:flex"/>}  
          />
          <Button 
            className="px-5 mt-10 py-5 cursor-pointer text-xl text-white font-semibold bg-[#ff4917] hover:bg-orange-500 duration-700 transition-all"
            text="Voir nos service"            
          />
        </div>
      </div>
    </div>
  );
}
