import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img 
            src={logo} 
            alt="logo" 
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <p className="text-white text-lg sm:text-xl font-bold cursor-pointer flex whitespace-nowrap">
            Madiso <span className="hidden sm:inline">Melese</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                  ? "text-white border-b-2 border-[#915eff]" 
                  : "text-secondary hover:text-white"
              } cursor-pointer text-[16px] lg:text-[18px] font-medium transition-all duration-300 relative group`}
            >
              <a 
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.title)}
                className="py-2 block"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#915eff] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="relative">
            <button
              className="w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={() => setToggle(!toggle)}
              aria-label="Toggle menu"
            >
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-6 h-6 object-contain transition-transform duration-300"
              />
            </button>

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } absolute top-10 right-0 mx-4 my-2 min-w-[180px] rounded-xl bg-primary/95 backdrop-blur-md border border-gray-800 shadow-2xl transition-all duration-300`}
            >
              <ul className="list-none flex flex-col gap-1 w-full p-2">
                {navLinks.map((link, index) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title 
                        ? "bg-[#915eff]/20 text-white border-l-4 border-[#915eff]" 
                        : "text-secondary hover:text-white hover:bg-gray-800/50"
                    } cursor-pointer text-[16px] font-medium transition-all duration-200 rounded-lg`}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => handleLinkClick(link.title)}
                      className="w-full block px-4 py-3 rounded-lg transition-all duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="bg-[#025eff] hover:bg-[#004ecc] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm"
            onClick={() => setActive("Contact")}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;