import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import madiso from "../assets/madiso.JPG";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-primary overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary to-gray-800">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#025eff]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#915eff]/10 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full h-full flex items-center justify-center pt-20 md:pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content - Second on mobile */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-6">
                {/* Professional Badge */}
                <div className="flex items-center gap-3 text-gray-400 uppercase tracking-wider text-sm font-medium">
                  <div className="w-2 h-2 bg-[#025eff] rounded-full animate-pulse"></div>
                  Senior Full Stack Developer
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Madiso <span className="text-[#025eff]">Melese</span>
                </h1>

                {/* Subtitle */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
                    CS Graduate & Founder of Hosaina Tech Solutions
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                    Building scalable digital solutions with 3+ years of
                    professional experience. Specializing in full-stack
                    development and technical leadership.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#025eff] hover:bg-[#004ecc] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg shadow-blue-500/25"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-600 hover:border-[#915eff] text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  Learn More
                </motion.a>
              </div>
            </div>

            {/* Profile Image - First on mobile */}
            <div className="order-1 lg:order-2 relative flex justify-center">
              <div className="relative">
                {/* Professional Image Container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-2xl mx-auto group">
                  <img
                    src={madiso}
                    alt="Madiso Melese - Senior Full Stack Developer"
                    className="w-full h-full object-fit object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Minimal Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-transparent"></div>
                </div>

                {/* Experience Badge - Clean & Minimal */}
                <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="text-center">
                    <div className="font-bold text-xl text-[#025eff]">3+</div>
                    <div className="text-xs font-semibold text-gray-600 tracking-tight">
                      Years
                    </div>
                  </div>
                </div>

                {/* Social Links - Minimal & Clean */}
                <div className="flex justify-center gap-6 mt-6">
                  <motion.a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5] transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 w-full hidden md:flex justify-center">
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 group"
        >
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 group-hover:text-white text-sm font-medium tracking-wide transition-colors duration-300"
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 group-hover:border-white rounded-full flex justify-center transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 group-hover:bg-white rounded-full mt-2 transition-colors duration-300"
            ></motion.div>
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
