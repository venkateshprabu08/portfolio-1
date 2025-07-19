import React from 'react';
import { MapPin, Mail, Github, Linkedin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              P VENKATESH PRABU
            </h1>
            <div className="flex items-center justify-center text-xl md:text-2xl text-blue-100 mb-8">
              <MapPin className="mr-2" size={24} />
              Madurai, Tamil Nadu, India
            </div>
          </div>

          <div className="mb-12">
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-blue-50">
              Driven individual passionate about programming, problem-solving, and continuous learning. 
              Open to collaborations on tech projects and eager for hands-on experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:venkatesh08private@gmail.com"
              className="flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </a>
            <button className="flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              <Download className="mr-2" size={20} />
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="mailto:venkatesh08private@gmail.com"
              className="flex items-center text-blue-100 hover:text-white transition-colors group"
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              venkatesh08private@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/venkateshprabu08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-100 hover:text-white transition-colors group"
            >
              <Linkedin className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/VENKATESHPRABU08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-100 hover:text-white transition-colors group"
            >
              <Github className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-200 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-200 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;