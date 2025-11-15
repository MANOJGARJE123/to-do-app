import React from 'react';

const ContactSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white overflow-hidden">
      {/* Background elements for glassmorphism */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2500"></div>
      </div>
      <div className="relative z-10 container mx-auto px-8 max-w-5xl md:flex md:space-x-10 items-center justify-between">
        {/* Left Column: App Info */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-5xl font-extrabold leading-tight mb-4 text-white">
            Ready to Get Organized?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 text-blue-100">
            Join thousands of productive users who are simplifying their lives and achieving their goals with our intuitive task management app. Reach out to learn more or get started today!
          </p>
          <div className="mt-8 space-y-4 text-blue-100 md:text-left text-center">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>VJTI Matunga, Mumbai, 400019</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>+91 9326179183</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-1/2 backdrop-filter backdrop-blur-md bg-white bg-opacity-30 p-10 rounded-2xl shadow-lg border border-white border-opacity-20">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-900">
            Let's Connect
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                spellCheck="false"
                className="w-full p-3 rounded-md bg-white bg-opacity-70 border border-gray-300 border-opacity-50 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                spellCheck="false"
                className="w-full p-3 rounded-md bg-white bg-opacity-70 border border-gray-300 border-opacity-50 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:border-transparent"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                spellCheck="false"
                className="w-full p-3 rounded-md bg-white bg-opacity-70 border border-gray-300 border-opacity-50 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:border-transparent"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
