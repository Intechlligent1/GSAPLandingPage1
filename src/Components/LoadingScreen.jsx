import { useState, useEffect } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            tl.to('.loading-progress', {
                opacity: 0,
                duration: 0.3,
            })
                .to('.loading-title', {
                    y: -50,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.in',
                }, '-=0.2')
                .to('.loading-screen', {
                    yPercent: -100,
                    duration: 1,
                    ease: 'power4.inOut',
                }, '-=0.3');
        }
    }, [progress, onComplete]);

    return (
        <div className="loading-screen fixed inset-0 z-[10000] bg-black flex-center flex-col">
            <div className="loading-title font-modern-negra text-6xl md:text-8xl text-yellow mb-8">
                Velvet Pour
            </div>
            <div className="loading-progress text-white-100 text-xl">
                {Math.floor(progress)}%
            </div>
        </div>
    );
};

export default LoadingScreen;
