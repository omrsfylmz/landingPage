import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"; // Import social media icons

const Contact = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-6 bg-gray-800 text-gray-300">
      {/* Social Media Links */}
      <div className="flex space-x-6 mb-4">
        <a
          href="https://twitter.com/UstunAkmenOdul"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/ustun.akmenodulleri?igsh=cTc3eHMzaW05d3R2&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61566339603985"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
        >
          <FaFacebook size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Contact;
