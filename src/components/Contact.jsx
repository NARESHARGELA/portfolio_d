import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const phone = '9381163337'; // Replace with your WhatsApp number

    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here's my message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.location.href = `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  return (
    <section id='contact' className="min-h-screen bg-gray-100 py-16 px-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
          >
            Send Message via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
