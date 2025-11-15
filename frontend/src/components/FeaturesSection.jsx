import React from 'react';

export const FeatureCard = ({ icon, title, description }) => (
  <div className="backdrop-filter backdrop-blur-md bg-white bg-opacity-30 p-6 rounded-xl shadow-lg border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
    <div className="text-blue-300 mb-4 text-4xl">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-blue-700">{title}</h3>
    <p className="text-gray-600 opacity-90">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Boost Productivity',
      description: 'Accelerate your daily tasks and achieve peak performance with our intuitive tools designed to streamline every aspect of your workflow, ensuring you accomplish more with less effort.',
    },
    {
      icon: '📅',
      title: 'Smart Reminders',
      description: 'Never miss an important deadline or event again. Our intelligent and fully customizable reminder system ensures you stay on top of your schedule with timely notifications and alerts.',
    },
    {
      icon: '🤝',
      title: 'Collaborate Seamlessly',
      description: 'Work effortlessly with your team by sharing tasks, projects, and ideas in real-time. Our collaboration features foster clear communication and collective success on any project.',
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'Gain valuable insights into your achievements and maintain motivation with comprehensive, detailed progress reports and visual dashboards that highlight your growth.',
    },
    {
      icon: '⚙️',
      title: 'Customizable Workflows',
      description: 'Tailor your task management experience to fit your unique needs. Create personalized workflows that adapt to your style, making organization truly your own.',
    },
    {
      icon: '🔒',
      title: 'Secure Data & Privacy',
      description: 'Rest assured that your data is safe and private. We employ industry-leading security measures to protect your information, giving you peace of mind.',
    },
    {
      icon: '📱',
      title: 'Cross-Device Sync',
      description: 'Access your tasks anytime, anywhere. Our seamless cross-device synchronization ensures your data is always up-to-date across all your devices.',
    },
    {
      icon: '✨',
      title: 'Intuitive Interface',
      description: 'Enjoy a clean, clutter-free, and easy-to-navigate interface that makes managing your tasks a delightful experience from day one.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Unlock Your Potential with Powerful Features
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover a suite of tools designed to revolutionize the way you manage your tasks. From smart reminders to seamless collaboration, we've got everything you need to stay organized and achieve your goals.
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

export default FeaturesSection;
