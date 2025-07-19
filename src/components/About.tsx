import React from 'react';
import { Target, Globe, MessageCircle, Users, Lightbulb, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    'Data Structures & Algorithms',
    'Web Development',
    'Compiler Design',
    'RDBMS',
    'Object Oriented Programming'
  ];

  const hobbies = [
    { name: 'Reading', icon: '📚' },
    { name: 'Gardening', icon: '🌱' },
    { name: 'Music', icon: '🎵' },
    { name: 'Cooking', icon: '👨‍🍳' }
  ];

  const achievements = [
    'IEEE - English for Technical Professionals (2022)',
    'NPTEL: Google Cloud Computing Foundations (IIT Kharagpur)',
    'NPTEL: Foundations of Cloud IoT Edge ML (IIT Kanpur)',
    'Participated in AI-CONCLAVE (2024), Virudhunagar',
    'Web Development Workshop (2023), TOP ENGINEERS'
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner (2024)',
    'Associate in IT Foundations, Infosys Springboard (2024)',
    'Diploma in Yoga for Youth Empowerment'
  ];

  const roles = [
    'Microsoft Campus Club (Member)',
    'Innovation Club (Member)',
    'National Service Scheme (Member)'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Career Objective */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Target className="text-blue-600 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">Career Objective</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              A driven individual with a fervor for programming, problem-solving, and continuous learning. 
              Enthusiastic about collaborating on exciting projects and keen to acquire hands-on experience 
              in the tech industry. Committed to skill development and growth while embracing new challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="text-blue-600 mr-4" size={28} />
                <h3 className="text-xl font-bold text-gray-800">Languages</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">English</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Proficient</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tamil</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Proficient</span>
                </div>
              </div>
            </div>

            {/* Hobbies */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="text-blue-600 mr-4" size={28} />
                <h3 className="text-xl font-bold text-gray-800">Hobbies</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{hobby.icon}</span>
                    <span className="text-gray-700">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Areas of Interest */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <MessageCircle className="text-blue-600 mr-4" size={28} />
              <h3 className="text-xl font-bold text-gray-800">Areas of Interest</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Trophy className="text-blue-600 mr-4" size={28} />
                <h3 className="text-xl font-bold text-gray-800">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roles & Clubs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="text-blue-600 mr-4" size={28} />
                <h3 className="text-xl font-bold text-gray-800">Roles & Clubs</h3>
              </div>
              <ul className="space-y-3">
                {roles.map((role, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Trophy className="text-blue-600 mr-4" size={28} />
              <h3 className="text-xl font-bold text-gray-800">Academic Achievements</h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;