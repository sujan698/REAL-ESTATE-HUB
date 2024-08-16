import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';
import logo from '../Captures/images/logo.png';
import { useDarkMode } from './DarkModeContext';
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', path: 'home' },
    { label: 'About', path: 'about' },
    { label: 'Properties', path: 'properties' },
    { label: 'Services', path: 'services' },
    { label: 'Testimonials', path: 'testimonials' },
    { label: 'Contact', path: 'contact' },
  ];

  return (
    <nav className={`${darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'} flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>
      <div id='Logo'>
        <img src={logo} alt="company logo" className='lg:w-[150px] w-[120px] dark:invert' />
      </div>
      
      <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            className='text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white'
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </ul>
      
      {/* Mobile menu icon */}
      <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className='text-black dark:text-white text-2xl cursor-pointer' />
        ) : (
          <FaBars className='text-black dark:text-white text-2xl cursor-pointer' />
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className={`${darkMode ? 'bg-black' : 'bg-white'} absolute top-16 right-0 w-full lg:hidden flex flex-col items-center py-4 gap-4 z-20`}>
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              className='text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white'
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
