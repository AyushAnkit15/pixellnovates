import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 flex-shrink-0 ${isOpen ? '' : 'hidden'}`}>
        <div className="p-4">
          {/* Your sidebar content */}
          <h2 className="text-lg font-semibold">Sidebar</h2>
          <ul className="mt-4">
            <li><a href="#" className="block py-2">Home</a></li>
            <li><a href="#" className="block py-2">About</a></li>
            <li><a href="#" className="block py-2">Services</a></li>
            <li><a href="#" className="block py-2">Contact</a></li>
          </ul>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-4">
        {/* Your main content */}
        <h1 className="text-2xl font-semibold">Main Content</h1>
        <p className="mt-4">Your main content goes here...</p>
      </main>

      {/* Toggle button for mobile */}
      <div className="md:hidden fixed bottom-0 right-0 p-4">
        <button className="text-white focus:outline-none" onClick={toggleSidebar}>
          {/* Insert your toggle icon (e.g., hamburger icon) here */}
          <GiHamburgerMenu/>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* Example icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
