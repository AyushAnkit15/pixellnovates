import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const SidebarNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar (visible on smaller screens) */}
      <div className={`bg-red-500 text-white w-64 ${isSidebarOpen ? 'block' : 'hidden'} md:hidden`}>
        {/* Sidebar content */}
        <h1>hello</h1>
        {/* ... */}
      </div>

      {/* Navbar (visible on larger screens) */}
      <nav className={`bg-gray-800 text-white ${isSidebarOpen ? 'hidden' : 'flex'} w-full md:w-64 md:block`}>
        {/* Navbar content */}
        {/* ... */}
      </nav>

      {/* Toggle button for mobile */} 
  

      <button 
        className="md:hidden fixed bottom-0 right-0 p-4 text-white flex items-center focus:outline-none"
        onClick={toggleSidebar}
      >
        {/* Toggle icon */}
       Hello
        {/* Toggle text */}
        {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>

      {/* Main content area */}
      <main className={`flex-1 p-4 ${isSidebarOpen ? 'ml-0' : 'ml-64'}`}>
        {/* Your main content */}
        {/* ... */}
      </main>
    </div>
  );
};

export default SidebarNavbar;
