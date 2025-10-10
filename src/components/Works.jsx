// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { styles } from "../styles";
// import { motion } from "framer-motion";
// import ParallaxTilt from "react-parallax-tilt";

// const ProjectCard = ({
//   name,
//   live_demo,
//   description,
//   image,
//   source_code_link,
//   tags,
//   index,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5 * index, 0.75)}>
//       <ParallaxTilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="w-full p-5 sm:w-[360px] ] rounded-2xl bg-tertiary"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover rounded-2xl"
//           />
//           <div className="absolute inset-0 flex justify-end m-3 cadr-img_hover gap-2">
//           <div
//               className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//               onClick={() => window.open(live_demo, "_blank")}
//             >
//               <img
//                 src={github}
//                 alt="github"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//             <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             onClick={() => window.open(source_code_link, "_blank")}
//             >
//               <img
//                 src={github}
//                 alt="github"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>

//             {/* // for Live demo purpose (show case) */}


//           </div>
//         </div>
//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px]">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag, index) => (
//             <span
//               key={`tag-${index}`}
//               className={`${tag.color} px-2 py-1 rounded-md text-[12px]`}
//             >
//               {tag.name}
//             </span>
//           ))}
//         </div>
//       </ParallaxTilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>My Work</p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
//       </motion.div>
//       <div className="w-full flex">
//         <motion.p
//           variants={fadeIn("", "", 0 - 1, 1)}
//           className="mt-3 text-secondary text-[21px] max-w-3xl leading-[30px]"
//         >
//           Welcome to my project showcase, where innovation meets seamless
//           execution. As a proficient full-stack developer specializing in the
//           MERN stack (MongoDB, Express.js, React, Node.js), I am dedicated to
//           building dynamic, responsive, and scalable web applications that solve
//           real-world problems. I have worked on a variety of projects, ranging
//           from frontend development to backend development development. Here are
//           some of the projects I have worked on. You can find more of my
//           projects on my GitHub and Livedemos in it.
//         </motion.p>
//       </div>

//       <div className="mt-20 flex flex-wrap gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "work");



// import { github, externalLink } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";

const ProjectCard = ({
  name,
  live_demo,
  description,
  image,
  source_code_link,
  tags,
  index,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="group"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#915eff] hover:shadow-2xl hover:shadow-[#915eff]/10">
        {/* Project Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay with Links */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-3">
            {live_demo && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-green-600 hover:bg-green-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg transition-colors duration-300"
                onClick={() => window.open(live_demo, "_blank")}
                title="Live Demo"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            )}
            
            {source_code_link && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-900 hover:bg-gray-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg transition-colors duration-300"
                onClick={() => window.open(source_code_link, "_blank")}
                title="Source Code"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.div>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#915eff] transition-colors duration-300">
            {name}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <span
                key={`tag-${tagIndex}`}
                className={`${tag.color} px-3 py-1 rounded-full text-xs font-medium bg-gray-700/50 backdrop-blur-sm border border-gray-600`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()} className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#915eff]"></div>
          <p className={`${styles.sectionSubText} font-semibold`}>PORTFOLIO</p>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#915eff]"></div>
        </div>
        <h2 className={`${styles.sectionHeadText} mb-6`}>
          Featured <span className="text-[#025eff]">Projects</span>
        </h2>
        
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            A curated selection of projects demonstrating my expertise in full-stack development, 
            system architecture, and modern web technologies. Each project represents a unique 
            challenge solved through clean code, scalable design, and user-centric development.
          </p>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={fadeIn("", "", 0.3, 1)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="text-center mt-16 pt-8 border-t border-gray-800"
      >
        <p className="text-gray-400 text-lg mb-6">
          Interested in seeing more of my work?
        </p>
        <motion.a
          href="https://github.com/MadisoMelese"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-[#025eff] hover:bg-[#004ecc] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Full GitHub Portfolio
        </motion.a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");