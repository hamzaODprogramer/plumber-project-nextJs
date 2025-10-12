"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from '@/lib/functions/global';
import { RootState } from '@/lib/store/store';
import Image from 'next/image';
import { useSelector } from 'react-redux';
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const lang = useSelector((state: RootState) => state.admin.lang) as "fr" | "ar"
    const { changeLanguage } = useTranslation()
    
    return(
    <div className='relative h-screen'>
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild className='absolute top-5 right-5 z-90'>
              <div className="flex items-center absolute top-5 right-5 z-90 cursor-pointer gap-2.5 p-2.5 dark:bg-white/5 bg-white dark:hover:bg-white/10 hover:bg-white/90">
                <Image
                  className="rounded-full"
                  width={27}
                  height={27}
                  src={lang=='fr' ? "/francelg.png" : '/arabiclg.png'}
                  alt="lang"
                />
                <p className="text-black/80 dark:text-white font-semibold">{lang=='fr' ? "français" : "عربية"}</p>
              </div>
            </DropdownMenuTrigger>
          <DropdownMenuContent className="!rounded-none !dark:bg-gray-600 space-y-1 *:cursor-pointer">
            <DropdownMenuItem className={`${lang=='fr' ? 'bg-[#184d88] hover:!bg-[#184d88]' : ''} !rounded-none`} onClick={() => changeLanguage('fr')}>
              <div className="flex items-center gap-2.5  ">
                <Image
                  className="rounded-full"
                  width={18}
                  height={18}
                  src={"/francelg.png"}
                  alt="lang"
                />
                <p className={`${lang=='fr' ? 'text-white' : 'text-black/80'}  dark:text-white  font-semibold`}>
                  francais
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className={`${lang=='ar' ? 'bg-[#184d88] hover:!bg-[#184d88]' : ''} !rounded-none`} onClick={() => changeLanguage('ar')}>
              <div className="flex items-center gap-2.5  ">
                <Image
                  className="rounded-full"
                  width={19}
                  height={19}
                  src="/arabiclg.png"
                  alt="lang"
                />
                <p className={`${lang=='ar' ? 'text-white' : 'text-black/80'}  dark:text-white  font-semibold`}>
                  العربية
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {children}
    </div>
  )
  
}