import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        // Mouse move handler
        const handleMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: 'power2.out'
            });

            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
        };

        // Hover handlers for interactive elements
        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 2.5,
                backgroundColor: 'rgba(231, 211, 147, 0.2)',
                duration: 0.3,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: 'rgba(231, 211, 147, 0.1)',
                duration: 0.3,
            });
        };

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);

        const interactiveElements = document.querySelectorAll('a, button, .cursor-hover');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="custom-cursor"
                style={{
                    position: 'fixed',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '2px solid rgba(231, 211, 147, 0.5)',
                    backgroundColor: 'rgba(231, 211, 147, 0.1)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)',
                    mixBlendMode: 'difference',
                    transition: 'width 0.3s, height 0.3s',
                }}
            />
            <div
                ref={cursorDotRef}
                className="cursor-dot"
                style={{
                    position: 'fixed',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#e7d393',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default CustomCursor;
