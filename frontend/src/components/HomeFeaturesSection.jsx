import React from 'react';
import { FeatureCard } from './FeaturesSection'; // Assuming FeatureCard is exported from FeaturesSection.jsx

const HomeFeaturesSection = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Boost Productivity',
      description: 'Accelerate your daily tasks and achieve peak performance with our intuitive tools designed to streamline every aspect of your workflow.',
    },
    {
      icon: '📅',
      title: 'Smart Reminders',
      description: 'Never miss an important deadline or event again. Our intelligent and fully customizable reminder system ensures you stay on top of your schedule.',
    },
    {
      icon: '🤝',
      title: 'Collaborate Seamlessly',
      description: 'Work effortlessly with your team by sharing tasks, projects, and ideas in real-time for collective success.',
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'Gain valuable insights into your achievements and maintain motivation with comprehensive progress reports.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Key Features
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Here's a glimpse of what makes our app the perfect tool to organize your life and boost your productivity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturesSection;
