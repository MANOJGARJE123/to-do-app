import React from 'react';

export const TestimonialCard = ({ quote, name, title }) => (
  <div className="backdrop-filter backdrop-blur-md bg-white bg-opacity-10 p-6 rounded-xl shadow-lg border border-white border-opacity-20 text-center">
    <p className="text-gray-700 italic mb-4">"{quote}"</p>
    <h3 className="text-lg font-bold text-blue-800">{name}</h3>
    <p className="text-gray-600 text-sm">{title}</p>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This app has significantly boosted my team's efficiency and task management.",
      name: "Manoj Garje",
      title: "Lead Developer",
    },
    {
      quote: "An incredibly intuitive and powerful tool for staying organized and on track.",
      name: "Amol Garje",
      title: "Product Manager",
    },
    {
      quote: "The best solution for managing complex projects and collaborating seamlessly.",
      name: "Parthest Tiwari",
      title: "CEO, Creative Agency",
    },
    {
      quote: "I highly recommend this app for anyone looking to streamline their daily workflow.",
      name: "Varad Pathak",
      title: "Freelance Consultant",
    },
    {
      quote: "Exceptional features and a user-friendly interface. A must-have for productivity!",
      name: "Rohan Igave",
      title: "Software Engineer",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
