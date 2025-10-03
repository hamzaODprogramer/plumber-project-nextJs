import { Home, Info, MessageCircle, ShowerHead } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SideBar() : React.ReactNode {
    return (
        <div className="border-r bg-white w-64 flex items-center flex-col h-screen sticky top-0">
            <div className="flex relative items-center justify-center gap-1 w-full py-5">
                <span className="text-[rgb(6,31,70)] z-90 text-shadow-xs text-shadow-white flex items-center gap-1 font-bold tracking-tight text-3xl"><p className="text-4xl">#</p> JaouadOD</span>
                <Image src='/admin-name-bg.jpg' fill alt="bg water" />
            </div>
            
            <div className="flex flex-col mt-5 *:px-3 w-full">
                <div className="flex gap-1 items-center">
                    <hr className="w-3 size-[2px] bg-black/25"/>
                    <p className="text-black/70 text-sm font-stretch-90%">Menu</p>
                    <hr className=" w-1/3 size-[2px] bg-black/25"/>
                </div>
                <div className="mt-2">
                    <div className="flex bg-[#061f46] items-center gap-2 w-full cursor-pointer px-3 py-2.5 ">
                        <Home size={20} color="white" className="opacity-85" />
                        <p className=" text-white opacity-85 font-semibold">Acceuil</p>
                    </div>
                    <div className="flex items-center gap-2 w-full cursor-pointer px-3 py-2.5 hover:bg-black/5">
                        <MessageCircle size={20} color="#061f46" className="opacity-85" />
                        <p className="text-[#061f46] opacity-85 font-semibold">Messages</p>
                    </div> 
                    <div className="flex items-center gap-2 w-full cursor-pointer px-3 py-2.5 hover:bg-black/5">
                        <ShowerHead size={20} color="#061f46" className="opacity-85" />
                        <p className="text-[#061f46] opacity-85 font-semibold">Services</p>
                    </div> 
                </div>
                
            </div>
        </div>
    );
}