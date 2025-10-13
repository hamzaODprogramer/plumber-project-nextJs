import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

import { CheckingDirection } from '@/lib/functions/global';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { setOpenOtpCompteAdminDialoge } from '@/lib/store/slicer';
import translations from '@/lib/translation/main';

export default function OtpCheck(): React.ReactNode {
  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

  const openOtpCompteAdminDialoge = useSelector(
    (action: RootState) => action.admin.openOtpCompteAdminDialoge,
  );
  const dispatch = useDispatch();

  const lang = useSelector((state:RootState)=>state.admin.lang) as 'fr' | 'ar'

  return (
    <Dialog open={openOtpCompteAdminDialoge}>
      <DialogContent className="sm:max-w-md !rounded-none [&>button]:hidden">
        <DialogHeader className="!rounded-none">
          <DialogTitle className={`${isRTL ? '!text-start' : ''}`}>
            {translations[lang].OtpCheck_Title}
          </DialogTitle>
          <DialogDescription className={`${isRTL ? 'text-start' : ''}`}>
            {translations[lang].OtpCheck_Description}          
          </DialogDescription>
        </DialogHeader>
        <p className="font-medium">{translations[lang].OtpCheck_Verification_Label} </p>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup className="!rounded-none gap-2 *:focus:ring-3 *:ring-blue-500 *:border-1 *:border-blue-200">
            <InputOTPSlot
              index={0}
              className="!rounded-none w-12 h-12 text-lg"
            />
            <InputOTPSlot
              index={1}
              className="!rounded-none w-12 h-12 text-lg"
            />
            <InputOTPSlot
              index={2}
              className="!rounded-none w-12 h-12 text-lg"
            />
            <InputOTPSlot
              index={3}
              className="!rounded-none w-12 h-12 text-lg"
            />
            <InputOTPSlot
              index={4}
              className="!rounded-none w-12 h-12 text-lg"
            />
            <InputOTPSlot
              index={5}
              className="!rounded-none w-12 h-12 text-lg"
            />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-md -mt-3 text-black/70 dark:text-white/70">
          {translations[lang].OtpCheck_Instructions} 
        </p>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              onClick={() => dispatch(setOpenOtpCompteAdminDialoge(false))}
              type="button"
              variant="secondary"
              className="cursor-pointer bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80"
            >
              {translations[lang].OtpCheck_Button_Text} 
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
