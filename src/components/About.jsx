import React from 'react';
import avatarImg from '../../images/portfolio.jpg'; // өз суретіңнің дұрыс жолын жаз

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center gap-10 p-6  backdrop-blur-xs text-white  rounded-lg lg:rounded-l-full shadow-2xl max-w-6xl mx-auto mt-10 animate-fadeIn"
    >
      {/* Сурет */}
      <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-lg lg:rounded-l-full overflow-hidden shadow-md">
  <img
    src={avatarImg}
    alt="Profile"
    className="w-full h-full md:h-max object-cover"
  />
</div>


      {/* Мәтін */}
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold text-orange-400 text-center">
          Web Developer and Technology Creator
        </h1>
        <p>
          I have 1 year of experience in web development, and I specialize in
          building responsive, accessible, and high-performance web applications
          using modern technologies.
        </p>
        <p>
          I am passionate about crafting elegant solutions to complex problems
          and constantly learning new technologies and methods to stay at the
          forefront of the ever-evolving web landscape.
        </p>
        <p>
          I completed the <strong>IT Expert</strong> course at{' '}
          <strong>Amjilt Cyber Academy</strong>, and I have a{' '}
          <strong>Meta Full-Stack Developer</strong> certificate.
        </p>

        {/* Download CV кнопка */}
        <a
          href="/Adilbek.pdf" 
          download
          className="inline-block mt-4 bg-orange-400 text-black font-semibold px-6 py-2 rounded hover:bg-orange-600 transition duration-300"
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
};

export default About;
