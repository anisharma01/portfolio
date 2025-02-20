"use client";
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
        form.current.reset();
      } catch (error) {
        setError("There was an issue sending your message. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className={`min-h-screen ${darkMode ? "bg-gray-600" : "bg-gray-300"} flex flex-col items-center p-4 pt-20`}>
      <ToastContainer />
      <div className="text-center mb-12 w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: darkMode ? "#e2e8f0" : "#1a202c" }}>Contact Me</h2>
        <p className={darkMode ? "text-gray-200" : "text-gray-700"}>
          Feel free to get in touch with me using the form below or via the contact details provided.
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <form ref={form} onSubmit={sendEmail} className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-700" : "bg-white"} space-y-4 text-black`}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={darkMode ? "text-gray-300" : "text-gray-700"}>Name</label>
              <input
                id="name"
                name="from_name"
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={darkMode ? "text-gray-300" : "text-gray-700"}>Email</label>
              <input
                id="email"
                name="email_id"
                type="email"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className={darkMode ? "text-gray-300" : "text-gray-700"}>Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full text-white px-4 py-2 rounded-md shadow-md transition-colors duration-300 ${darkMode ? "bg-custom1 hover:bg-custom3" : "bg-custom1 hover:bg-custom3"} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {error && <p className="mt-4 text-red-600">{error}</p>}
        </form>
        {loading && (
          <div className="flex justify-center mt-4">
            <div className="loader"></div>
          </div>
        )}
      </div>

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

      <div className="mt-12 w-full max-w-4xl text-center">
        <p>Follow me on:</p>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/anish-sharma-863048231/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/anisharma01" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://x.com/Anish_Sharma__" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
