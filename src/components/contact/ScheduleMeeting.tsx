import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

const ScheduleMeeting = () => {
  const handleScheduleMeeting = () => {
    // Replace with your actual Calendly or meeting scheduler URL
    window.open('https://calendly.com', '_blank');
  };

  const features = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: '30-minute consultation'
    },
    {
      icon: <Video className="w-5 h-5" />,
      text: 'Video call via Zoom'
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      text: 'Flexible scheduling'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 text-center border border-purple-100 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center mb-6">
        <div className="bg-purple-600 text-white p-4 rounded-full">
          <Calendar className="w-12 h-12" />
        </div>
      </div>
      
      <h3 className="text-3xl font-bold text-purple-900 mb-4">
        Book Your Free Consultation
      </h3>
      
      <p className="text-gray-700 mb-8 text-lg">
        Let's discuss your project requirements and explore how I can help you achieve your goals.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-purple-100"
          >
            <div className="text-purple-600">
              {feature.icon}
            </div>
            <span className="text-gray-700 font-medium">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button 
        onClick={handleScheduleMeeting}
        className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-lg transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl inline-flex items-center gap-2 transform hover:-translate-y-0.5"
      >
        Schedule Now
        <Calendar className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ScheduleMeeting;