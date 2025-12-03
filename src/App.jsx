import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cocktails from './Components/Cocktails'
import About from './Components/About'
import Art from './Components/Art'
import SmoothScroll from './Components/SmoothScroll'
import CustomCursor from './Components/CustomCursor'
import LoadingScreen from './Components/LoadingScreen'

gsap.registerPlugin(ScrollTrigger, SplitText)


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <SmoothScroll>
        <CustomCursor />
        <main>
          <Navbar />
          <Hero />
          <Cocktails />
          <About />
          <Art />
        </main>
      </SmoothScroll>
    </>
  )
}

export default App