import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: 1,
            }
        })

        parallaxTimeline.from('#c-left-leaf', {
            x: 100, y: 100
        })
            .from('#c-right-leaf', {
                x: -100, y: -100
            })

        // Animate cocktail items on scroll - using fromTo to ensure they become visible
        gsap.fromTo('.cocktail-item',
            {
                opacity: 0,
                y: 30,
            },
            {
                scrollTrigger: {
                    trigger: '.list',
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out'
            }
        );
    })

    return (
        <section id='cocktails' className='noisy'>
            <img src="/images/cocktail-left-leaf.png" alt="Left Leaf" id='c-left-leaf' />
            <img src="/images/cocktail-right-leaf.png" alt="Right Leaf" id='c-right-leaf' />

            <div className="list">
                <div className="popular">
                    <h2>Signature Cocktails</h2>

                    <ul>
                        {cocktailLists.map(({ name, country, price, detail }) => (
                            <li key={name} className="cocktail-item cursor-hover group hover:bg-yellow/5 hover:scale-105 transition-all duration-300 p-4 rounded-lg">
                                <div className="md:me-28">
                                    <h3 className="group-hover:scale-110 transition-transform">{name}</h3>
                                    <p>{country} | {detail} </p>
                                </div>
                                <span className="group-hover:text-yellow transition-colors">{price} </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Premium Mocktails</h2>

                    <ul>
                        {mockTailLists.map(({ name, country, price, detail }) => (
                            <li key={name} className="cocktail-item cursor-hover group hover:bg-yellow/5 hover:scale-105 transition-all duration-300 p-4 rounded-lg">
                                <div className="md:me-28">
                                    <h3 className="group-hover:scale-110 transition-transform">{name}</h3>
                                    <p>{country} | {detail} </p>
                                </div>
                                <span className="group-hover:text-yellow transition-colors">{price} </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails