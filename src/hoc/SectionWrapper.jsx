// import { motion } from 'framer-motion'
// import { styles } from '../styles'
// import { staggerContainer } from '../utils/motion'
// import { Component } from 'react'
// const SectionWrapper = (Component, idName) => function HOC() {
//   return (
//     <motion.section
//     variants={staggerContainer()}
//     initial="hidden"
//     whileInView="show"
//     viewport={{ once: true, amount: 0.25 }}
//     className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//     >
//       <span className="hash-span" id={idName}>
//         &nbsp;
//       </span>
//       <Component />
//     </motion.section>
//   )

// }

// export default SectionWrapper



import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => function HOC() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }} // Reduced amount for better mobile detection
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 min-h-screen`} // Added min-h-screen
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  )
}

export default SectionWrapper