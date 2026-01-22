/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */


import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

const FeedbackCard = ({
  name,
  designation,
  testimonial,
  company,
  index,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="group"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-[#915eff] transition-all duration-500 hover:shadow-2xl hover:shadow-[#915eff]/10">
        {/* Quote Icon */}
        <div className="mb-6">
          <svg className="w-8 h-8 text-[#915eff]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
          </svg>
        </div>

        {/* Testimonial Text */}
        <div className="mb-8">
          <p className="text-gray-300 text-lg leading-relaxed italic">
            &quot;{testimonial}&quot;
          </p>
        </div>

        {/* Client Info */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
          <div className="flex-shrink-0">
            <img 
              src={image} 
              alt={`${name} - ${designation}`} 
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-600 group-hover:border-[#915eff] transition-colors duration-300"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold text-lg truncate">
              {name}
            </h4>
            <p className="text-gray-400 text-sm truncate">
              {designation}
            </p>
            <p className="text-[#915eff] text-sm font-medium truncate">
              {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="relative">
      {/* Section Header */}
      <motion.div variants={textVariant()} className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#915eff]"></div>
          <p className={`${styles.sectionSubText} font-semibold`}>CLIENT TESTIMONIALS</p>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#915eff]"></div>
        </div>
        <h2 className={`${styles.sectionHeadText} mb-6`}>
          Client <span className="text-[#025eff]">Feedback</span>
        </h2>
        
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Don&lsquo;t just take my word for it. Here&lsquo;s what clients and colleagues have to say about 
            working with me and the quality of solutions delivered.
          </p>
        </motion.div>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name} 
            index={index} 
            {...testimonial} 
          />
        ))}
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="text-center mt-16 pt-12 border-t border-gray-800"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">4+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400 text-sm">Repeat Business</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");