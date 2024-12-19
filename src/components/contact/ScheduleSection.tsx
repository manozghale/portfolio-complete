import React from 'react';
import ScheduleMeeting from './ScheduleMeeting';

const ScheduleSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Book a free consultation to discuss your project and explore how we can work together
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ScheduleMeeting />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;