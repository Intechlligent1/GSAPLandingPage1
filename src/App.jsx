import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cocktails from './Components/Cocktails'
import About from './Components/About'
import Art from './Components/Art'

gsap.registerPlugin(ScrollTrigger, SplitText)


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      {/* <div className='h-dvh bg-black' /> */}
    </main>
  )
}

export default App