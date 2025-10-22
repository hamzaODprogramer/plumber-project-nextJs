'use client';
import AdminPage from '@/components/admin/admin-page';
import UpdateService from '@/components/admin/services/update-service';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckingDirection } from '@/lib/functions/global';
import { Eye, Pen, Trash, Inbox } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOpenUpdateDialoge,
  setOpenDeleteDialoge,
  setOpenShowDialoge,
  setCurrentId,
} from '@/lib/store/slicer';
import DeleteService from '@/components/admin/services/delete-service';
import ShowService from '@/components/admin/services/show-service';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import { getAllServices } from '@/actions/services.actions';
import * as LucideIcons from 'lucide-react';
import TableSkeleton from '@/components/admin/table-loading';

export default function AdminService(): React.ReactNode {
  // Dialog Apparence Code
  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);
  const dispatch = useDispatch();
  const lang = useSelector((state:RootState) => state.admin.lang) as 'fr' | 'ar';
  const reloadData = useSelector((state:RootState) => state.admin.reloadData)


  // Loading Data Section
  const [services,setServices] = useState<serviceDataProps[]>([])
  const [noData,setNoData] = useState<boolean>(false)
  const [loading,setLoading] = useState<boolean>(true)
  useEffect(()=>{
    setLoading(true)
    const fetchServices = async () => {
      const data = await getAllServices();
      setLoading(false)
      setServices(data);
      setNoData(data.length === 0);
      
    };
    fetchServices();
  },[reloadData])

  return (
    <AdminPage addButton title={translations[lang].AdminService_Page_Title} titleTable={translations[lang].AdminService_Table_Title} table>
      <UpdateService />
      <DeleteService />
      <ShowService />
      <Table>
        <TableHeader className="bg-[#061f46]">
          <TableRow className="*:p-3 *:pl-2 *:text-base *:text-white">
            <TableHead className={isRTL ? 'text-start' : ''}>
              {translations[lang].AdminService_Table_Header_Name}
            </TableHead>
            <TableHead className={isRTL ? 'text-start' : ''}>
              {translations[lang].AdminService_Table_Header_Description}
            </TableHead>
            <TableHead className={isRTL ? 'text-start' : ''}>{translations[lang].AdminService_Table_Header_Icon}</TableHead>
            <TableHead className={isRTL ? 'text-start' : ''}>{translations[lang].AdminService_Table_Header_Action}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="*:p-3 *:h-12 *:dark:text-white">
          {loading && <TableSkeleton />}
          {noData && (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                <div className="flex items-center justify-center flex-col gap-2 py-8">
                  <Inbox size={35} className="text-[#061f46]/80" />
                  <p className="text-[#061f46]/80 font-medium">
                    {translations[lang].AdminHeader_NoResults}
                  </p>
                </div>
              </TableCell>
            </TableRow>
          )}
          {!noData && !loading && services.map((data, idx) => {
            const IconComponent = data.service_icon 
              ? (LucideIcons[data.service_icon as keyof typeof LucideIcons] as React.ComponentType<any>)
              : null;
            
            return (
              <TableRow
                key={idx}
                className={` ${idx % 2 == 0 ? 'bg-[#061f46]/5' : ''}`}
              >
                <TableCell className='font-bold'>{data.service_name}</TableCell>
                <TableCell>{data.service_description}</TableCell>
                <TableCell>
                  {IconComponent ? <div className='flex items-center gap-1'>
                    <IconComponent className="w-5 h-5" />
                    {data.service_icon}
                  </div> : (
                    <span className="text-red-500 text-xs">
                      Icon not found: {data.service_icon}
                    </span>
                  )}
                </TableCell>
                <TableCell className="flex items-center gap-3">
                  <div className="p-1.5 bg-black/10 dark:bg-white/10 cursor-pointer hover:bg-black/15 dark:hover:bg-white/15">
                    <Eye
                      onClick={() => {dispatch(setOpenShowDialoge(true))}}
                      className="text-[#061f46]/80 dark:text-white"
                      size={23}
                    />
                  </div>
                  <div
                    onClick={() => dispatch(setOpenUpdateDialoge(true))}
                    className="p-1.5 bg-black/10 dark:bg-white/10 cursor-pointer hover:bg-black/15 dark:hover:bg-white/15"
                  >
                    <Pen
                      className="text-[#061f46]/80 dark:text-white"
                      size={23}
                    />
                  </div>
                  <div className="p-1.5 bg-black/10 dark:bg-white/10 cursor-pointer hover:bg-black/15 dark:hover:bg-white/15">
                    <Trash
                      onClick={() =>{dispatch(setCurrentId(data.service_id)); dispatch(setOpenDeleteDialoge(true))}}
                      className="text-[#061f46]/80 dark:text-white"
                      size={23}
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </AdminPage>
  );
}