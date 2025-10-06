import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {  Hero, Navbar, About, Tech, Experience, Works, Feedbacks, Footer,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas} from './components'
const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary text-white">
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App

