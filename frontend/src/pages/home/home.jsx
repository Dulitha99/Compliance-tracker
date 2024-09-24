import React from 'react';
import Login from '../login/login';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-bold">CyberX</a>
          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div className="hidden lg:flex space-x-4">
            <a href="#home" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</a>
            <a href="#about" className="text-white hover:bg-blue-700 px-3 py-2 rounded">About</a>
            <a href="#services" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Services</a>
            <a href="#contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Contact</a>
            <a href="/login" className="btn btn-neutral">Login</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-16 px-4 lg:px-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to CyberX</h1>
        <p className="text-lg mb-8">Enhance your security awareness with our comprehensive training programs and resources.</p>
        <a href="/signup" className="btn btn-neutral">Get Started</a>
      </main>

      {/* About Section */}
      <section id="about" className="py-16 px-4 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-8">At CyberX, we provide cutting-edge security training and awareness programs to help you stay ahead of potential threats. Our team of experts is dedicated to ensuring that your organization is well-equipped to handle any security challenges.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Security Training and Awareness</h3>
            <p>Comprehensive training programs designed to enhance your security awareness and keep you informed about the latest threats.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Policy Management</h3>
            <p>Effective management of your organization's security policies to ensure compliance and mitigate risks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Policy Tracker</h3>
            <p>Tools to track and manage your security policies, ensuring they are up-to-date and effective.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Reporting Services</h3>
            <p>Detailed reporting services to help you understand and respond to security incidents and policy compliance.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 lg:px-16 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="form-input w-full" id="name" type="text" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="form-input w-full" id="email" type="email" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="form-textarea w-full" id="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button className="btn btn-neutral w-full" type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 CyberX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
