'use client';
import AdminPage from '@/components/admin/admin-page';
import ImageItem from '@/components/admin/gallery/image-item';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckingDirection } from '@/lib/functions/global';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function AdminGallery(): React.ReactNode {
  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

  const lang = useSelector((state:RootState) => state.admin.lang) as 'fr' | 'ar'; 

  const imagePaths = [
    '/img/about-1.jpg',
    '/img/about-2.jpg',
    '/img/carousel-1.jpg',
    '/img/carousel-2.jpg',
    '/img/service-1.jpg',
    '/img/service-2.jpg',
    '/img/service-2.jpg',
  ];
  return (
    <AdminPage title={translations[lang].AdminGallery_Page_Title} table titleTable={translations[lang].AdminGallery_Table_Title}>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <ImageItem src="/img/about-1.jpg" />
        <ImageItem src="/img/about-2.jpg" />
        <ImageItem src="/img/carousel-1.jpg" />
        <ImageItem src="/img/carousel-2.jpg" />
        <ImageItem src="/img/service-1.jpg" />
        <ImageItem src="/img/service-2.jpg" />
      </div>
    </AdminPage>
  );
}
