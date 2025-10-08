"use client"
import AdminAccountInput from "@/components/admin/account/admin-account-input";
import AdminInput from "@/components/admin/admin-input";
import AdminPage from "@/components/admin/admin-page";
import OtpCheck from "@/components/admin/otp-check";
import Button from "@/components/controls/button";
import { setOpenOtpCompteAdminDialoge } from "@/lib/store/slicer";
import { Save } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

export default function AdminAccount() : React.ReactNode {
    const dispatch = useDispatch()

    return <AdminPage title="Compte" table titleTable="Gestion de Compte">
        <OtpCheck />
        <AdminAccountInput text="Nom d'utilisateur" type="text" placeholder="Entrer le nom d'utilisateur"/>
        <AdminAccountInput text="Email" type="email" placeholder="Entrer l'email"/>
        <AdminAccountInput text="Mots de passe" type="password" placeholder="Entrer le mots de passe"/>
        <Button  
            onClick={()=>dispatch(setOpenOtpCompteAdminDialoge(true))}
            icon={<Save size={24} />}
            text="Enregistrer" className="cursor-pointer font-semibold p-2.5 bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80 self-start gap-1.5"
        />
    </AdminPage>
}