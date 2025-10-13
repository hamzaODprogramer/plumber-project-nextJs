'use client';
import AdminPage from '@/components/admin/admin-page';
import ContactItem from '@/components/admin/contact/contact-item';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import {
  AtSign,
  Facebook,
  Mail,
  MailOpen,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

export default function AdminContact(): React.ReactNode {
  const lang = useSelector((state:RootState) => state.admin.lang) as 'fr' | 'ar'; 

  return (
    <AdminPage title={translations[lang].AdminContact_Page_Title} table titleTable={translations[lang].AdminContact_Table_Title}>
      <ContactItem
        icon={Phone}
        type="text"
        placeholder={translations[lang].AdminContact_Input_Phone_Placeholder}
        fill={false}
      />
      <ContactItem
        icon={Facebook}
        type="text"
        placeholder={translations[lang].AdminContact_Input_Facebook_Placeholder}
        fill={false}
      />
      <ContactItem
        icon={MailOpen}
        type="text"
        placeholder={translations[lang].AdminContact_Input_Email_Placeholder}
        fill={false}
      />
      <ContactItem
        icon={Twitter}
        type="text"
        placeholder={translations[lang].AdminContact_Input_Twitter_Placeholder}
        fill={false}
      />
      <ContactItem
        icon={Youtube}
        type="text"
        placeholder={translations[lang].AdminContact_Input_Youtube_Placeholder}
        fill={false}
      />
      <ContactItem
        icon={MapPin}
        type="text"
        placeholder={translations[lang].AdminContact_Input_Address_Placeholder}
        fill={false}
      />
    </AdminPage>
  );
}
