import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { setOpenDeleteDialoge } from '@/lib/store/slicer';
import type { RootState } from '@/lib/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { CheckingDirection } from '@/lib/functions/global';
import translations from '@/lib/translation/main';

export default function DeleteService(): React.ReactNode {
  
  const openDeleteDialoge = useSelector(
    (state: RootState) => state.admin.openDeleteDialoge,
  );
  const dispatch = useDispatch();

  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

  const lang = useSelector((state:RootState)=>state.admin.lang) as 'fr' | 'ar'

  return (
    <AlertDialog open={openDeleteDialoge} >
      <AlertDialogContent className="!rounded-none" >
        <AlertDialogHeader >
          <AlertDialogTitle>{translations[lang].DeleteService_Title}</AlertDialogTitle>
          <AlertDialogDescription>
            {translations[lang].DeleteService_Description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex items-center gap-2'>
          <AlertDialogCancel
            className="rounded-none text-[#061f46] dark:text-white cursor-pointer"
            onClick={() => dispatch(setOpenDeleteDialoge(false))}
          >
            {translations[lang].DeleteService_Cancel}
          </AlertDialogCancel>
          <AlertDialogAction className="rounded-none dark:text-white bg-[#061f46] hover:bg-[#061f46]/90 cursor-pointer">
            {translations[lang].DeleteService_Confirm}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
