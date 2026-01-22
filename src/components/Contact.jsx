/* eslint-disable react-refresh/only-export-components */


import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

const showToast = (type, message) => {
  setToast({ show: true, type, message });
  setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_ukzemrf',
      'template_s9kyfog',
      {
        from_name: form.name,
        to_name: 'Madiso',
        from_email: form.email,
        to_email: 'madishamadiso00@gmail.com',
        message: form.message,
      },
      'pRH6J2xzSNmketppL'
    ).then(() => {
  setLoading(false);
  showToast("success", "Thank you! I’ll get back to you as soon as possible.");
  setForm({ name: '', email: '', message: '' });
}, (error) => {
  setLoading(false);
  showToast("error", "Something went wrong. Please try again or email me directly.", error);
});

  };

 const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "madishamadiso00@gmail.com",
    href: "mailto:madishamadiso00@gmail.com"
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: "GitHub",
    value: "github.com/MadisoMelese",
    href: "https://github.com/MadisoMelese"
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/madiso-abebe",
    href: "https://www.linkedin.com/in/madiso-abebe-9a2080358/"
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+251 954 233 154",
    href: "tel:+251954233154"
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
      </svg>
    ),
    label: "Telegram",
    value: "@madisomelese",
    href: "https://telegram.me/@madisomelese"
  }
];

  return (
    <div className="xl:mt-12 flex flex-col lg:flex-row gap-12 overflow-hidden" id='contact'>
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 lg:p-10"
      >
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#025eff] rounded-full"></div>
            <p className={`${styles.sectionSubText} font-semibold`}>GET IN TOUCH</p>
          </div>
          <h3 className={`${styles.sectionHeadText} mb-4`}>
            Let&lsquo;s <span className="text-[#025eff]">Connect</span>
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Have a project in mind or want to discuss potential opportunities? 
            I&lsquo;m always open to talking about technology, new projects, and creative ideas.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-gray-700/50 border border-gray-600 py-4 px-6 placeholder:text-gray-400 text-white rounded-xl outline-none focus:border-[#915eff] transition-colors duration-300"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="bg-gray-700/50 border border-gray-600 py-4 px-6 placeholder:text-gray-400 text-white rounded-xl outline-none focus:border-[#915eff] transition-colors duration-300"
                required
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Message</span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or inquiry..."
              className="bg-gray-700/50 border border-gray-600 py-4 px-6 placeholder:text-gray-400 text-white rounded-xl outline-none focus:border-[#915eff] transition-colors duration-300 resize-none"
              required
            />
          </label>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#025eff] to-[#915eff] hover:from-[#004ecc] hover:to-[#804dee] text-white py-4 px-8 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Information */}
  <motion.div
  variants={slideIn("right", "tween", 0.2, 1)}
  className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6 lg:p-8" // Responsive padding
>
  <div className="mb-6 sm:mb-8 lg:mb-10"> {/* Responsive margins */}
    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"> {/* Responsive gap */}
      <div className="w-2 h-2 bg-[#915eff] rounded-full"></div>
      <p className={`${styles.sectionSubText} font-semibold text-sm sm:text-base`}>CONTACT INFO</p> {/* Responsive text */}
    </div>
    <h3 className={`${styles.sectionHeadText} text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6`}> {/* Responsive heading */}
      Other <span className="text-[#915eff]">Ways</span> to Reach Me
    </h3>
  </div>

  <div className="space-y-4 sm:space-y-6"> {/* Responsive spacing */}
    {contactInfo.map((item, index) => (
      <motion.a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 5 }}
        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-700/30 border border-gray-600 hover:border-[#915eff] transition-all duration-300 group" // Responsive padding and gap
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#915eff] to-[#025eff] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0"> {/* Responsive icon size */}
          {item.icon}
        </div>
        <div className="flex-1 min-w-0"> {/* Prevent text overflow */}
          <div className="text-white font-semibold text-sm sm:text-base truncate">{item.label}</div> {/* Responsive text and truncate */}
          <div className="text-gray-400 text-xs sm:text-sm truncate">{item.value}</div> {/* Responsive text and truncate */}
        </div>
        <div className="text-gray-400 group-hover:text-[#915eff] transition-colors duration-300 flex-shrink-0">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Responsive icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </motion.a>
    ))}
  </div>

  {/* Availability Status */}
  <div className="mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl sm:rounded-2xl"> {/* Responsive margins and padding */}
    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3"> {/* Responsive gap */}
      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div> {/* Responsive dot */}
      <span className="text-green-400 font-semibold text-sm sm:text-base">Currently Available</span> {/* Responsive text */}
    </div>
    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed"> {/* Responsive text */}
      I&lsquo;m currently accepting new projects and opportunities. Response time is typically within 24 hours.
    </p>
  </div>
</motion.div>

      {/* Toast Notification */}
{toast.show && (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-xl shadow-xl backdrop-blur-md border ${
      toast.type === "success"
        ? "bg-green-600/20 border-green-500/40 text-green-300"
        : "bg-red-600/20 border-red-500/40 text-red-300"
    }`}
  >
    <div className="flex items-center gap-3">
      {toast.type === "success" ? (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      <p className="text-sm font-medium">{toast.message}</p>
    </div>
  </motion.div>
)}

    </div>
  );
};

export default SectionWrapper(Contact, "contact");