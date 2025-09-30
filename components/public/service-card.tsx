import { Check, Toilet } from "lucide-react";
import { JSX } from "react";

export default function ServiceCard({icon}:service_cardPros) : JSX.Element {
    return <div className="w-72 max-h-[486px] min-h-[486px] bg-blue-50 p-7">
        {icon}
        <p className="text-[#09213c] capitalize font-bold text-2xl mt-3">Réparation de tuyaux de toilettes</p>
        <p className="mt-6 text-md text-black/60 font-semibold">
            Avec une longue expérience dans le domaine, <b>Jaouad OD</b> vous propose des 
            réparation ou entretien 
        </p>
        <div className="mt-6 space-y-3 *:flex *:items-center *:gap-4 *:font-semibold *:text-[18px] *:text-[#184d88]">
            <div>
                <Check size={18} color="green" strokeWidth={5}/>
                <p>Service de qualité</p>
            </div>
            <div>
                <Check size={18} color="green" strokeWidth={5}/>
                <p>client satisfait</p>
            </div>
            <div>
                <Check size={18} color="green" strokeWidth={5}/>
                <p>soutien 6/20</p>
            </div>
        </div>
    </div>
}