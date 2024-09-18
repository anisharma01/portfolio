"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSent(true);
      } else {
        setError("There was an issue sending your message. Please try again.");
      }
    } catch (err) {
      setError("There was an issue sending your message. Please try again.");
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-400 dark:bg-gray-600 flex flex-col items-center p-4 pt-20">
      <div className="text-center mb-12 w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Contact Me</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-200">Feel free to get in touch with me using the form below or via the contact details provided.</p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}  // Change from "4" to {4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Message"
              required
            ></textarea>

          </div>
          <button
            type="submit"
            className="w-full bg-custom1 dark:bg-custom1 text-white px-4 py-2 rounded-md shadow-md hover:bg-custom3 dark:hover:bg-custom2 transition-colors duration-300"
          >
            Send Message
          </button>
          {isSent && <p className="text-green-600 dark:text-green-400 mt-4">Your message has been sent successfully!</p>}
          {error && <p className="text-red-600 dark:text-red-400 mt-4">{error}</p>}
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-12 w-full max-w-4xl text-center">
        <p>Follow me on:</p>
        {/* Social Media Handles */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-custom3 dark:text-custom2 hover:underline">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-custom3 dark:text-custom2 hover:underline">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-custom3 dark:text-custom2 hover:underline">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
