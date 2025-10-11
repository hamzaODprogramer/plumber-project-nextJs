'use client';
import Footer from '@/components/public/footer';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import { useSelector } from 'react-redux';

export default function GalleryPage(): React.ReactNode {
  const [photos, setPhotos] = useState<
    Array<{ src: string; width: number; height: number }>
  >([]);
  const [clientWidth, setClientWidth] = useState(0);
  const imagePaths = [
    '/img/about-1.jpg',
    '/img/about-2.jpg',
    '/img/carousel-1.jpg',
    '/img/carousel-2.jpg',
    '/img/service-1.jpg',
    '/img/service-2.jpg',
    '/img/service-2.jpg',
  ];

  useEffect(() => {
    setClientWidth(document.body.clientWidth);

    const handleResize = () => {
      setClientWidth(document.body.clientWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  const lang = useSelector((state: RootState) => state.admin.lang) as keyof typeof translations;

  useEffect(() => {
    const loadImages = async () => {
      const loadedPhotos = await Promise.all(
        imagePaths.map((src) => {
          return new Promise<{ src: string; width: number; height: number }>(
            (resolve) => {
              const img = new window.Image();
              img.onload = () => {
                resolve({
                  src,
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                });
              };
              img.src = src;
            },
          );
        }),
      );
      setPhotos(loadedPhotos);
    };

    loadImages();
  }, []);

  return (
    <>
      <div className="relative h-[300px] sm:h-78 w-full mt-22 bg-red-600">
        <Image className="object-cover" fill src="/img/bg.jpg" alt="bg" />
        <div className="bg-black/60 px-10 sm:px-20 inset-0 flex flex-col justify-center absolute">
          <p className="text-white font-bold text-5xl capitalize">{translations[lang]['GalleryPage_Title']}</p>
          <p className="mt-4 text-white/90 w-full md:w-1/2 text-xl ">
            {translations[lang]['GalleryPage_Description']}
          </p>
        </div>
      </div>
      <div className="w-full px-10 sm:px-20 mt-20">
        <p className="text-[#ff4917] font-bold uppercase text-md">
          {translations[lang]['GalleryPage_Section_Label']}
        </p>
        <h1 className="text-4xl mb-10 text-blue-950 mt-2 font-bold capitalize">
          {translations[lang]['GalleryPage_Section_Header']}
        </h1>

        {photos.length > 0 && (
          <MasonryPhotoAlbum
            columns={clientWidth > 800 ? 4 : 2}
            photos={photos}
          />
        )}
      </div>
      <Footer className="mt-20" />
    </>
  );
}
