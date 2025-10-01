import React from "react";
import Button from "../controls/button";

export default function ContactForm(): React.ReactNode {
    return <div className="w-full absolute mt-120 md:mt-96 pt-100 flex justify-center">
        <div className="bg-blue-100 w-6/7 md:w-4/7 flex flex-col items-center py-5 px-12">
            <p className="p-4 text-[#09213c] font-bold text-4xl">Contact Nous</p>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mt-4 *:focus:outline-2 *:focus:outline-blue-300  w-full">
                <input
                    className="bg-white p-4 w-full text-lg outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="Votre Nom"
                    type="text"
                />
                <select
                    
                    className="bg-white  appearance-none pr-8  bg-no-repeat p-4 px-4 w-full text-lg outline-none focus:ring-4 focus:ring-blue-200"
                >
                    <option>Selectionnez une service</option>
                    <option >service 1</option>
                    <option>service 2</option>
                </select>
                <input
                    className="bg-white  col-span-2 p-4 w-full text-lg outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="Votre Email"
                    type="email"
                />
                 <textarea
                    className="bg-white max-h-20 col-span-2 p-4 w-full text-lg outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="Votre Demande"
                />
                <Button 
                    className="px-5 capitalize w-full text-center py-4 justify-center col-span-2 cursor-pointer text-lg text-white font-semibold bg-[#184d88] hover:bg-[#1e60aa] duration-700 transition-all" 
                    text="Envoyer maintenant" 
                />
            </div>
        </div>
    </div>
} 