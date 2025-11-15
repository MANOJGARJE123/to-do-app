import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 text-center max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          About Our Mission
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Our mission is to empower individuals and teams to achieve their full potential by providing intuitive, powerful, and beautiful tools for task management and productivity. We believe that organizing your work should be effortless, allowing you to focus on what truly matters. We are dedicated to continuous improvement and listening to our users to evolve our platform to meet their ever-changing needs.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Built with a passion for efficiency and a commitment to user experience, our application is designed to adapt to your unique workflow, helping you stay on top of your goals, big or small.
        </p>
        <h3 className="text-3xl font-extrabold text-gray-800 mb-6 mt-12">
          Our Vision
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          We envision a world where everyone can manage their day with clarity and achieve their aspirations without feeling overwhelmed. Our goal is to be the leading platform that simplifies productivity and fosters a sense of accomplishment for millions worldwide.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
