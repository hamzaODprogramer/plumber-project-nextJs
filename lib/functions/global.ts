import { useState } from 'react';

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
