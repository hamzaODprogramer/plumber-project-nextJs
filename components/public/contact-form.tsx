"use client"
import React, { useActionState, useEffect, useLayoutEffect, useState } from 'react';
import Button from '../controls/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import { getAllServices } from '@/actions/services.actions';
import { addMessage } from '@/actions/message.actions';
import { BeatLoader } from 'react-spinners';
import { toast } from 'sonner';

export default function ContactForm(): React.ReactNode {
  const lang = useSelector((state: RootState) => state.admin.lang) as keyof typeof translations;

  // fetching server list section code
  const [services,setServices] = useState<serviceDataProps[]>([])
  useLayoutEffect(()=>{
    const fetchServices = async () => {
      setServices(await getAllServices())
    };fetchServices()
  },[])

  // sending message code section
  const [username,setUsername] = useState<string>("")
  const [service,setService] = useState<string>("")
  const [email,setEmail] = useState<string>("")
  const [description,setDescription] = useState<string>('')

  const [state,messageAction,pending] = useActionState(addMessage,null)
  useEffect(()=>{
    if(state && !pending){
      if(state.success){
        toast.success(state.message)
        setUsername('')
        setEmail('')
        setDescription('')
      }else{
        toast.error(state.message)
      }
      console.log("state : ",state)
    }

  },[state])

  return (
    <div className="w-full absolute mt-120 md:mt-96 pt-100 flex justify-center">
      <div className="bg-blue-100 w-6/7 md:w-4/7 flex flex-col items-center py-5 px-12 pb-7">
        <p className="p-4 text-[#09213c] font-bold text-4xl">{translations[lang]['Formulaire_contact_Titre']}</p>
        <form action={messageAction} className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-4 *:focus:outline-2 *:focus:outline-blue-300  w-full">
          <div className='relative'>
            <input
              className="bg-white p-4 w-full text-lg outline-none focus:ring-4 focus:ring-blue-200"
              placeholder={translations[lang]['Formulaire_contact_Votre_Nom']}
              type="text"
              name='username'
              value={username}
              onChange={e=>setUsername(e.target.value)}
            />
            {state?.ErrorValidation?.username && <span className='text-red-500 text-sm absolute w-full left-0 -bottom-5'>{state.ErrorValidation.username}</span>}
          </div>
          
          <select onChange={e=>setService(e.target.value)} name='serviceId' className="bg-white  appearance-none pr-8  bg-no-repeat p-4 px-4 w-full text-lg outline-none focus:ring-4 focus:ring-blue-200">
            <option>{translations[lang]['Formulaire_contact_Selectionnez_un_service']}</option>
            {
              services.map((service,idx)=>{
                return <option key={idx} value={service.service_id}>{service.service_name}</option>
              })
            }
          </select>
          <div className='relative w-full col-span-2'>
            <input
              className="bg-white   p-4 w-full text-lg outline-none focus:ring-4 focus:ring-blue-200"
              placeholder={translations[lang]['Formulaire_contact_Votre_Email']}
              name='email'
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
            {state?.ErrorValidation?.email && <span className='text-red-400 text-sm absolute w-full left-0 -bottom-5'>{state.ErrorValidation.email}</span>}
          </div>
          <textarea
            className="bg-white max-h-20 col-span-2 p-4 w-full text-lg outline-none focus:ring-4 focus:ring-blue-200"
            placeholder={translations[lang]['Formulaire_contact_Votre_Demande']}
            name='description'
            onChange={e=> setDescription(e.target.value)}
          />
          <Button
            type='submit'
            pending={pending}
            iconSize={10}
            disabled={username.length === 0 || email.length === 0 || (description.length === 0 && service === "unselected")}
            className="px-5 capitalize w-full text-center h-15 justify-center col-span-2 cursor-pointer text-lg text-white font-semibold bg-[#184d88] hover:bg-[#1e60aa] duration-700 transition-all"
            text={translations[lang]['Formulaire_contact_Envoyer_Maintenant']}
          />
        </form>
      </div>
    </div>
  );
}
