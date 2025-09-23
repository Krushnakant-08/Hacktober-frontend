import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000); // Hide message after 4 seconds
    }, 2000);
  };

  return (
  <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 py-8 bg-[#22103a] rounded-2xl shadow-lg max-w-4xl mx-auto">
      {/* Left Side: Info Box */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-transparent p-8 min-h-[350px] flex flex-col justify-center">
    <h1 className="text-3xl font-bold text-center text-[#e0aaff] mb-4 drop-shadow-[0_0_16px_#9d00ff]">Get in Touch</h1>
    <p className="text-[#e0aaff] text-center mb-6">We'd love to hear from you. Whether you have a question, a suggestion, or just want to say hi, drop us a line!</p>
    <div className="text-center space-y-2">
  <p className="text-[#a259f7] font-semibold">contact.hactober@pccoepune.org</p>
  <p className="text-[#a259f7] font-semibold">98989-----</p>
    </div>
  </div>
      </div>
      {/* Divider for desktop */}
      <div className="hidden md:block w-px bg-[#3a0ca3]/30 my-12"></div>
      {/* Right Side: Form Box */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-transparent p-8 min-h-[350px] flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-[#e0aaff] mb-6 drop-shadow-[0_0_16px_#9d00ff]">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#e0aaff] font-semibold mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input w-full px-4 py-2 rounded-lg bg-[#2d014d] text-[#e0aaff] border-2 border-[#9d00ff] focus:outline-none focus:ring-2 focus:ring-[#e0aaff] shadow-[0_0_7px_#9d00ff] placeholder-[#a259f7]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#e0aaff] font-semibold mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input w-full px-4 py-2 rounded-lg bg-[#2d014d] text-[#e0aaff] border-2 border-[#9d00ff] focus:outline-none focus:ring-2 focus:ring-[#e0aaff] shadow-[0_0_7px_#9d00ff] placeholder-[#a259f7]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#e0aaff] font-semibold mb-1">Your Message or Suggestion</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="contact-input w-full px-4 py-2 rounded-lg bg-[#2d014d] text-[#e0aaff] border-2 border-[#9d00ff] focus:outline-none focus:ring-2 focus:ring-[#e0aaff] shadow-[0_0_7px_#9d00ff] placeholder-[#a259f7]"
                placeholder="Type your suggestion..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-2 rounded-full bg-[#7c2ae8] text-white font-bold shadow-sm hover:bg-[#a259f7] transition-all duration-200 border-2 border-[#e0aaff] focus:outline-none focus:ring-2 focus:ring-[#e0aaff]"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
          {isSubmitted && (
            <p className="mt-4 text-center text-green-300 font-semibold drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
              Thank you! Your message has been sent.
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
