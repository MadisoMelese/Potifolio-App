import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ComputersCanvas } from './canvas'
import { styles } from '../styles'
const Hero = () => {
  return (
    <section className="relative z-0 w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40  rounded-full bg-gradient-to-b from-[#915eff]"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#025eff]">Madiso&nbsp;Melese</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a Full Stack Developer. <br className='sm:block hidden' />
          I build web applications and websites. I'm passionate about learning new technologies and building cool stuff. I'm currently looking for new opportunities. 
          </p>
        </div>
      </div>
     <ComputersCanvas />  

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
     <a href="#about" >
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
        <motion.div
        animate={{y: [0, 24, 0]}}
        transition={{repeat: Infinity, duration: 1.5,repeatType: 'loop'}}
        className='w-3 h-3 mb-1 bg-secondary rounded-full'
        />
      </div>
     </a>
      </div>
    </section>
  )
}

export default Hero