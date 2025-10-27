'use client';
import { getAllMessages } from '@/actions/message.actions';
import AdminPage from '@/components/admin/admin-page';
import MessageClient from '@/components/admin/messages/message';
import MessageClientSkeleton from '@/components/admin/messages/skeleton-message';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function AdminMessages(): React.ReactNode {
  const lang = useSelector((state:RootState) => state.admin.lang) as 'fr' | 'ar'; 
  
  const [messages,setMessages] = useState<messageDataProps[]>([])
  const [loading,setLoading] = useState<boolean>(true)
  useEffect(()=>{
    setLoading(true)
    const fetchMessages = async () => {
      setMessages(await getAllMessages())
      setLoading(false)
    };fetchMessages()
  },[])

  return (
    <AdminPage title={translations[lang].AdminMessages_Page_Title} table={false}>
      <div className="w-full">
        {
          loading
          ? <MessageClientSkeleton />
          : messages.map((msg,idx)=>{
            return <MessageClient 
                      key={idx}
                      message_username={msg.message_username}
                      message_description={msg.message_description}
                      message_email={msg.message_email}
                      created_at={msg.created_at}
                    />
          })
        }
        
      </div>
    </AdminPage>
  );
}
