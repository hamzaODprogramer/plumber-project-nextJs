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
import { Eye, Pen, Trash } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setOpenUpdateDialoge,
  setOpenDeleteDialoge,
  setOpenShowDialoge,
} from '@/lib/store/slicer';
import DeleteService from '@/components/admin/services/delete-service';
import ShowService from '@/components/admin/services/show-service';

export default function AdminService(): React.ReactNode {
  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

  const dispatch = useDispatch();

  return (
    <AdminPage addButton title="Services" titleTable="Liste des Services" table>
      <UpdateService />
      <DeleteService />
      <ShowService />
      <Table>
        <TableHeader className="bg-[#061f46]">
          <TableRow className="*:p-3 *:pl-2 *:text-base *:text-white">
            <TableHead className={isRTL ? 'text-start' : ''}>
              Nom de services
            </TableHead>
            <TableHead className={isRTL ? 'text-start' : ''}>
              Description
            </TableHead>
            <TableHead className={isRTL ? 'text-start' : ''}>Icon</TableHead>
            <TableHead className={isRTL ? 'text-start' : ''}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="*:p-3 *:h-12 *:dark:text-white">
          {[
            { name: 'INV001', desc: 'Paid', icon: 'Test' },
            { name: 'INV001', desc: 'Paid', icon: 'Test' },
            { name: 'INV001', desc: 'Paid', icon: 'Test' },
            { name: 'INV001', desc: 'Paid', icon: 'Test' },
            { name: 'INV001', desc: 'Paid', icon: 'Test' },
            { name: 'INV001', desc: 'Paid', icon: 'Test' },
            { name: 'INV001', desc: 'Paid', icon: 'Test' },
            { name: 'INV001', desc: 'Paid', icon: 'Test' },
          ].map((d, idx) => {
            return (
              <TableRow
                key={idx}
                className={` ${idx % 2 == 0 ? 'bg-[#061f46]/5' : ''}`}
              >
                {Object.values(d).map((value, id) => {
                  return (
                    <TableCell
                      key={id}
                      className={`${id == 0 && 'font-medium'}`}
                    >
                      {String(value) ?? ''}
                    </TableCell>
                  );
                })}
                {
                  <TableCell className="flex items-center gap-3">
                    <div className="p-1.5 bg-black/10 dark:bg-white/10 cursor-pointer hover:bg-black/15 dark:hover:bg-white/15">
                      <Eye
                        onClick={() => dispatch(setOpenShowDialoge(true))}
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
                        onClick={() => dispatch(setOpenDeleteDialoge(true))}
                        className="text-[#061f46]/80 dark:text-white"
                        size={23}
                      />
                    </div>
                  </TableCell>
                }
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </AdminPage>
  );
}
