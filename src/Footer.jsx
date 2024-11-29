import React from "react";
import { FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
        <hr />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          {/* <h1 className="text-2xl font-bold">HABOT</h1> */}
          <img className="w-35 h-12" src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwGNvP9grakp8xukjFGzQ8e4bX0AtkaicxS8OEqaWy35bcko921VRolDehVE95Zn-5MZMVIUvhO4cFu7F~CHafsaR3Y~4y8J7pPLpVep4U49YqynFwI1JOPuUBp~obXaCbEaANwEF3dNPWEGFsbwqcSAeWoHwY14MW~qT5GdlK6JlMfR7-~G7bXdGSNT5tuQAk5WdYjNvXk5PAVvBDh8dkRWH9Mgkvb8hxAiAzNh9kKP5WZhSmhthIF1BYUEaL3-kE1M-LhfPs-orVzvAAB0jpKgGdTXUGLu41ft1an~JA8dBRin7cGQnwSX-u3dzVvK8-i~xWQLIPLa0nlh3gUo-A__" alt="" />

          <p className="text-sm mt-1">© R Singhania</p>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-3 gap-8 text-sm">
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
        <div className="flex space-x-4 text-xl mt-6 md:mt-0">
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
      <hr />
    </footer>
  );
};

export default Footer;
