'use client';
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
import { Settings } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/lib/store/store';
import { setOpenShowDialoge } from '@/lib/store/slicer';
import { stat } from 'fs';
import { useEffect, useState } from 'react';
import { getService } from '@/actions/services.actions';
import LoadingSHowService from './loading-show-service';
import * as LucideIcons from 'lucide-react';

export default function ShowService() {
  // Dialoge apparence code section
  const dispatch = useDispatch();
  const openShowDialoge = useSelector(
    (state: RootState) => state.admin.openShowDialoge,
  );
  const lang = useSelector((state: RootState) => state.admin.lang);

  // fetching data service code section
  const [loading,setLoading] = useState<boolean>(true)
  const [service,setService] = useState<serviceDataProps>({})
  const service_id = useSelector((state:RootState)=>state.admin.currendId)
  const IconComponent = service.service_icon ? (LucideIcons[service.service_icon as keyof typeof LucideIcons] as React.ComponentType<any>) : null;

  useEffect(()=>{
    const fetchService = async () => {
      setLoading(true)
      const result = await getService(service_id)
      if(result.success && result.data){
        setService(result.data)
      }
      setLoading(false)
    };fetchService()
  },[openShowDialoge, service_id])
  
  return (
    <Dialog open={openShowDialoge}>
      <DialogContent className="max-w-sm text-center [&>button]:hidden !rounded-none">
        {
          loading
          ? <LoadingSHowService />
          : <DialogHeader>
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-full p-5 bg-black/10 dark:bg-white/10">
                  {IconComponent && <IconComponent className="w-10 h-10" />}
                </div>
                <DialogTitle className="text-xl font-bold">
                  {service.service_name}
                </DialogTitle>
                <DialogDescription className="text-gray-600 text-center dark:text-gray-300">
                  {service.service_description}
                </DialogDescription>
              </div>
            </DialogHeader>
        }
        
        <DialogFooter className=" flex justify-center items-center w-full">
          <DialogClose
            className=" flex justify-center items-center w-full"
            asChild
          >
            <Button
              onClick={() => dispatch(setOpenShowDialoge(false))}
              type="button"
              variant="secondary"
              className="cursor-pointer bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80"
            >
              {lang === 'fr' ? 'Fermer' : 'إغلاق'}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
