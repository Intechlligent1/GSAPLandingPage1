import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

import { navLinks } from '../../constants/index.js'

const Navbar = () => {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: 'nav',
				start: 'top top',
				end: '+=100',
				scrub: 1
			}
		});

		navTween.to('nav', {
			backgroundColor: 'rgba(0, 0, 0, 0.7)',
			backdropFilter: 'blur(10px)',
			borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
			duration: 0.3,
			ease: 'power1.inOut'
		});
	})

	return (
		<nav className="transition-all duration-300">
			<div>
				<a href="#home" className="flex items-center gap-2 cursor-hover">
					<img src="/images/logo.png" alt="logo" className="hover:scale-110 transition-transform" />
					<p>Velvet Pour</p>
				</a>

				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`} className="cursor-hover relative group">
								{link.title}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow transition-all duration-300 group-hover:w-full"></span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
export default Navbar