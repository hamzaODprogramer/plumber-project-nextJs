"use client"
import Footer from "@/components/public/footer";
import Services from "@/components/public/services";
import Video from "@/components/public/video";
import Image from "next/image";
import React from "react";

export default function ServicesPage() : React.ReactNode {
    return <>
        <div  className="relative h-[300px] sm:h-78 w-full mt-22 bg-red-600">
            <Image className="object-cover" fill src="/img/bg.jpg" alt="bg" />
            <div className="bg-black/60 px-10 sm:px-20 inset-0 flex flex-col justify-center absolute">
                <p className="text-white font-bold text-5xl capitalize">services</p>
                
                <p className="mt-4 text-white/90 w-full sm:w-1/2 text-xl ">Nous proposons une large gamme de services de plomberie adaptés aux besoins des particuliers et des entreprises.</p>
            </div>
        </div>
        <Services />
        <Video />
        <Footer className="mt-120" />
    </>
}