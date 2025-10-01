import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ContactForm from "./contact-form";

export default function Video() : React.ReactNode {
    return <div className="mt-20 relative w-full h-[500px]">
        <Image src='/img/carousel-1.jpg' alt="img" className="object-cover" fill />
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="cursor-pointer flex flex-col items-center gap-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-32 h-32 bg-white/20 rounded-full animate-ping"></div>
                            <div className="absolute w-28 h-28 bg-white/30 rounded-full animate-pulse"></div>
                            <div className="relative z-10">
                                <Play className="bg-white p-5 size-24 transition-all duration-300 hover:size-28 rounded-full"  color="#184d88" fill="#184d88"/>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="w-fit max-w-none">
                        <DialogHeader>
                            <DialogTitle>Youtube video</DialogTitle>
                        </DialogHeader>
                        <div className="flex justify-center items-center">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </DialogContent>
                </Dialog>
                <p className="text-white mt-10 font-bold text-4xl md:text-5xl text-center">Service de plomberie d'urgence</p>
                <p className="text-white mt-2 font-bold text-2xl md:text-3xl text-center">10 heures 6 jours par semaine</p>
            </div>
            <ContactForm />
        </div>
        
    </div>
}