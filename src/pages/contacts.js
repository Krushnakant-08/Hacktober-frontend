import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Using FormSubmit (no backend required) via AJAX to avoid redirect.
  const getFormsubmitAjaxEndpoint = () => {
    const base = process.env.REACT_APP_FORMSUBMIT_ENDPOINT || 'https://formsubmit.co/parth.joshi23@pccoepune.org';
    // Ensure we hit the /ajax/ endpoint to receive JSON and prevent redirect
    return base.replace('https://formsubmit.co/', 'https://formsubmit.co/ajax/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(''); // Clear any previous errors
    try {
      const endpoint = getFormsubmitAjaxEndpoint();
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _captcha: 'false',
        _template: 'table'
      };
      
      console.log('Sending to endpoint:', endpoint); // Debug log
      
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors', // Explicitly set CORS mode
        body: JSON.stringify(payload)
      });
      
      console.log('Response status:', res.status); // Debug log
      
      const data = await res.json();
      console.log('Response data:', data); // Debug log
      
      // More lenient success check
      if (res.ok && (data.success === true || data.success === 'true' || data.message === 'Form submitted successfully')) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      if (err.message && err.message.includes('needs Activation')) {
        setError('Our contact form is being activated. Please try again in a few minutes.');
      } else {
        setError(err.message || 'Failed to send message. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <div className="bg-[#0D0C1D] pt-12 pb-6 md:pb-8 px-4 md:px-8 lg:px-16 relative z-10">
  <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 py-3 md:py-6 bg-[#22103a] rounded-2xl shadow-lg max-w-4xl my-2 md:my-4 mx-auto">
      {/* Left Side: Info Box */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-transparent p-4 md:p-8 min-h-[250px] md:min-h-[350px] flex flex-col justify-center">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-[#e0aaff] mb-3 md:mb-4 drop-shadow-[0_0_16px_#9d00ff]">Get in Touch</h1>
    <p className="text-[#e0aaff] text-center mb-4 md:mb-6 text-sm md:text-base">We'd love to hear from you. Whether you have a question, a suggestion, or just want to say hi, drop us a line!</p>
    <div className="text-center space-y-2">
  <p className="text-[#a259f7] font-semibold">acm@pccoepune.org</p>
  
    </div>
  </div>
      </div>
      {/* Divider for desktop */}
      <div className="hidden md:block w-px bg-[#3a0ca3]/30 my-12"></div>
      {/* Right Side: Form Box */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-transparent p-4 md:p-8 min-h-[250px] md:min-h-[350px] flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#e0aaff] mb-4 md:mb-6 drop-shadow-[0_0_16px_#9d00ff]">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
          {error && (
            <p className="mt-4 text-center text-red-400 font-semibold">
              {error}
            </p>
          )}
        </div>

      </div>
    </div>
    </div>
  );
};

export default ContactPage;
