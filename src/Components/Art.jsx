import { featureLists, goodLists } from "../../constants";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top';

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true
      }
    })
    maskTimeline
      .to('.will-fade', {
        opacity: 0,
        stagger: 0.2,
        ease: 'power1.inOut'
      })
      .to('.masked-img', {
        scale: 1.3,
        maskPosition: 'center',
        maskSize: '400%',
        duration: 1,
        ease: 'power1.inOut',
        filter: 'drop-shadow(0 0 40px rgba(231, 211, 147, 0.6))'
      })
      .to('#masked-content', {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
      })

    // Pulsing animation for checkmarks
    gsap.to('.check-icon', {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.2
    });
  })
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade glow-yellow">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" className="check-icon" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img src="/images/under-img.jpg" alt="ctl"
              className="abs-center masked-img size-full object-contain"
            />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" className="check-icon" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection </h2>
          <div className="masked-content" id="masked-content">
            <h3 className="bg-gradient-to-r from-yellow via-white to-yellow bg-clip-text text-transparent">Made with Craft, Poured with Passion</h3>
            <p>This isn't just a drink. It's a carefully crefted moment made just for you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;

