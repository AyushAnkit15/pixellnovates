import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg'

import { Link } from 'react-router-dom'
const HeaderNavbarSwitch = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set 'isMobile' to true if screen width is less than or equal to 768px
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check and add event listener for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <Navbar />
      ) : (
        <Header />
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav>
      {/* Navbar content for mobile */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      {/* Header content for larger screens */}
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default HeaderNavbarSwitch;
