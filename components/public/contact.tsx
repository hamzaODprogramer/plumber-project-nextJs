'use client';
import React from 'react';
import Button from '../controls/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';

export default function Contact() {
  const lang = useSelector((state: RootState) => state.admin.lang) as keyof typeof translations;

  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full mt-20 px-10 lg:px-20 h-auto lg:h-[500px]">
      <div className="h-full w-full flex flex-col">
        <p className="text-[#ff4917] font-bold uppercase text-md">
          {translations[lang]['Contact_Entrer_en_contact']}  
        </p>
        <h1 className="text-4xl text-blue-950 mt-2 font-bold capitalize">
          {translations[lang]['Contact_Titre_principal']}
        </h1>
        <p className="mt-6 text-md text-black/60 font-semibold">
          {translations[lang]['Contact_Texte_description']}
        </p>
        <iframe
          className="w-full flex-1 mt-3 border border-black/20"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?q=32.257684%2C%20-8.524209&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div>

      <div className="w-full h-full flex flex-col py-8 px-8 bg-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <input
            className="font-semibold focus:ring-2 focus:ring-blue-300 text-black/80 px-4 py-3 border border-black/20 bg-white outline-none md:col-span-1"
            type="text"
            placeholder={translations[lang]['Contact_Form_Votre_Nom']}
          />
          <input
            className="font-semibold focus:ring-2 focus:ring-blue-300 text-black/80 px-4 py-3 border border-black/20 bg-white outline-none md:col-span-1"
            type="email"
            placeholder={translations[lang]['Contact_Form_Votre_Email']}
          />
          <input
            className="font-semibold focus:ring-2 focus:ring-blue-300 text-black/80 px-4 py-3 border border-black/20 bg-white outline-none col-span-1 md:col-span-2"
            type="text"
            placeholder={translations[lang]['Contact_Form_Sujet']}
          />
          <textarea
            className="font-semibold focus:ring-2 focus:ring-blue-300 text-black/80 px-4 pt-4 border border-black/20 bg-white outline-none min-h-40 max-h-40 col-span-1 md:col-span-2"
            placeholder={translations[lang]['Contact_Form_Message']}
          />
        </div>
        <Button
          className="px-5 capitalize mt-5 w-full text-center py-4 justify-center cursor-pointer text-lg text-white font-semibold bg-[#184d88] hover:bg-[#1e60aa] duration-700 transition-all"
          text={translations[lang]['Contact_Envoyer_le_message']}
        />
      </div>
    </div>
  );
}
