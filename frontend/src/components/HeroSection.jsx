import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white min-h-[600px] flex items-center justify-center p-8 overflow-hidden">
      {/* Background elements for glassmorphism */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto backdrop-filter backdrop-blur-md bg-white bg-opacity-30 p-10 rounded-2xl shadow-xl border border-white border-opacity-20">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in text-gray-900">
          Organize Your Life, Achieve Your Goals
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in animation-delay-500 text-gray-700">
          The smart way to manage your tasks, projects, and reminders.
        </p>
        <Link
          to="/register"
          className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in animation-delay-1000"
        >
          Get Started - It's Free
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
