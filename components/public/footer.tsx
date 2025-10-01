"use client"
import { ArrowRight, ChevronRight, Facebook, FacebookIcon, Linkedin, LocateIcon, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "../controls/button";
import Link from "next/link";

export default function Footer({className}:footerProps) : React.ReactNode {
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
    return <footer className={` bg-[#17224D] px-20 pt-20 pb-5 ${className}`}>
        <div className="size-full w-full grid gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-1">
                <p className="text-white font-bold text-2xl">Adresse</p>
                <div className="mt-5 flex items-center gap-3">
                    <MapPin color="white" size={20} />
                    <p className="text-white/80 capitalize font-[500]">Qu El Amal N 51, Youssoufia</p>
                </div>
                <div className="mt-1 flex items-center gap-3">
                    <Phone color="white" size={20} />
                    <p className="text-white/80 capitalize font-[500]">+212 621 389 558</p>
                </div>
                <div className="mt-1 flex items-center gap-3">
                    <Mail color="white" size={20} />
                    <p className="text-white/80 font-[500]">jaouadplomb@gmail.com</p>
                </div>
                <div className="flex items-center mt-4 gap-2">
                    <Facebook fill="white" color="white" className=" p-2 border rounded-full cursor-pointer hover:bg-white hover:text-blue-500" size={38} />
                    <Youtube fill="white" color="white" className=" p-2 border rounded-full cursor-pointer hover:bg-white hover:text-blue-500" size={38} />
                    <Twitter fill="white" color="white" className=" p-2 border rounded-full cursor-pointer hover:bg-white hover:text-blue-500" size={38} />
                    <Linkedin fill="white" color="white" className=" p-2 border rounded-full cursor-pointer hover:bg-white hover:text-blue-500" size={38} />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-white font-bold text-2xl capitalize">Horaires d'ouverture</p>
                <div className="mt-3">
                    <div className="mt-2 flex flex-col gap-1">
                        <p className="text-white font-bold text-lg capitalize">Lundi - Vendredi :</p>
                        <p className="text-white font-normal text-lg">09:00 - 21:00 </p>
                    </div>
                    <div className="mt-2 flex flex-col gap-1">
                        <p className="text-white font-bold text-lg capitalize">Samedi :</p>
                        <p className="text-white font-normal text-lg">09:00 - 12:00 </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-white font-bold text-2xl capitalize">Services</p>
                <div className="mt-5">
                    <div className="mt-1 flex cursor-pointer items-center gap-1">
                        <ChevronRight size={16} strokeWidth={4} color="white" />
                        <p className="text-white transition-all duration-300 hover:tracking-wide font-normal capitalize">Nettoyage des canalisations</p>
                    </div>
                    <div className="mt-1 flex cursor-pointer items-center gap-1">
                        <ChevronRight size={16} strokeWidth={4} color="white" />
                        <p className="text-white transition-all duration-300 hover:tracking-wide font-normal capitalize">conduite d'égout</p>
                    </div>  
                    <div className="mt-1 flex cursor-pointer items-center gap-1">
                        <ChevronRight size={16} strokeWidth={4} color="white" />
                        <p className="text-white transition-all duration-300 hover:tracking-wide font-normal capitalize">chauffage de l'eau</p>
                    </div> 
                    <div className="mt-1 flex cursor-pointer items-center gap-1">
                        <ChevronRight size={16} strokeWidth={4} color="white" />
                        <p className="text-white transition-all duration-300 hover:tracking-wide font-normal capitalize">nettoyage des toilettes</p>
                    </div> 
                    <div className="mt-1 flex cursor-pointer items-center gap-1">
                        <ChevronRight size={16} strokeWidth={4} color="white" />
                        <p className="text-white transition-all duration-300 hover:tracking-wide font-normal capitalize">tuyau cassé</p>
                    </div> 
                </div> 
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-white font-bold text-2xl capitalize">Bulletin</p>
                <p className="text-white font-normal mt-6 capitalize">La douleur est de l’amour, juste de l’amour, le clitoris lui-même est de l’amour.</p>     
                <div className="flex items-center justify-between bg-white p-2 max-w-md mt-2 overflow-hidden">
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        className="px-2 py-3 outline-none"
                    />
                    <Button 
                        text="Envoyer"
                        className={`bg-blue-700 ${isRTL ? 'mr-auto' : 'ml-auto'}  cursor-pointer text-white  px-3 py-3 font-semibold hover:bg-blue-800`}
                    />
                </div>
            </div>
        </div>
        <hr  className="mt-10 w-full opacity-40"/>
        <div className="mt-10 flex items-center justify-between">
            <p className="text-white">© <u>JAOUAD OD</u>, All Right Reserved.</p>
            <p className="text-white" >Developper par <Link className="underline" href="/">Hamza OUADOUD</Link></p>
        </div>
    </footer>
}