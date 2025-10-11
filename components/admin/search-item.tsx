import { ArrowRight, Icon, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function SearchItem({
  link,
  text,
  icon: Icon,
}: {
  link: string;
  text: string;
  icon: LucideIcon;
}): React.ReactNode {
  return (
    <Link href={link} className="flex justify-between items-center p-1.5">
      <div className="flex gap-2 items-center">
        <Icon size={28} className="text-[#061f46]/75 dark:text-white" />
        <p className="font-semibold dark:text-white text-[#061f46]/75 text-lg">
          {text}
        </p>
      </div>
      <div>
        <ArrowRight size={24} className="text-[#061f46]/75 dark:text-white" />
      </div>
    </Link>
  );
}
