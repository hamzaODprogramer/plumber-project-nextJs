import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';
import { Check, Toilet } from 'lucide-react';
import { JSX } from 'react';
import { useSelector } from 'react-redux';

export default function ServiceCard({ icon }: service_cardPros): JSX.Element {
  const lang = useSelector((state: RootState) => state.admin.lang) as keyof typeof translations;

  return (
    <div className="w-72 max-h-[486px] min-h-[486px] bg-blue-50 p-7">
      {icon}
      <p className="text-[#09213c] capitalize font-bold text-2xl mt-3">
        Réparation de tuyaux de toilettes
      </p>
      <p className="mt-6 text-md text-black/60 font-semibold">
        {translations[lang].ServiceCard_Description}
      </p>
      <div className="mt-6 space-y-3 *:flex *:items-center *:gap-4 *:font-semibold *:text-[18px] *:text-[#184d88]">
        <div>
          <Check size={18} color="green" strokeWidth={5} />
          <p>{translations[lang].ServiceCard_Point_1}</p>
        </div>
        <div>
          <Check size={18} color="green" strokeWidth={5} />
          <p>{translations[lang].ServiceCard_Point_2}</p>
        </div>
        <div>
          <Check size={18} color="green" strokeWidth={5} />
          <p>{translations[lang].ServiceCard_Point_3}</p>
        </div>
      </div>
    </div>
  );
}
