import React from 'react';
import { Brain, Code, Globe, Database, Settings, Users, Lightbulb, TrendingUp, Heart } from 'lucide-react';

const Skills: React.FC = () => {
  const softSkills = [
    { name: 'Communication', icon: Users, level: 90 },
    { name: 'Adaptability', icon: TrendingUp, level: 85 },
    { name: 'Collaboration', icon: Heart, level: 88 },
    { name: 'Leadership', icon: Lightbulb, level: 82 }
  ];

  const technicalSkills = [
    {
      category: 'Programming Languages',
      icon: Code,
      skills: ['C', 'C++', 'Python', 'Java', 'R']
    },
    {
      category: 'Web Technologies',
      icon: Globe,
      skills: ['Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Database & Systems',
      icon: Database,
      skills: ['SQL', 'RDBMS', 'Basic Linux']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Soft Skills */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Brain className="text-blue-600 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">Core Competencies</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <IconComponent className="text-blue-600" size={28} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">{skill.name}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Settings className="text-blue-600 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {technicalSkills.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                        <IconComponent className="text-blue-600" size={24} />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">{category.category}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;