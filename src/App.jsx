import React from 'react';
import './App.css';
import avatarImg from '../images/portfolio.jpg';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HubIcon from '@mui/icons-material/Hub';
import LanguageIcon from '@mui/icons-material/Language';
import TerminalIcon from '@mui/icons-material/Terminal';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import About from './components/About';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';


function App() {
  return (
    <div
  className="min-h-screen w-full bg-cover bg-center bg-no-repeat lg:bg-fixed bg-blue-950 lg:bg-[url('/images/3.jpg')]"
>
      

      {/* Home Section */}
      <div
        id="home"
        className="min-h-screen flex flex-col justify-center items-center gap-8 px-4"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full border-4 border-gray-400 shadow-lg overflow-hidden animate-fadeIn">
  <img
    src={avatarImg}
    alt="Profile"
    className="w-full h-full md:h-max object-cover object-center"
  />
</div>


        <div className="text-center text-white flex flex-col gap-4 animate-fadeIn">
          <h3
            className="text-2xl font-semibold"
            style={{ textShadow: '1px 1px 2px #172554' }}
          >
            Hi, I'm ADILBEK TOKISHOV
          </h3>
          <h1
            className="text-4xl font-bold"
            style={{ textShadow: '1px 1px 2px #172554' }}
          >
            Full Stack Developer
          </h1>
        </div>

        <div
          id="skills"
          className="text-white text-center mt-4 lg:mt-0 lg:text-left lg:absolute lg:left-28 lg:top-1/2 lg:-translate-y-[35%] animate-fadeIn"
        >
          <h2
            className="text-4xl font-mono mb-4 border-b border-blue-950 text-yellow-300 pb-4"
            style={{ textShadow: '1px 1px 2px #172554' }}
          >
            Skills
          </h2>
          <ul className="space-y-2 text-lg font-mono tracking-wide">
            <li className="hover:text-blue-950 transform hover:scale-110 transition duration-300" style={{ textShadow: '1px 1px 2px #172554' }}>
              <HtmlIcon /> HTML / CSS
            </li>
            <li className="hover:text-blue-950 transform hover:scale-110 transition duration-300" style={{ textShadow: '1px 1px 2px #172554' }}>
              <CssIcon /> Bootstrap
            </li>
            <li className="hover:text-blue-950 transform hover:scale-110 transition duration-300" style={{ textShadow: '1px 1px 2px #172554' }}>
              <CssIcon /> Tailwind CSS
            </li>
            <li className="hover:text-blue-950 transform hover:scale-110 transition duration-300" style={{ textShadow: '1px 1px 2px #172554' }}>
              <JavascriptIcon /> JavaScript
            </li>
            <li className="hover:text-blue-950 transform hover:scale-110 transition duration-300" style={{ textShadow: '1px 1px 2px #172554' }}>
              <FilterVintageIcon /> React
            </li>
            <li className="hover:text-blue-950 transform hover:scale-110 transition duration-300" style={{ textShadow: '1px 1px 2px #172554' }}>
              <HubIcon /> Node.js
            </li>
            <li className="hover:text-blue-950 transform hover:scale-110 transition duration-300" style={{ textShadow: '1px 1px 2px #172554' }}>
              <LanguageIcon /> Express
            </li>
            <li className="hover:text-blue-950 transform hover:scale-110 transition duration-300" style={{ textShadow: '1px 1px 2px #172554' }}>
              <TerminalIcon /> PostgreSQL
            </li>
          </ul>
        </div>
      </div>

      {/* About Section */}
      <section
        id="About"
        className="w-full flex justify-center px-4 py-10  bg-opacity-80"
      >
        <About />
      </section>
      
      {/* Projects section */}
      <section id="Projects" className='w-full flex justify-center px-4 py-10  bg-opacity-80'>
        <MyProjects />
      </section>

      {/* Contact section */}
      <section id='Contact' className='w-full flex justify-center px-4 py-10  bg-opacity-80'>
        <Contact />
      </section>
      
    </div>
  );
}

export default App;
