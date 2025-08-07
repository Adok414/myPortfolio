import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
    {
    title: 'HTML, CSS',
    description: 'This project is built using only HTML and CSS.',
    link: 'https://adok414.github.io/my-first-site/',
    image: '/img/site2.png',
  },
  {
    title: "HTML, CSS, JavaScript",
    description: "New Year's gift online store",
    link: 'https://adok414.github.io/Mysite/',
    image: '/img/site1.png',
  },
  
  {
    title: 'React.js, Tailwind CSS, Node.js',
    description: 'Apple online store',
    link: 'https://your-weather-link.com',
    image: '/img/site3.png',
  },

  {
    title: "React.js, Tailwind CSS, Node.js",
    description: "Fishing online store",
    link: "https://fish-project-five.vercel.app/",
    image: "/img/site4.png",
  }
  
];

function MyProjects() {
  return (
    <div className="max-w-6xl mx-auto px-4 animate-fadeIn">
      <h2 className="text-4xl font-bold text-yellow-300 mb-10 text-center" style={{ textShadow: '1px 1px 2px #172554' }}>
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-200 bg-opacity-90 rounded-lg  shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            {/* Сурет */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Мәтін бөлім */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a href="https://github.com/Adok414?tab=repositories" 
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-amber-300 text-gray-500 font-semibold px-6 py-2 rounded-b-full hover:bg-gray-500 hover:text-amber-300 transition duration-800" > 
        Check My Github <GitHubIcon />
        </a>
      </div>

    </div>
  );
}

export default MyProjects;
