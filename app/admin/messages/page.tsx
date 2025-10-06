"use client"
import AdminPage from "@/components/admin/admin-page";
import MessageClient from "@/components/admin/messages/message";
import React from "react";

export default function AdminMessages() : React.ReactNode {

    return <AdminPage title="Messages" table={false}>
        <div className="w-full">
            <MessageClient />
        </div>
    </AdminPage>
}