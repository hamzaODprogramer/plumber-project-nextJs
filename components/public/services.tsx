import { JSX } from "react";

export default function Services() : JSX.Element {
    return <div className="mt-24 w-full flex">
        <div className="bg-[#184d88] hidden lg:flex items-center justify-center h-[600px] w-80">
            <h1 className="text-white m-0 p-0 text-center text-6xl font-bold capitalize -rotate-90">
                15 ans <br/> d'expérience
            </h1>
        </div>
        <div className="ml-24">
            <p className="text-[#ff4917] font-bold uppercase text-md">Nos services</p>
            <h1 className="text-4xl text-blue-950 mt-2 font-bold capitalize">
                Découvrez nos services            
            </h1>
        </div>
    </div>
}