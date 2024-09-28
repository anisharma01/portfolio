"use client";

import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    if (form.current) {
      try {
        await emailjs.sendForm('service_1xc6kqg', 'template_kfvudeh', form.current, 'Ux6p9i07FILQf_agW');
        toast.success("Your message has been sent successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        form.current.reset(); // Reset form after successful submission
      } catch (error) {
        setError("There was an issue sending your message. Please try again.");
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      setLoading(false); // Stop loading if form.current is null
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-400 dark:bg-gray-600 flex flex-col items-center p-4 pt-20">
      <ToastContainer />
      <div className="text-center mb-12 w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Contact Me</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-200">Feel free to get in touch with me using the form below or via the contact details provided.</p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl">
        <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                id="name"
                name="from_name"  // This should match the name in your EmailJS template
                type="text"
                className="text-custom1 mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email"
                name="email_id"  // This should match the name in your EmailJS template
                type="email"
                className="text-custom1 mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"  // This should match the name in your EmailJS template
              rows={4}
              className="text-custom1 mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full bg-custom1 dark:bg-custom1 text-white px-4 py-2 rounded-md shadow-md hover:bg-custom3 dark:hover:bg-custom2 transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {error && <p className="text-red-600 dark:text-red-400 mt-4">{error}</p>}
        </form>
        {loading && (
          <div className="flex justify-center mt-4">
            <div className="loader"></div>
          </div>
        )}
      </div>

      {/* Loader Styling */}
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          border-top: 4px solid #3498db;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Contact Information */}
      <div className="mt-12 w-full max-w-4xl text-center">
        <p>Follow me on:</p>
        {/* Social Media Handles */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/anish-sharma-863048231/" target="_blank" rel="noopener noreferrer" className="text-custom3 dark:text-custom2 hover:underline">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/anisharma01" target="_blank" rel="noopener noreferrer" className="text-custom3 dark:text-custom2 hover:underline">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://x.com/Anish_Sharma__" target="_blank" rel="noopener noreferrer" className="text-custom3 dark:text-custom2 hover:underline">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
