import React, { useActionState, useEffect, useState } from 'react';

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

import { setOpenUpdateDialoge, setReloadData } from '@/lib/store/slicer';
import type { RootState } from '@/lib/store/store';
import { useDispatch, useSelector } from 'react-redux';
import AdminInput from '../admin-input';
import AdminTextArea from '../admin-textarea';
import { get_plumbingIcons } from '@/lib/constant/global';
import { CheckingDirection } from '@/lib/functions/global';
import translations from '@/lib/translation/main';
import { getService, updateService } from '@/actions/services.actions';
import ServiceUpdateSkeleton from './loading-update-service';
import { BeatLoader } from 'react-spinners';
import { toast } from 'sonner';

export default function UpdateService(): React.ReactNode {
  // Dialog Apparence Code
  const openUpdateDialoge = useSelector(
    (state: RootState) => state.admin.openUpdateDialoge,
  );
  const dispatch = useDispatch();
  const [selectedIcon, setSelectedIcon] = React.useState('');
  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);
  const lang = useSelector((state:RootState)=>state.admin.lang) as "fr" | "ar"
  const plumbingIcons = get_plumbingIcons(lang)

  // update data service code section
  const [service,setService] = useState<serviceDataProps>({})
  const [loading,setLoading] = useState<boolean>(true)
  const service_id = useSelector((state:RootState)=>state.admin.currendId)
  useEffect(()=>{
    const fetchService = async () => {
      setLoading(true)
      const result = await getService(service_id)
      if(result.success && result.data){
        setService(result.data)
      }
      setLoading(false)
    };fetchService()
  },[openUpdateDialoge])

  const currendId = useSelector((state:RootState)=>state.admin.currendId) as number
  const reloadData = useSelector((state:RootState)=>state.admin.reloadData)
  const [state,updateAction,pending] = useActionState(updateService,null)

  useEffect(()=>{
    if(!pending && state){
      if(state.success){
        dispatch(setOpenUpdateDialoge(false))
        toast.success(state.message)
        dispatch(setReloadData(!reloadData))
      }else{
        toast.error(state.message)
      }
    }

  },[state])


  return (
    <Dialog open={openUpdateDialoge}>
      <DialogContent className="sm:max-w-md !rounded-none [&>button]:hidden">
        <DialogHeader className="!rounded-none">
          <DialogTitle className={`${isRTL ? 'text-start' : ''}`}>
            {translations[lang].UpdateService_Title}
          </DialogTitle>
          <DialogDescription className={`${isRTL ? 'text-start' : ''}`}>
            {translations[lang].UpdateService_Description}
          </DialogDescription>
        </DialogHeader>
        {
          loading
          ? <ServiceUpdateSkeleton />
          : <form action={updateAction}>
              <input name='id' defaultValue={currendId} hidden/>
              <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                  <AdminInput
                    text={translations[lang].UpdateService_Input_Service_Label}
                    placeholder={translations[lang].UpdateService_Input_Service_Placeholder}
                    type="text"
                    name='name'
                    defaultValue={service.service_name}
                  />
                  {state?.ErrorValidation?.name && <span className='text-red-400 text-sm -mt-3'>{state.ErrorValidation.name}</span>}
                  <div className="flex flex-col w-full justify-start pt-0 pb-2 gap-1 ">
                    <label className="text-black/95 font-medium dark:text-white/95">{translations[lang].UpdateService_Select_Icon_Label}</label>
                    <Select name='icon' defaultValue={service.service_icon}>
                      <SelectTrigger dir={isRTL ? 'rtl' : 'ltr'} className="w-full rounded-none bg-black/5 dark:bg-white/5 text-md h-10 border-1 border-black/20 ">
                        <SelectValue  className='' placeholder={translations[lang].UpdateService_Input_Service_Placeholder} />
                      </SelectTrigger>
                      <SelectContent
                        className="rounded-none max-h-[200px] overflow-y-auto"
                        position="popper"
                        sideOffset={5}
                      >
                        {plumbingIcons.map((item:any) => {
                          const Icon = item.icon;
                          return (
                            <SelectItem  key={item.value} value={item.value}>
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
                    defaultValue={service.service_description}
                    name='description'
                    text={translations[lang].UpdateService_TextArea_Description_Label}
                    placeholder={translations[lang].UpdateService_TextArea_Description_Placeholder}
                  />
                  {state?.ErrorValidation?.description && <span className='text-red-400 text-sm -mt-3'>{state.ErrorValidation.description}</span>}

                </div>
              </div>
              <DialogFooter className="sm:justify-start mt-2">
                <Button
                  disabled={loading}
                  type="submit"
                  variant="secondary"
                  className="cursor-pointer bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80"
                >
                { pending ? <BeatLoader size={5} color='white' /> : translations[lang].Add_Button}
                </Button>
                <DialogClose asChild>
                  <Button
                    onClick={(e) => dispatch(setOpenUpdateDialoge(false))}
                    type="button"
                    variant="secondary"
                    className="cursor-pointer bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80"
                  >
                    {translations[lang].UpdateService_Close_Button}
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
        }
      </DialogContent>
    </Dialog>
  );
}
