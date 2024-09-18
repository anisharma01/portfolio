import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function ResumeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg w-full max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" className="text-gray-800 dark:text-gray-200" />
        </button>
        <div className="overflow-hidden">
          <embed
            src="/path/to/your/resume.pdf"
            type="application/pdf"
            className="w-full h-[600px]" // Adjust height as needed
          />
        </div>
        <a
          href="/path/to/your/resume.pdf"
          download
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded block text-center hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300 transition-colors duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faDownload} size="lg" className="mr-2" />
          Download PDF
        </a>
      </div>
    </div>
  );
}
