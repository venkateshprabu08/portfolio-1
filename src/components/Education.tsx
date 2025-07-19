import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Mepco Schlenk Engineering College, Sivakasi',
      duration: '2022 – 2026',
      grade: 'CGPA: 7.2',
      status: 'current'
    },
    {
      degree: 'HSC – Computer Science',
      institution: 'St. John\'s Matriculation School, Madurai',
      duration: '2021 – 2022',
      grade: '87.17%',
      status: 'completed'
    },
    {
      degree: 'SSLC',
      institution: 'St. John\'s Matriculation School, Madurai',
      duration: '2019 – 2020',
      grade: '75.2%',
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <div className="md:ml-20">
                    <div className={`bg-white rounded-xl shadow-lg p-8 border-l-4 ${
                      edu.status === 'current' ? 'border-blue-600' : 'border-green-500'
                    } hover:shadow-xl transition-all duration-300`}>
                      
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center mb-2 md:mb-0">
                          <GraduationCap className="text-blue-600 mr-3" size={24} />
                          <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'current' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {edu.status === 'current' ? 'Current' : 'Completed'}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="mr-2" size={16} />
                          <span>{edu.institution}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Calendar className="mr-2" size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Award className="mr-2 text-blue-600" size={16} />
                          <span className="text-blue-600 font-semibold">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;