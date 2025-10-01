import { useAnimatedNumber } from "@/lib/functions/global";
import { Calendar, ShieldAlert, Wrench } from "lucide-react";
import Image from "next/image";
import { JSX, useEffect, useRef, useState } from "react";

export default function Numbers(): JSX.Element {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    
    const { currentNumber: yearsCount, startAnimation: startYears } = useAnimatedNumber({targetNumber: 10, duration: 3000});
    const { currentNumber: projectsCount, startAnimation: startProjects } = useAnimatedNumber({targetNumber: 200, duration: 3000});
    const { currentNumber: urgenceCount, startAnimation: startUrgence } = useAnimatedNumber({targetNumber: 100, duration: 3000});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        startYears();
                        startProjects();
                        startUrgence();
                        setHasAnimated(true); 
                    }
                });
            },
            {
                threshold: 0.5, 
                rootMargin: '0px 0px -50px 0px' 
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated, startYears, startProjects, startUrgence]);

    return (
        <div ref={sectionRef} className="relative h-[500px] sm:h-48 w-full mt-24 bg-red-600">
            <Image className="object-cover" fill src="/img/bg.jpg" alt="bg" />
            <div className="bg-black/60 inset-0 absolute"></div>
            <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-around">
                <div className="flex flex-col items-center gap-2">
                    <Calendar strokeWidth={2} size={38} color="white" />
                    <p className="font-bold text-white text-3xl">{yearsCount}</p>
                    <p className="capitalize text-white/90 text-md font-semibold">Des années d'expérience</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Wrench strokeWidth={2} size={38} color="white" />
                    <p className="font-bold text-white text-3xl">{projectsCount}</p>
                    <p className="capitalize text-white/90 text-md font-semibold">Projets terminés</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <ShieldAlert strokeWidth={2} size={38} color="white" />
                    <p className="font-bold text-white text-3xl">{urgenceCount}</p>
                    <p className="capitalize text-white/90 text-md font-semibold">Appels d'urgence résolus</p>
                </div>
            </div>
        </div>
    );
}