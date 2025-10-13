import React, { useEffect, useState, useRef } from 'react';
import { Bell, Inbox, Menu, Moon, Search, Sun } from 'lucide-react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { setSideBarVisibility } from '@/lib/store/slicer';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { get_admin_links, search_mapper } from '@/lib/constant/global';
import Link from 'next/link';
import { CheckingDirection, useDarkMode, useTranslation } from '@/lib/functions/global';
import { usePathname } from 'next/navigation';
import NotificationItem from './notification-item';
import { Button } from '../ui/button';
import SearchItem from './search-item';
import translations from '@/lib/translation/main';

export default function AdminHeader(): React.ReactNode {

  const lang = useSelector((state: RootState) => state.admin.lang) as keyof typeof translations;
  const admin_links = get_admin_links(lang as 'fr' | 'ar');
  const { changeLanguage } = useTranslation()

  const sideBarVisibility = useSelector(
    (action: RootState) => action.admin.sideBarVisibility,
  );
  const dispatch = useDispatch();
  const pathname = usePathname();

  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

  // Document Size State
  const [clientWidth, setClientWidth] = useState(0);

  // Search Logic
  const [query, setQuery] = useState<string>('');
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setClientWidth(document.body.clientWidth);

    const handleResize = () => {
      setClientWidth(document.body.clientWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Click outside handler to close search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    if (clientWidth >= 752) {
      dispatch(setSideBarVisibility(!sideBarVisibility));
    }
  };

  // Dark Mode Section
  const { mode, toggleMode } = useDarkMode();

  const filterLinks = () => {
    if (!query.trim()) return admin_links;

    const normalizedQuery = query.toLowerCase().trim();

    const matchingRoutes = search_mapper
      .filter((item) =>
        item.key_words.some((key_word) =>
          key_word.toLowerCase().includes(normalizedQuery),
        ),
      )
      .map((item) => item.route);

    return admin_links.filter((link) => matchingRoutes.includes(link.route));
  };


  return (
    <div className="flex items-center justify-between w-full  py-4 px-3 dark:bg-gray-800 bg-white  border-b border-black/10">
      <div className="flex-1 flex items-center gap-3">
        {clientWidth < 752 ? (
          <Drawer>
            <DrawerTrigger asChild>
              <Menu
                size={48}
                className="p-3 dark:bg-white/5 bg-black/5 cursor-pointer dark:hover:bg-white/10 dark:text-white hover:bg-black/10"
              />
            </DrawerTrigger>
            <DrawerContent className="!rounded-none">
              <DrawerHeader className="hidden">
                <DrawerTitle></DrawerTitle>
              </DrawerHeader>
              <div className="*:uppercase *:pr-5  *:py-4 *:pl-5 *:flex *:items-center *:gap-2 *:text-blue-950 *:font-semibold">
                {admin_links.map((link) => {
                  return (
                    <Link
                      key={link.route}
                      href={link.route}
                      className={`flex items-center gap-2 w-full cursor-pointer px-3 py-2.5 ${pathname == link.route ? 'bg-[#061f46] dark:bg-gray-600' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
                    >
                      <link.icon
                        size={20}
                        className={` ${pathname == link.route ? 'text-white dark:text-white' : 'opacity-85 text-[#061f46] dark:text-white'}`}
                      />
                      <p
                        className={`${pathname == link.route ? 'text-white  opacity-85' : 'text-[#061f46] dark:text-white opacity-85'}  font-semibold`}
                      >
                        {link.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
              <DrawerFooter>
                <DrawerClose></DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
          <Menu
            onClick={handleMenuClick}
            size={48}
            className="p-3 dark:bg-white/5 bg-black/5 cursor-pointer dark:hover:bg-white/10 dark:text-white hover:bg-black/10"
          />
        )}
        <div ref={searchContainerRef} className="relative flex-1">
          <div
            className={`flex flex-row-reverse w-2/4 sm:w-1/4 bg-black/5 dark:bg-white/5 justify-start p-3 gap-2 items-center focus-within:w-7/8 sm:focus-within:w-1/3  transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-100`}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder={translations[lang].AdminHeader_Search_Placeholder}
              className={`flex-1 dark:text-white text-gray-600 font-semibold outline-none w-full bg-transparent `}
            />
            <Search
              size={20}
              className="text-[rgb(6,31,70)] dark:text-white opacity-50"
            />
          </div>

          {query.length > 0 && (
            <div className={`absolute p-2 bg-white border-1 shadow-md shadow-black/30 border-black/20 top-full ${isRTL ? 'right-0' : 'left-0'}  mt-2 w-full sm:w-[50%] dark:bg-gray-600  z-90 rounded-none space-y-1 overflow-hidden`}>
              {filterLinks().map((link, key) => (
                <div
                  key={key}
                  className="bg-black/5 hover:bg-black/15 cursor-pointer p-2 flex flex-col gap-2 space-y-3"
                >
                  <SearchItem
                    link={link.route}
                    text={link.name}
                    icon={link.icon}
                  />
                </div>
              ))}
              {filterLinks().length == 0 && (
                <div className="flex items-center justify-center flex-col gap-2 p-3">
                  <Inbox size={35} className="text-[#061f46]/80" />
                  <p className="text-[#061f46]/80 font-medium">
                    {translations[lang].AdminHeader_NoResults}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5 mr-4 *:cursor-pointer">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Bell
              size={48}
              className="p-3 bg-black/5 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 hover:bg-black/10"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!rounded-none !dark:bg-gray-600 space-y-1 *:cursor-pointer">
            <DropdownMenuItem className="bg-black/5 hover:bg-black/45 !rounded-none">
              <NotificationItem />
            </DropdownMenuItem>
            <DropdownMenuItem className="bg-black/5 hover:bg-black/15 !rounded-none">
              <NotificationItem />
            </DropdownMenuItem>
            <Button
              type="button"
              variant="secondary"
              className="cursor-pointer p-4 w-full bg-[#061f46] text-white rounded-none hover:bg-[#061f46]/80"
            >
              {translations[lang].AdminHeader_ClearNotifications}
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
        {mode === 'dark' ? (
          <Sun
            onClick={toggleMode}
            size={48}
            className="p-3  bg-black/5 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 hover:bg-black/10"
          />
        ) : (
          <Moon
            onClick={toggleMode}
            size={48}
            className="p-3  bg-black/5 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 hover:bg-black/10"
          />
        )}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center cursor-pointer gap-2.5 p-2.5 dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10">
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
      </div>
    </div>
  );
}
