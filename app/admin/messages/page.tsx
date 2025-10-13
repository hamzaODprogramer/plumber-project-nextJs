'use client';
import AdminPage from '@/components/admin/admin-page';
import MessageClient from '@/components/admin/messages/message';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import React from 'react';
import { useSelector } from 'react-redux';

export default function AdminMessages(): React.ReactNode {
  const lang = useSelector((state:RootState) => state.admin.lang) as 'fr' | 'ar'; 
  
  return (
    <AdminPage title={translations[lang].AdminMessages_Page_Title} table={false}>
      <div className="w-full">
        <MessageClient />
      </div>
    </AdminPage>
  );
}
