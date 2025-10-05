"use client"
import { CheckingDirection } from "@/lib/functions/global";
import { Check, Phone } from "lucide-react";
import Image from "next/image";
import { JSX, useEffect, useState } from "react";

export default function AboutUS({className}:{className:string}): JSX.Element {

    const [isRTL, setIsRTL] = useState<boolean>(false)
    CheckingDirection(setIsRTL)

    return (
        <div className={`${className} w-full pl-10 pr-10 md:pl-20 md:pr-20 pt-10`}>
            <p className="text-[#ff4917] mr-10 font-bold uppercase text-md">À propos de nous</p>
            <div className="flex items-center w-full flex-col lg:flex-row">
                {/* content textuel */}
                <div className="lg:w-1/2 w-full pr-8">
                    <h1 className="text-4xl text-blue-950 mt-2 font-bold capitalize">
                        Votre plombier de confiance depuis plus de 20 ans
                    </h1>
                    <p className="mt-6 text-md text-black/60 font-semibold">
                        Avec une longue expérience dans le domaine, <b>Jaouad OD</b> vous propose des 
                        solutions rapides et durables pour tous vos besoins en plomberie. Installation, 
                        réparation ou entretien — nous garantissons un service fiable et professionnel
                    </p>
                    <div className="mt-6 space-y-3 *:flex *:items-center *:gap-4 *:font-semibold *:text-[18px] *:text-[#184d88]">
                        <div>
                            <Check size={18} color="green" strokeWidth={5}/>
                            <p>Plomberie résidentielle et commerciale</p>
                        </div>
                        <div>
                            <Check size={18} color="green" strokeWidth={5}/>
                            <p>Des services rapides et fiables à des prix équitables</p>
                        </div>
                        <div>
                            <Check size={18} color="green" strokeWidth={5}/>
                            <p>Disponible pour les réparations d'urgence</p>
                        </div>
                    </div>
                    <div className="bg-[#184d88] p-6 mt-8 flex gap-5">
                        <Phone size={70} color="#184d88" className="hidden md:flex p-4 bg-white" fill="#184d88"/>
                        <div className="flex flex-col gap-2">
                            <p className="text-white text-xl font-bold">Appelez-moi</p>
                            <p dir={isRTL ? "rtl" : "ltr"} className="text-[#ff4917] text-3xl font-semibold">+212 621 389 558</p>
                        </div>
                        
                    </div>
                </div>
                {/* content visuel */}
                <div className="lg:w-1/2 mt-5 lg:mt-0 w-full pr-8 relative h-[480px]">
                    <Image 
                        src="/img/about-1.jpg" 
                        alt="about-1"
                        className={`object-cover ${isRTL ? 'mr-auto' : 'ml-auto'} `}
                        width={400} 
                        height={400}
                    />
                    <Image 
                        src="/img/about-2.jpg" 
                        alt="about-2"
                        className="object-cover border-t-8 border-r-8  border-white absolute bottom-0"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}