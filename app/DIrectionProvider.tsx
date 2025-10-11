'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store/store'; // adjust path as needed

export function DirectionProvider({ children }: { children: React.ReactNode }) {
  const lang = useSelector((state: RootState) => state.admin.lang);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return <>{children}</>;
}