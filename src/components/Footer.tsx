import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/VENKATESHPRABU08',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/venkateshprabu08',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:venkatesh08private@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors mb-4"
            >
              P VENKATESH PRABU
            </button>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Computer Science Engineering Student passionate about creating innovative solutions 
              and contributing to the tech community. Always excited to connect and collaborate!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={link.label}
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 transform group-hover:scale-110">
                    <IconComponent size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-wrap justify-center gap-8 mb-6 text-sm">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Education
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-sm text-gray-400">
              <p className="mb-2 md:mb-0">
                © {currentYear} P Venkatesh Prabu. All rights reserved.
              </p>
              <p className="flex items-center">
                Made with <Heart className="mx-1 text-red-500" size={16} /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;