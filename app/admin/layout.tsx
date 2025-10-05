import AdminHeader from "@/components/admin/header-admin";
import SideBar from "@/components/admin/side-bar";

export default function AdminLayout({children}:Readonly<{children:React.ReactNode}>){
    return (
        <div className="flex h-screen bg-black/5 dark:bg-gray-700 light">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <AdminHeader />
                <main className="flex-1 overflow-auto dark:bg-gray-700">
                    {children}
                </main>
            </div>
        </div>
    );
}