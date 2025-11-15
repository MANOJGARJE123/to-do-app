import React from 'react';
import { TestimonialCard } from './TestimonialsSection';

const FullTestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This app has significantly boosted my team's efficiency and task management. It's truly a game-changer for our productivity!",
      name: "Manoj Garje",
      title: "Lead Developer",
    },
    {
      quote: "An incredibly intuitive and powerful tool for staying organized and on track. The features are exactly what I needed.",
      name: "Amol Garje",
      title: "Product Manager",
    },
    {
      quote: "The best solution for managing complex projects and collaborating seamlessly. My team loves it!",
      name: "Parthest Tiwari",
      title: "CEO, Creative Agency",
    },
    {
      quote: "I highly recommend this app for anyone looking to streamline their daily workflow and achieve greater focus. Fantastic support too!",
      name: "Varad Pathak",
      title: "Freelance Consultant",
    },
    {
      quote: "Exceptional features and a user-friendly interface. A must-have for productivity! It has simplified my work immensely.",
      name: "Rohan Igave",
      title: "Software Engineer",
    },
    {
      quote: "Absolutely blown away by the clarity and control this app provides. My tasks have never been so well-managed.",
      name: "Shreyash Ghutake",
      title: "UI/UX Designer",
    },
    {
      quote: "A truly innovative approach to task management. It's transformed my personal and professional organization.",
      name: "Shrinath Torangi",
      title: "Data Scientist",
    },
    {
      quote: "Finally, an app that understands how I work. The flexibility and features are outstanding for any busy professional.",
      name: "Arbaz Shaikh",
      title: "Marketing Specialist",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullTestimonialsSection;
