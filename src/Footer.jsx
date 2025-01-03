import React from "react";
import { FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#123557] text-white py-6">
      <hr className="border-t border-white w-[90%] mx-auto" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <img
            className="w-40 h-auto mx-auto md:mx-0"
            src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwGNvP9grakp8xukjFGzQ8e4bX0AtkaicxS8OEqaWy35bcko921VRolDehVE95Zn-5MZMVIUvhO4cFu7F~CHafsaR3Y~4y8J7pPLpVep4U49YqynFwI1JOPuUBp~obXaCbEaANwEF3dNPWEGFsbwqcSAeWoHwY14MW~qT5GdlK6JlMfR7-~G7bXdGSNT5tuQAk5WdYjNvXk5PAVvBDh8dkRWH9Mgkvb8hxAiAzNh9kKP5WZhSmhthIF1BYUEaL3-kE1M-LhfPs-orVzvAAB0jpKgGdTXUGLu41ft1an~JA8dBRin7cGQnwSX-u3dzVvK8-i~xWQLIPLa0nlh3gUo-A__"
            alt="Logo"
          />
          <p className="text-sm mt-2">© R Singhania</p>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Terms</h3>
            <ul>
              <li className="hover:text-gray-300 cursor-pointer">Data Privacy</li>
              <li className="hover:text-gray-300 cursor-pointer">Terms</li>
              <li className="hover:text-gray-300 cursor-pointer">Accessibility</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Related</h3>
            <ul>
              <li className="hover:text-gray-300 cursor-pointer">Find Buyer</li>
              <li className="hover:text-gray-300 cursor-pointer">Feedback</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end space-x-4 text-xl">
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>
      <hr className="border-t border-white w-[90%] mx-auto mt-4" />
    </footer>
  );
};

export default Footer;
