import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const vidRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "chars, words" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.07,
    });

    gsap.from(paragraphSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.7,
    });

    // Add glow effect to title
    gsap.to(".title", {
      filter: "drop-shadow(0 0 30px rgba(231, 211, 147, 0.5))",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Floating animation for leaves
    gsap.to(".left-leaf", {
      y: "+=20",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".right-leaf", {
      y: "+=25",
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 0.5
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0
      )
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        0
      );

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    // video animation
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    vidRef.current.onloadedmetadata = () => {
      tl.to(vidRef.current, {
        currentTime: vidRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section className="noisy" id="hero">
        <h1 className="title">VELVET</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="Left Leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right Leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Bold. Smooth. Unforgettable.</p>
              <p className="subtitle">
                Experience the art of mixology in every glass
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is crafted with precision and passion,
                using only the finest ingredients to create an unforgettable
                experience that delights your senses.
              </p>
              <a href="#cocktails" className="cursor-hover inline-block hover:text-yellow transition-colors">
                Explore Our Menu →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 pointer-events-none" />
        <video
          ref={vidRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
