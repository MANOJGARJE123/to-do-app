import React from 'react';
import HeroSection from '../components/HeroSection';
import HomeFeaturesSection from '../components/HomeFeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

function HomePage() {
  return (
    <div className="bg-white font-sans w-full min-h-screen">
      <HeroSection />
      <HomeFeaturesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
  