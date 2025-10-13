'use client';
import AdminAccountInput from '@/components/admin/account/admin-account-input';
import AdminInput from '@/components/admin/admin-input';
import AdminPage from '@/components/admin/admin-page';
import OtpCheck from '@/components/admin/otp-check';
import Button from '@/components/controls/button';
import { setOpenOtpCompteAdminDialoge } from '@/lib/store/slicer';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import { Save } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AdminAccount(): React.ReactNode {
  const dispatch = useDispatch();

  const lang = useSelector((state:RootState) => state.admin.lang) as 'fr' | 'ar'; 
  

  return (
    <AdminPage title={translations[lang].AdminAccount_Page_Title} table titleTable={translations[lang].AdminAccount_Table_Title}>
      <OtpCheck />
      <AdminAccountInput
        text={translations[lang].AdminAccount_Input_Username_Label}
        type="text"
        placeholder={translations[lang].AdminAccount_Input_Username_Placeholder}
      />
      <AdminAccountInput
        text={translations[lang].AdminAccount_Input_Email_Label}
        type="email"
        placeholder={translations[lang].AdminAccount_Input_Email_Placeholder}
      />
      <AdminAccountInput
        text={translations[lang].AdminAccount_Input_Password_Label}
        type="password"
        placeholder={translations[lang].AdminAccount_Input_Password_Placeholder}
      />
      <Button
        onClick={() => dispatch(setOpenOtpCompteAdminDialoge(true))}
        icon={<Save size={24} />}
        text={translations[lang].AdminAccount_Button_Save}
        className="cursor-pointer font-semibold p-2.5 bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80 self-start gap-1.5"
      />
    </AdminPage>
  );
}
