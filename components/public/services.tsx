import { JSX, useEffect, useState } from 'react';
import ServiceCard from './service-card';
import { Droplet, ShowerHead, Toilet, Waves } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { CheckingDirection } from '@/lib/functions/global';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import translations from '@/lib/translation/main';

export default function Services(): JSX.Element {
  const [isRTL, setIsRTL] = useState<boolean>(false);
  CheckingDirection(setIsRTL);

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: 'snap',
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: { perView: 1.5, spacing: 15 },
        },
        '(min-width: 768px)': {
          slides: { perView: 2, spacing: 20 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 2.5, spacing: 20 },
        },
        '(min-width: 1280px)': {
          slides: { perView: 3, spacing: 24 },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

    const lang = useSelector((state: RootState) => state.admin.lang) as keyof typeof translations;
  

  return (
    <div className="mt-12 md:mt-24 w-full flex flex-col lg:flex-row overflow-hidden">
      <div className="bg-[#184d88] hidden lg:flex items-center justify-center h-[600px] w-80 flex-shrink-0">
        <h1 className="text-white m-0 p-0 text-center text-6xl font-bold capitalize -rotate-90">
          {translations[lang]['Services_Experience']}
        </h1>
      </div>
      <div className="px-6 md:px-12 lg:ml-10 flex-1 overflow-hidden">
        <p className="text-[#ff4917] font-bold uppercase text-sm md:text-md">
          {translations[lang]['Services_Nos_services']}
        </p>
        <h1 className="text-2xl md:text-4xl text-blue-950 mt-2 font-bold capitalize">
          {translations[lang]['Services_Decouvrez_nos_services']}
        </h1>
        <div className={`mt-8 ${isRTL && 'flex gap-1'} md:mt-11 w-full`}>
          <div ref={ref} className="keen-slider">
            <div className="keen-slider__slide">
              <ServiceCard
                icon={
                  <Toilet
                    className="p-4 border-5 border-white"
                    size={74}
                    fill="#184d88"
                    color="#184d88"
                  />
                }
              />
            </div>
            <div className="keen-slider__slide">
              <ServiceCard
                icon={
                  <Droplet
                    className="p-4 border-5 border-white"
                    size={74}
                    fill="#184d88"
                    color="#184d88"
                  />
                }
              />
            </div>
            <div className="keen-slider__slide">
              <ServiceCard
                icon={
                  <Waves
                    className="p-4 border-5 border-white"
                    size={74}
                    fill="#184d88"
                    color="#184d88"
                  />
                }
              />
            </div>
            <div className="keen-slider__slide">
              <ServiceCard
                icon={
                  <ShowerHead
                    className="p-4 border-5 border-white"
                    size={74}
                    fill="#184d88"
                    color="#184d88"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
