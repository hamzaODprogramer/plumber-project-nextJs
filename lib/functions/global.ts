import { useEffect, useState } from 'react';

export const useAnimatedNumber = ({targetNumber, duration = 3000}:{targetNumber:number,duration:number}) => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const startAnimation = () => {
        setIsAnimating(true);
        const startTime = Date.now();
        const startValue = 0;
        
        function update() {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(startValue + (targetNumber - startValue) * easedProgress);
            
            setCurrentNumber(currentValue);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                setIsAnimating(false);
            }
        }
        
        requestAnimationFrame(update);
    };
    
    return { currentNumber, isAnimating, startAnimation };
}

export function CheckingDirection(setIsRTL:any){
    useEffect(() => {
        const checkRTL = () => {
            const htmlDir = document.documentElement.dir;
            const bodyDir = document.body.dir;
            const computedDir = window.getComputedStyle(document.documentElement).direction;
            
            const isRTLDetected = htmlDir === "rtl" || bodyDir === "rtl" || computedDir === "rtl";
            setIsRTL(isRTLDetected);
        };

        checkRTL();
        
        const timeoutId = setTimeout(checkRTL, 100);
        
        const observer = new MutationObserver(checkRTL);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['dir']
        });
        
        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, [])
}

export const useDarkMode = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        // Get initial mode from localStorage
        const storedMode = localStorage.getItem("mode");
        if (!storedMode) {
            localStorage.setItem('mode', 'light');
            setMode('light');
        } else {
            setMode(storedMode as 'light' | 'dark');
        }

        if (storedMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        
        setMode(newMode);
        localStorage.setItem('mode', newMode);
        
        if (newMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        return newMode;
    };

    return {
        mode,
        toggleMode
    };
};