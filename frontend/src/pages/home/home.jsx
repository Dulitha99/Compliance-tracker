import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-[#59b602] text-white">
      <header className="bg-transparent py-4">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <div className="text-3xl font-bold">CYBERX</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#features" className="hover:text-gray-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-gray-300">Pricing</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
          <div className="space-x-4">
            <a href="/login" className="btn btn-outline btn-sm">Login</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-16">
        <h1 className="text-5xl font-bold">Welcome to CyberX</h1>
        <p className="mt-4 text-xl">Enhance your security awareness with our comprehensive training programs and resources.</p>
        <a href="/signup" className="btn btn-primary mt-8">Get Started</a>
      </section>

      {/* About Section */}
<section id="about" className="py-16 px-4 lg:px-16 bg-white text-center">
  <h2 className="text-3xl font-bold mb-4 text-black">About Us</h2>
  <p className="text-lg mb-8 text-black">At CyberX, we provide cutting-edge security training and awareness programs to help you stay ahead of potential threats. Our team of experts is dedicated to ensuring that your organization is well-equipped to handle any security challenges.</p>
  <p className="text-lg text-black">We focus on creating an informed community that can identify and mitigate risks effectively. Join us in building a safer digital world.</p>
</section>


      {/* Features Section */}
      <section className="py-16 bg-white text-gray-800" id="features">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-10">Our Features</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div className="text-center">
            <FaCheckCircle className="text-blue-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Security Training and Awareness</h3>
            <p>Comprehensive training programs to keep your team informed about the latest threats.</p>
          </div>
          <div className="text-center">
            <FaCheckCircle className="text-blue-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Policy Management</h3>
            <p>Effective management to ensure your security policies are compliant and up to date.</p>
          </div>
          <div className="text-center">
            <FaCheckCircle className="text-blue-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Reporting Services</h3>
            <p>Detailed reporting to help you respond to security incidents and maintain policy compliance.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-100 text-gray-800" id="pricing">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-10">Simple Pricing - No Fuss</h2>
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-10 px-6">
          <div className="card w-80 bg-white shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold">Starter</h3>
              <p className="text-lg">$29/mo</p>
              <p className="mt-2">Try free for 30 days</p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-outline btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-white shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold">Business</h3>
              <p className="text-lg">$59/mo</p>
              <p className="mt-2">Try free for 30 days</p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-outline btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-white shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold">Corporate</h3>
              <p className="text-lg">$99/mo</p>
              <p className="mt-2">Try free for 30 days</p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-outline btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 lg:px-16 bg-gray-200">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="form-input w-full border border-gray-300 p-2 rounded" id="name" type="text" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="form-input w-full border border-gray-300 p-2 rounded" id="email" type="email" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="form-textarea w-full border border-gray-300 p-2 rounded" id="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button className="bg-blue-800 text-white w-full py-3 rounded-lg hover:bg-blue-900 transition" type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-6 text-center">
        <p>&copy; 2024 CyberX. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-white hover:text-blue-400">Facebook</a>
          <a href="#" className="text-white hover:text-blue-400">Twitter</a>
          <a href="#" className="text-white hover:text-blue-400">LinkedIn</a>
        </div>
        <p className="mt-4">For inquiries, contact us at <a href="mailto:cyberX@gmail.com" className="text-blue-400">cyberX@gmail.com</a></p>
      </footer>
    </div>

  );
};

export default App;
