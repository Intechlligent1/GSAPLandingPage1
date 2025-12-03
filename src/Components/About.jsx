import gsap from 'gsap';
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const About = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create('#about h2', {
			type: 'words'
		})

		const scrollTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#about',
				start: 'top center'
			}
		})

		scrollTimeline
			.from(titleSplit.words, {
				opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
			})
			.from('.top-grid div, .bottom-grid div', {
				opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
			}, '-=0.5')

		// Add hover effect for images
		const imageCards = document.querySelectorAll('.about-image-card');
		imageCards.forEach(card => {
			card.addEventListener('mouseenter', () => {
				gsap.to(card.querySelector('img'), {
					scale: 1.1,
					duration: 0.5,
					ease: 'power2.out'
				});
			});

			card.addEventListener('mouseleave', () => {
				gsap.to(card.querySelector('img'), {
					scale: 1,
					duration: 0.5,
					ease: 'power2.out'
				});
			});
		});
	})

	return (
		<div id="about">
			<div className="mb-16 md:px-0 px-5">
				<div className="content">
					<div className="md:col-span-8">
						<p className="badge hover:scale-110 transition-transform cursor-hover">Premium Mixology</p>
						<h2>
							Where every detail matters <span className="text-white">-</span>
							from the first pour to the final garnish
						</h2>
					</div>

					<div className="sub-content">
						<p>
							Every drink we craft is a reflection of our dedication to excellence — from selecting premium spirits to perfecting each garnish. This attention to detail transforms a simple cocktail into an extraordinary experience.
						</p>

						<div>
							<p className="md:text-3xl text-xl font-bold">
								<span>4.9</span>/5
							</p>
							<p className="text-sm text-white-100">
								Trusted by 15,000+ satisfied guests
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="top-grid">
				<div className="md:col-span-3 about-image-card cursor-hover group">
					<div className="noisy" />
					<img src="/images/abt1.png" alt="grid-img-1" className="transition-transform duration-500" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>

				<div className="md:col-span-6 about-image-card cursor-hover group">
					<div className="noisy" />
					<img src="/images/abt2.png" alt="grid-img-2" className="transition-transform duration-500" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>

				<div className="md:col-span-3 about-image-card cursor-hover group">
					<div className="noisy" />
					<img src="/images/abt5.png" alt="grid-img-5" className="transition-transform duration-500" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>
			</div>

			<div className="bottom-grid">
				<div className="md:col-span-8 about-image-card cursor-hover group">
					<div className="noisy" />
					<img src="/images/abt3.png" alt="grid-img-3" className="transition-transform duration-500" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>

				<div className="md:col-span-4 about-image-card cursor-hover group">
					<div className="noisy" />
					<img src="/images/abt4.png" alt="grid-img-4" className="transition-transform duration-500" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>
			</div>

		</div>
	)
}
export default About