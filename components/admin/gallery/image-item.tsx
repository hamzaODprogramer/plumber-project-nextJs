import { Eye, Trash } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
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

import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import {
  setOpenDeleteImageDialoge,
  setOpenShowImageDialoge,
} from '@/lib/store/slicer';
import translations from '@/lib/translation/main';

export default function ImageItem({ src }: { src: string }): React.ReactNode {
  const dispatch = useDispatch();
  const openShowImageDialoge = useSelector(
    (state: RootState) => state.admin.openShowImageDialoge,
  );
  const openDeleteImageDialoge = useSelector(
    (state: RootState) => state.admin.openDeleteImageDialoge,
  );

  const lang = useSelector((state:RootState)=>state.admin.lang) as 'fr' | 'ar'
  

  return (
    <div className="bg-black/10 flex-1 h-50 relative group">
      <Dialog open={openShowImageDialoge}>
        <DialogContent className="w-fit !rounded-none text-center [&>button]:hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <DialogTitle>{lang == "fr" ? "Image" : "صورة"}</DialogTitle>

          <div className="relative w-110">
            <Image
              width={1000}
              height={0}
              sizes="100vw"
              src={'/img/service-1.jpg'}
              alt="img"
              className="w-full h-auto object-cover object-center"
            />
          </div>
          <DialogFooter className="flex justify-center items-center w-full">
            <DialogClose
              className="flex justify-center items-center w-full"
              asChild
            >
              <Button
                onClick={() => dispatch(setOpenShowImageDialoge(false))}
                type="button"
                variant="secondary"
                className="cursor-pointer bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80"
              >
                {lang == "fr" ? "Fermer" : "الغاء"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={openDeleteImageDialoge}>
        <AlertDialogContent className="!rounded-none" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <AlertDialogHeader>
            <AlertDialogTitle>{translations[lang].DeleteService_Title}</AlertDialogTitle>
            <AlertDialogDescription>
              {translations[lang].DeleteImage_Description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className='flex items-center gap-2'>
            <AlertDialogCancel
              className="rounded-none text-[#061f46] dark:text-white cursor-pointer"
              onClick={() => dispatch(setOpenDeleteImageDialoge(false))}
            >
              {translations[lang].DeleteService_Cancel}
            </AlertDialogCancel>
            <AlertDialogAction className="rounded-none dark:text-white bg-[#061f46] hover:bg-[#061f46]/90 cursor-pointer">
              {translations[lang].DeleteService_Confirm}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Image fill src={src} alt="img" className="object-cover object-center" />
      <div className="gap-4 hidden transition-all duration-500 group-hover:flex justify-center items-center bg-black/40 w-full h-full absolute inset-0">
        <div className="p-3 bg-[#061f46] cursor-pointer hover:bg-blue-950 ">
          <Eye
            onClick={() => dispatch(setOpenShowImageDialoge(true))}
            size={28}
            className="text-white dark:hover:bg-white/10 hover:bg-black/10"
          />
        </div>
        <div className="p-3 bg-red-600 cursor-pointer hover:bg-red-800 ">
          <Trash
            onClick={() => dispatch(setOpenDeleteImageDialoge(true))}
            size={28}
            className="text-white dark:hover:bg-white/10 hover:bg-black/10"
          />
        </div>
      </div>
    </div>
  );
}