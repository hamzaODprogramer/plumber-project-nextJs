import Contact from "@/components/public/contact";
import Footer from "@/components/public/footer";
import Image from "next/image";
import React from "react";

export default function ContactPage(): React.ReactNode {
    return <>
        <div  className="relative h-[300px] sm:h-78 w-full mt-22 bg-red-600">
            <Image className="object-cover" fill src="/img/bg.jpg" alt="bg" />
            <div className="bg-black/60 px-10 sm:px-20 inset-0 flex flex-col justify-center absolute">
                <p className="text-white font-bold text-5xl capitalize">Contact</p>  
                <p className="mt-4 text-white/90 w-full md:w-1/2 text-xl ">
                    Contactez-nous dès aujourd’hui pour toute question, devis ou urgence. Nous sommes disponibles 12/6 pour vous aider.
                </p>
            </div>
        </div>
        <Contact />
        <Footer className="mt-20" />
    </>
}