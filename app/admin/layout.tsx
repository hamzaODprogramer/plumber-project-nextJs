'use client';
import AdminHeader from '@/components/admin/header-admin';
import SideBar from '@/components/admin/side-bar';
import { RootState } from '@/lib/store/store';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import Loading from './loading';

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const sideBarVisibility = useSelector(
    (action: RootState) => action.admin.sideBarVisibility,
  );

  return (
    <div className="flex h-screen bg-black/5 dark:bg-gray-700">
      {sideBarVisibility && <SideBar />}
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 overflow-auto dark:bg-gray-700">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
