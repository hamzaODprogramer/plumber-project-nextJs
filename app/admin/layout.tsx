"use client"
import AdminHeader from "@/components/admin/header-admin";
import SideBar from "@/components/admin/side-bar";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";

export default function AdminLayout({children}:Readonly<{children:React.ReactNode}>){
    const sideBarVisibility = useSelector((action:RootState)=>action.admin.sideBarVisibility)
    
    return (
        <div className="flex h-screen bg-black/5 dark:bg-gray-700 light">
            {sideBarVisibility && <SideBar />}
            <div className="flex-1 flex flex-col">
                <AdminHeader />
                <main className="flex-1 overflow-auto dark:bg-gray-700">
                    {children}
                </main>
            </div>
        </div>
    );
}