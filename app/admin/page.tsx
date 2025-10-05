'use client';

import { MessageCircle, ShowerHead } from "lucide-react";
import Image from "next/image";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { example_chart_data } from "@/lib/constant/global";

export default function HomeDashborad(): React.ReactNode {
    return <div className="p-5 dark:bg-gray-700">
        <div className="flex flex-col lg:flex-row items-center gap-6 flex-1">
            <div className="flex flex-col xl:flex-row-reverse items-center gap-3 py-5 px-8 bg-white dark:bg-gray-800 w-full lg:w-2/3 shadow-sm shadow-black/15 dark:shadow-white/15">
                <Image width={180} height={180} src="/team-1.png" alt="jaouad" />
                <div className="flex flex-col gap-3">
                    <p className="text-[#061f46] dark:text-white text-2xl font-semibold">Bienvenu JAOUAD OUADOUD</p>
                    <p className="text-black/60 dark:text-white/60 font-medium">
                        Vous êtes connecté en tant qu'administrateur.  
                        Depuis ce tableau de bord, vous pouvez gérer les services, les projets,  
                        consulter les messages des clients et suivre les statistiques globales.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 h-full flex items-stretch gap-6">
                <div className="bg-white dark:bg-gray-800 flex-1 px-5 py-5.5 flex flex-col items-center justify-center shadow-sm shadow-black/15 dark:shadow-white/15">
                    <div className="rounded-full p-5 bg-black/10 dark:bg-white/10">
                        <MessageCircle size={45} fill={false ?`rgb(6,31,70)` : 'white'} className="text-[rgb(6,31,70)] dark:text-white" />
                    </div>
                    <p className="text-black/70 dark:text-white/70 text-lg mt-5.5">Messages</p>
                    <p className="text-[rgb(6,31,70)] dark:text-white font-bold text-4xl">500</p>
                </div>
                <div className="bg-white dark:bg-gray-800 h-full flex-1 px-5 py-5.5 flex flex-col items-center justify-center shadow-sm shadow-black/15">
                    <div className="rounded-full p-5 bg-black/10 dark:bg-white/10">
                        <ShowerHead size={45} fill={false ?`rgb(6,31,70)` : 'white'} className="text-[rgb(6,31,70)] dark:text-white" />
                    </div>
                    <p className="text-black/70 dark:text-white/70 text-lg mt-5.5">Services</p>
                    <p className="text-[rgb(6,31,70)] dark:text-white font-bold text-4xl">500</p>
                </div>
            </div>
        </div>
        <div className="bg-white dark:bg-gray-800 mt-6 px-5 py-5.5 shadow-sm shadow-black/15 dark:shadow-white/15">
            <h3 className="text-xl font-semibold text-[#061f46] dark:text-white mb-4 capitalize">Statistiques Mensuelles des message</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={example_chart_data}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-600" />
                    <XAxis 
                        dataKey="month" 
                        className="stroke-gray-600 dark:stroke-white"
                        style={{ fontSize: '12px' }}
                    />
                    <YAxis 
                        className="stroke-gray-600 dark:stroke-white"
                        style={{ fontSize: '12px' }}
                    />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: 'var(--tooltip-bg, white)', 
                            border: '1px solid var(--tooltip-border, #e5e7eb)',
                            borderRadius: '6px',
                            color: 'var(--tooltip-text, black)'
                        }}
                        wrapperClassName="dark:[--tooltip-bg:rgb(31,41,55)] dark:[--tooltip-border:rgb(75,85,99)] dark:[--tooltip-text:white]"
                    />
                    <Legend wrapperStyle={{ color: 'inherit' }} />
                    <Line 
                        type="monotone" 
                        dataKey="desktop" 
                        stroke="rgb(6,31,70)" 
                        className="dark:stroke-white"
                        strokeWidth={2}
                        name="Nombre des Messages"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
}