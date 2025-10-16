'use client';
import React, { useActionState, useState } from 'react';

import { Button } from '@/components/ui/button';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { setOpenAddDialoge } from '@/lib/store/slicer';
import type { RootState } from '@/lib/store/store';
import { useDispatch, useSelector } from 'react-redux';
import AdminInput from '../admin-input';
import AdminTextArea from '../admin-textarea';
import { get_plumbingIcons } from '@/lib/constant/global';
import { CheckingDirection } from '@/lib/functions/global';
import translations from '@/lib/translation/main';
import { addService } from '@/actions/services.actions';

export default function AddService(): React.ReactNode {
  const openAddDialoge = useSelector(
    (state: RootState) => state.admin.openAddDialoge,
  );
  const dispatch = useDispatch();
  const [selectedIcon, setSelectedIcon] = React.useState('');

  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

  const lang = useSelector((state:RootState)=>state.admin.lang) as "fr"|"ar"

  const plumbingIcons = get_plumbingIcons(lang)  

  const [state,actionDispatch,pending] = useActionState(addService,null)

  return (
    
      <Dialog open={openAddDialoge}>
        <DialogContent className="sm:max-w-md !rounded-none [&>button]:hidden">
          <DialogHeader className="!rounded-none">
            <DialogTitle className={`${isRTL ? '!text-start' : ''}`}>
              {translations[lang].AddService_Title}
            </DialogTitle>
            <DialogDescription className={`${isRTL ? 'text-start' : ''}`}>
              {translations[lang].AddService_Description}
            </DialogDescription>
          </DialogHeader>
          <form action={actionDispatch}>
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <AdminInput
                  text={translations[lang].UpdateService_Input_Service_Label}
                  placeholder={translations[lang].UpdateService_Input_Service_Placeholder}
                  type="text"
                  name="name"
                />
                <div className="flex flex-col w-full  justify-start pt-0 pb-2 gap-1 ">
                  <label className="text-black/95 dark:text-white/95 font-medium">{translations[lang].UpdateService_Select_Icon_Label}</label>
                  <Select name='icon' value={selectedIcon} onValueChange={setSelectedIcon}>
                    <SelectTrigger dir={isRTL ? 'rtl' : 'ltr'} className="w-full rounded-none bg-black/5 dark:bg-white/5 text-md h-10 border-1 border-black/20 ">
                      <SelectValue placeholder={translations[lang].UpdateService_Select_Icon_Placeholder} />
                    </SelectTrigger>
                    <SelectContent
                      className="rounded-none  max-h-[200px] overflow-y-auto"
                      position="popper"
                      sideOffset={5}
                    >
                      {plumbingIcons.map((item:any) => {
                        const Icon = item.icon;
                        return (
                          <SelectItem key={item.value} value={item.value}>
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              <span>{item.label}</span>
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <AdminTextArea
                  name='description'
                  text={translations[lang].UpdateService_TextArea_Description_Label}
                  placeholder={translations[lang].UpdateService_TextArea_Description_Placeholder}
                />
              </div>
            </div>
          
          <DialogFooter className="sm:justify-start">
            <Button
                type="submit"
                variant="secondary"
                className="cursor-pointer bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80"
              >
                {translations[lang].Add_Button}
            </Button>
            <DialogClose asChild>
              <Button
                onClick={(e) => dispatch(setOpenAddDialoge(false))}
                type="button"
                variant="secondary"
                className="cursor-pointer bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80"
              >
                {translations[lang].UpdateService_Close_Button}
              </Button>
              
            </DialogClose>
            
          </DialogFooter>
        </form>
        </DialogContent>
      </Dialog>
  );
}
