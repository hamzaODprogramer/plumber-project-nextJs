import React from "react";

export default function NotificationItem() : React.ReactNode {
    return <div className="flex items-center gap-2 p-1 ">
        <div className="bg-amber-700  flex justify-center items-center w-13 h-13 rounded-full">
            <p className="text-2xl font-semibold text-center self-center">A</p>
        </div>
        <div>
            <p className="font-semibold text-base text-[#061f46] dark:text-white">Hamza envoyer une message</p>
            <p className="text-sm text-black/80 dark:text-white/80">2025-05-21</p>
        </div>
    </div>
}