import React, { useState } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="border-b-4 border-red-500">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-900">
            <img
              className="w-35 h-12"
              src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwGNvP9grakp8xukjFGzQ8e4bX0AtkaicxS8OEqaWy35bcko921VRolDehVE95Zn-5MZMVIUvhO4cFu7F~CHafsaR3Y~4y8J7pPLpVep4U49YqynFwI1JOPuUBp~obXaCbEaANwEF3dNPWEGFsbwqcSAeWoHwY14MW~qT5GdlK6JlMfR7-~G7bXdGSNT5tuQAk5WdYjNvXk5PAVvBDh8dkRWH9Mgkvb8hxAiAzNh9kKP5WZhSmhthIF1BYUEaL3-kE1M-LhfPs-orVzvAAB0jpKgGdTXUGLu41ft1an~JA8dBRin7cGQnwSX-u3dzVvK8-i~xWQLIPLa0nlh3gUo-A__"
              alt="Logo"
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 ml-auto">
          <a href="#find-suppliers" className="hover:text-blue-500">
            Find Suppliers
          </a>
          <div className="relative group">
            <button className="flex items-center hover:text-blue-500">
              Find Service Tags
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg">
              <a
                href="#tag1"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Tag 1
              </a>
              <a
                href="#tag2"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Tag 2
              </a>
            </div>
          </div>
        </div>

        {/* Login / Sign Up */}
        <div className="hidden md:block">
          <button className="px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white">
            Login / Sign Up
          </button>
        </div>

        {/* Hamburger Icon (for mobile) */}
        <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-700 space-y-4 py-4 px-6">
          <a href="#find-suppliers" className="block hover:text-blue-500">
            Find Suppliers
          </a>
          <a href="#find-service-tags" className="block hover:text-blue-500">
            Find Service Tags
          </a>
          <a href="#login" className="block px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white">
            Login / Sign Up
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
