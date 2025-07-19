import React from 'react';
import { Code, ExternalLink, Github, Dumbbell, Car, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Gym Management System (Java)',
      description: 'Comprehensive application for gym management featuring membership management, class scheduling, and personalized fitness plans. Built using Java with a focus on object-oriented programming principles.',
      icon: Dumbbell,
      technologies: ['Java', 'OOP', 'GUI'],
      type: 'Desktop Application'
    },
    {
      title: 'Voice Controlled Robotic Car',
      description: 'Arduino-based robotic car with voice navigation capabilities. Features real-time voice command processing and autonomous movement control for enhanced user interaction.',
      icon: Car,
      technologies: ['Arduino', 'C++', 'Voice Recognition', 'Hardware'],
      type: 'IoT Project'
    },
    {
      title: 'Gym Management System (Web)',
      description: 'Modern web application for automated gym management with responsive design. Features member registration, payment tracking, and administrative dashboard for complete gym operations.',
      icon: Globe,
      technologies: ['HTML', 'CSS', 'TypeScript', 'Web APIs'],
      type: 'Web Application'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating problem-solving skills and hands-on experience with various technologies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                    </div>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                      <Code className="mr-2" size={16} />
                      View Code
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com/VENKATESHPRABU08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Github className="mr-3" size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;