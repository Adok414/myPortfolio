import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactMailIcon from '@mui/icons-material/ContactMail';



function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // меню ашық па, жоқ па

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="">
      <nav className="container mx-auto px-4 py-4 flex justify-center">
        

        <ul className="hidden md:flex space-x-8 text-gray-700 text-[20px]">
          <li>
            <a href="#home" className="flex items-center hover:text-blue-600 transition-transform duration-300 hover:scale-110">
              <HomeIcon className="mr-2" />
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="flex items-center  hover:text-blue-600 transition-transform duration-300 hover:scale-110">
              <AccountBoxIcon className="mr-2" />
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="flex items-center  hover:text-blue-600 transition-transform duration-300 hover:scale-110">
              <SchoolIcon className="mr-2" />
              Skills
            </a>
          </li>
          <li>
            <a href="#Projects" className="flex items-center  hover:text-blue-600 transition-transform duration-300 hover:scale-110">
              <BusinessCenterIcon className="mr-2" />
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="flex items-center  hover:text-blue-600 transition-transform duration-300 hover:scale-110">
              <ContactMailIcon className="mr-2" />
              Contact
            </a>
          </li>
        </ul>


        {/* Кнопка для мобильного меню */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Мобильді меню */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-4 text-gray-700 text-[18px] bg-white py-4 items-center">
          <li>
            <a href="#home" className="flex items-center" onClick={() => setMenuOpen(false)}>
              <HomeIcon className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a href="#About" className="flex items-center" onClick={() => setMenuOpen(false)}>
              <AccountBoxIcon className="mr-2" /> About
            </a>
          </li>
          <li>
            <a href="#skills" className="flex items-center" onClick={() => setMenuOpen(false)}>
              <SchoolIcon className="mr-2" /> Skills
            </a>
          </li>
          <li>
            <a href="#Projects" className="flex items-center" onClick={() => setMenuOpen(false)}>
              <BusinessCenterIcon className="mr-2" /> Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="flex items-center" onClick={() => setMenuOpen(false)}>
              <ContactMailIcon className="mr-2" /> Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header