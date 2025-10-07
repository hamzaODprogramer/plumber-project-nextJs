'use client'
import AdminPage from "@/components/admin/admin-page";
import ContactItem from "@/components/admin/contact/contact-item";
import { AtSign, Facebook, Mail, MailOpen, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import React from "react";

export default function AdminContact() : React.ReactNode {
    return <AdminPage title="Contacts" table titleTable="Liste des contacts">
        <ContactItem icon={Phone} type="text" placeholder="Numéro de telephone" fill={false}/>
        <ContactItem icon={Facebook} type="text" placeholder="Lien de facebook" fill={false}/>
        <ContactItem icon={MailOpen} type="text" placeholder="Adresse email" fill={false}/>
        <ContactItem icon={Twitter} type="text" placeholder="Lien de compte X" fill={false}/>
        <ContactItem icon={Youtube} type="text" placeholder="Lien de chaine youtube" fill={false}/>
        <ContactItem icon={MapPin} type="text" placeholder="Adresse" fill={false}/>
    </AdminPage>
}