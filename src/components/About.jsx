import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <ParallaxTilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      scale={1.05}
      transitionSpeed={450}
      className="xs:w-[250px] w-full"
    >
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <div className="text-white text-[20px] text-center font-bold">
            {title}
          </div>
        </div>
      </motion.div> 
    </ParallaxTilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          <a href="#about">Professional Overview</a>
        </h2>
      </motion.div>

      {/* Detailed Introduction */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 space-y-6"
      >
        <p className="text-secondary text-[18px] leading-[30px]">
          I'm a passionate <span className="text-white font-semibold">Computer Science graduate</span> with 
          <span className="text-white font-semibold"> over 3 years of professional experience</span> in full-stack 
          development. As the founder of <span className="text-[#915eff] font-semibold">Hosaina Tech Solutions</span>, 
          I've led numerous projects from concept to deployment, delivering robust and scalable solutions.
        </p>

        <p className="text-secondary text-[18px] leading-[30px]">
          My expertise spans the entire development lifecycle, from designing intuitive user interfaces with 
          modern frontend technologies to building secure and efficient backend systems. I specialize in 
          creating applications that not only meet technical requirements but also drive business growth 
          and user engagement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Technical Leadership</h3>
            <ul className="text-secondary text-[16px] space-y-2">
              <li>• Project architecture and system design</li>
              <li>• Team mentoring and code reviews</li>
              <li>• Agile development methodologies</li>
              <li>• Client consultation and requirements analysis</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Business Impact</h3>
            <ul className="text-secondary text-[16px] space-y-2">
              <li>• 50+ successful project deliveries</li>
              <li>• 100% client satisfaction rate</li>
              <li>• Scalable solutions supporting 10k+ users</li>
              <li>• Reduced development costs by 30% for clients</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 mt-8">
          <h3 className="text-white text-xl font-semibold mb-4">Current Focus</h3>
          <p className="text-secondary text-[16px] leading-[28px]">
            Currently, I'm focused on <span className="text-white">enterprise-level application development</span> and 
            <span className="text-white"> mentoring aspiring developers</span> through Hosaina Tech Solutions. 
            I'm passionate about leveraging technology to solve complex business challenges and create 
            meaningful digital experiences.
          </p>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="mt-16">
        <motion.div variants={textVariant()}>
          <h3 className={styles.sectionSubText}>What I Offer</h3>
        </motion.div>
        
        <div className="mt-8 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")