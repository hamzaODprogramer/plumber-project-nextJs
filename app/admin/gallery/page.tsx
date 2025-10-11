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
import { Eye, Pen, Trash } from 'lucide-react';
import { useState } from 'react';

export default function AdminGallery(): React.ReactNode {
  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

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
    <AdminPage title="Gallerie" table titleTable="Liste des Images">
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
