import Button from "@/components/controls/button";
import Input from "@/components/controls/input";
import { Key, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewPassword(): React.ReactNode {
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
            <p className="text-2xl font-semibold text-[#061f46]">Entrer le nouveau mote de passe</p>
            <Input
                type="password" 
                icon={<Key size={24} className="text-[#061f46] opacity-85" />} 
                placeholder="Nouveau mote de passe" 
                classNameContainer="mt-4 w-full border-1 border-blue-700/50"
                className="text-lg"
            />
            <Input 
                type="password"
                icon={<Key size={24} className="text-blue-950 opacity-85" />} 
                placeholder="Confirmer le mote de passe" 
                classNameContainer="mt-4 w-full border-1 border-blue-700/50"
                className="text-lg"
            />
            <Link href={"/login"} className="text-[#061f46] font-medium mt-2 underline mr-auto" >connexion</Link>
            <Button
                text="reinstaller"
                className="mt-3 capitalize py-3 text-white font-semibold cursor-pointer hover:bg-blue-700 transition-all duration-300 bg-blue-800 w-full p-2 justify-center"
            />
        </div>
    </div>
}