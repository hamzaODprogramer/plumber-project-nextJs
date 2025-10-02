import Button from "@/components/controls/button";
import Input from "@/components/controls/input";
import { Key, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ResetPassword() : React.ReactNode {
    return <div style={{backgroundImage:"url('/bg-login.mp4')"}} className="flex h-full items-center bg-amber-700 justify-center">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/bg-login.mp4" type="video/mp4" />
            </video>
            <div className="w-fit z-90 flex flex-col py-10 px-15 items-center h-fit bg-white shadow-md shadow-black/30">
                <Image width={160} height={160} src="/logo2.png" alt="logo"/>
                <p className="text-2xl font-semibold text-[#061f46]">Bienvenu dans votre compte</p>
                <Input
                    type="email" 
                    icon={<Mail size={24} className="text-[#061f46] opacity-65" />} 
                    placeholder="Votre Email" 
                    classNameContainer="mt-4 w-full border-1 border-blue-700/50"
                    className="text-lg"
                />
                <Link href={"/login"} className="text-[#061f46] font-medium mt-2 underline mr-auto" >connexion</Link>
                <Button
                    text="Récuperer"
                    className="mt-3 py-3 text-white font-semibold cursor-pointer hover:bg-blue-700 transition-all duration-300 bg-blue-800 w-full p-2 justify-center"
                />
            </div>
        </div> 
}