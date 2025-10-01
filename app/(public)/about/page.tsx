'use client'
import AboutUS from "@/components/public/about-us";
import Footer from "@/components/public/footer";
import Numbers from "@/components/public/numbers";
import Image from "next/image";
import React from "react";

export default function AboutPage() : React.ReactNode {
    return <>
        <div  className="relative h-[300px] sm:h-78 w-full mt-22 bg-red-600">
            <Image className="object-cover" fill src="/img/bg.jpg" alt="bg" />
            <div className="bg-black/60 px-10 sm:px-20 inset-0 flex flex-col justify-center absolute">
                <p className="text-white font-bold text-5xl capitalize">À propos de nous</p>
                
                <p className="mt-4 text-white/90 w-full sm:w-1/2 text-xl ">
                    Notre priorité est de garantir la satisfaction de nos clients grâce à un travail soigné, un service fiable et des prix compétitifs.
                </p>
            </div>
        </div>
        <AboutUS className="mt-10"/>
        <Numbers />
        <Footer className="mt-20" />
    </>
}