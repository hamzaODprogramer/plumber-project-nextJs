import { Save } from 'lucide-react';
import React from 'react';

export default function ContactItem({
  icon: Icon,
  type,
  placeholder,
  className,
  fill,
}: ContactItemProps): React.ReactNode {
  return (
    <div className="bg-black/10 dark:bg-white/10 w-full p-3 flex gap-2 items-stretch">
      <div className="p-2 bg-white dark:bg-gray-800 w-fit flex items-center">
        <Icon
          size={27}
          className="text-gray-800 "
          fill={fill ? '#061f46' : 'white'}
        />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`flex-1 focus:ring-3 border-1 border-black/20 dark:border-white/20 transition-all duration-500 focus:ring-blue-300 bg-white dark:bg-gray-800 dark:text-white p-2 font-normal outline-none ${className}`}
      />
      <div className="p-2 cursor-pointer hover:bg-[#061f46]/85 w-fit flex items-center bg-[#061f46] dark:bg-white/10">
        <Save size={27} className="text-white" />
      </div>
    </div>
  );
}
