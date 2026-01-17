
const Footer = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}`;

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/MadisoMelese",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "text-gray-400 hover:text-white",
      mobileText: "GitHub"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/madiso-abebe-9a2080358/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "text-blue-500 hover:text-blue-400",
      mobileText: "LinkedIn"
    },
    {
      name: "Email",
      url: "mailto:madishamadiso00@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
        </svg>
      ),
      color: "text-red-400 hover:text-red-300",
      mobileText: "Email"
    },
    {
      name: "Telegram",
      url: "https://telegram.me/@MadisoMelese",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
        </svg>
      ),
      color: "text-blue-400 hover:text-blue-300",
      mobileText: "Telegram"
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">Madiso Melese</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Senior Full Stack Developer & Founder of Hosaina Tech Solutions. 
              Building scalable digital solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                About
              </a>
              <a href="#work" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Work
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Let's Connect</h4>
            <p className="text-gray-400 text-sm">
              Open to new opportunities and interesting projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Social Links - Mobile Optimized */}
          <div className="lg:hidden mb-6">
            <h4 className="text-white font-semibold text-center mb-4">Follow Me</h4>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} transition-all duration-300 transform hover:scale-110 flex flex-col items-center`}
                >
                  <div className="w-6 h-6 mb-1">
                    {link.icon}
                  </div>
                  <span className="text-xs text-gray-400">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              &copy; 2022-{formattedDate} Madiso Melese. All rights reserved.
            </div>
            
            {/* Additional Info */}
            <div className="text-gray-500 text-xs text-center lg:text-right">
              <p>Built with React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;