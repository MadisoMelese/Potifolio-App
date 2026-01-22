/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// import React from "react";
// import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 min-h-[280px] flex flex-col justify-center items-center text-center group hover:border-[#915eff] transition-all duration-500">
        <div className="w-20 h-20 bg-gradient-to-br from-[#915eff] to-[#025eff] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain filter brightness-0 invert"
          />
        </div>
        <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {getServiceDescription(title)}
        </p>
      </div>
    </motion.div>
  );
};

const getServiceDescription = (title) => {
  const descriptions = {
    "Web Developer":
      "Building responsive, performant web applications using modern frameworks and best practices.",
    "Frontend Developer":
      "Creating intuitive user interfaces with React, TypeScript, and modern CSS frameworks.",
    "Backend Developer":
      "Developing scalable server-side solutions with Node.js, Python, and cloud technologies.",
    "Full Stack Developer":
      "End-to-end application development with expertise across the entire tech stack.",
  };
  return (
    descriptions[title] ||
    "Professional development services tailored to your needs."
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#915eff] to-[#025eff]"></div>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            Professional Profile
          </h2>
          <div className="flex-1 h-0.5 bg-gradient-to-l from-[#915eff] to-[#025eff]"></div>
        </div>
      </motion.div>

      {/* Executive Summary */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m <span className="text-white font-semibold">Madiso Melese</span>{" "}
            — a passionate
            <span className="text-[#915eff] font-semibold">
              {" "}
              Full-Stack Engineer
            </span>{" "}
            and
            <span className="text-white font-semibold">
              {" "}
              Computer Science Graduate
            </span>{" "}
            dedicated to turning ideas into elegant, high-performing digital
            solutions. As the founder of
            <span className="text-white font-semibold">
              {" "}
              <a
                className="text-[#915eff] hover:text-[#b47fff] font-semibold ml-1"
                href={"https://hosainatechsolutions.com.et"}
                target="_blank"
              >
                {" "}
                Hosaina Tech Solutions
              </a>
            </span>
            , I lead a team focused on creating scalable, user-centered
            applications that drive real-world impact.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Over the past few years, I’ve worked across every layer of software
            development — from crafting clean, responsive interfaces to
            designing solid backend architectures that scale effortlessly. My
            mission is simple: build digital experiences that not only work
            flawlessly but also feel inspiring to use.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I believe great engineering blends logic with creativity. Whether
            leading a project, mentoring a team, or solving complex technical
            challenges, I’m driven by curiosity, precision, and the desire to
            create something that truly matters. My current focus is on pushing
            the boundaries of
            <span className="text-white font-medium">
              {" "}
              modern web architecture
            </span>{" "}
            and
            <span className="text-white font-medium">
              {" "}
              AI-driven innovation
            </span>{" "}
            to shape the future of digital systems in Ethiopia and beyond.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#025eff] rounded-full"></div>
              <h3 className="text-white text-xl font-semibold">
                Technical Architecture
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#915eff] mt-1">▸</span>
                <span>System design & microservices architecture</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#915eff] mt-1">▸</span>
                <span>Cloud infrastructure & DevOps practices</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#915eff] mt-1">▸</span>
                <span>Database design & optimization strategies</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#915eff] mt-1">▸</span>
                <span>API design & integration patterns</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#025eff] rounded-full"></div>
              <h3 className="text-white text-xl font-semibold">
                Leadership & Delivery
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#915eff] mt-1">▸</span>
                <span>Team leadership & technical mentorship</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#915eff] mt-1">▸</span>
                <span>Agile project management & delivery</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#915eff] mt-1">▸</span>
                <span>Client relationship management</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#915eff] mt-1">▸</span>
                <span>Quality assurance & code review processes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Current Focus */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 mt-12 border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-[#915eff] rounded-full animate-pulse"></div>
            <h3 className="text-white text-xl font-semibold">
              Current Focus & Vision
            </h3>
          </div>

          <p className="text-gray-300 leading-relaxed">
            At this stage of my journey, I&lsquo;m deeply focused on advancing
            <span className="text-white font-medium">
              {" "}
              enterprise software architecture
            </span>{" "}
            and
            <span className="text-white font-medium">
              {" "}
              scalable digital ecosystems
            </span>
            . Through{" "}
            <span className="text-white font-semibold">
              <Link
                className="text-[#915eff] hover:text-[#b47fff] font-semibold ml-1"
                to={"https://hosainatechsolutions.com.et"}
                target="_blank"
              >
                {" "}
                Hosaina Tech Solutions
              </Link>
            </span>
            , my goal is to build technologies that empower businesses, simplify
            workflows, and bridge the gap between innovation and accessibility.
          </p>

          <p className="text-gray-300 leading-relaxed mt-4">
            Beyond code, I’m passionate about nurturing the next generation of
            Ethiopian developers — sharing knowledge, mentoring talent, and
            inspiring others to believe that world-class technology can be built
            from anywhere. My long-term vision is to lead
            <span className="text-[#915eff] font-medium">
              {" "}
              Africa’s digital transformation
            </span>{" "}
            through collaboration, creativity, and relentless problem-solving.
          </p>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="mt-20">
        <motion.div variants={textVariant()}>
          <div className="text-center mb-12">
            <h3 className={`${styles.sectionSubText} mb-4`}>
              Core Competencies
            </h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#915eff] to-[#025eff] mx-auto"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
