// src/components/Contact.jsx
import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
  return (
    <section className="bg-[#0f111a] text-white py-10 px-4 sm:px-6 md:px-8 lg:px-10 animate-fadeIn">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-white">My contacts</h2>
          <div className="w-45 h-1 bg-yellow-500"></div>
          
          <div>
            <h3 className="text-lg font-semibold border-b border-yellow-500 inline-block mb-1">
              Phone:
            </h3>
            <p className="text-yellow-600 font-bold text-[21px]">+7775 953 68 77</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b border-yellow-500 inline-block mb-1">
              Address:
            </h3>
            <p className="text-yellow-600 font-bold text-[21px]">
              06 region Atyrau city, KAZAKHSTAN
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b border-yellow-500 inline-block mb-1">
              E-mail:
            </h3>
            <p className="text-yellow-600 font-bold text-[21px]">adilbektokishov@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b border-yellow-500 inline-block mb-1">
              Follow
            </h3>
            <div className="flex gap-4 mt-2">
              <a href="https://wa.me/+77759536877" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded hover:bg-yellow-500 transform hover:scale-110 transition duration-300">
                <WhatsAppIcon />
              </a>
              <a href="https://t.me/+77759536877" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded hover:bg-yellow-500 transform hover:scale-110 transition duration-300">
                <TelegramIcon />
              </a>
              <a href="https://www.instagram.com/adilbektokishov" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded hover:bg-yellow-500 transform hover:scale-110 transition duration-300">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/in/adilbek-tokishov-281b03372" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 flex items-center justify-center rounded hover:bg-yellow-500 transform hover:scale-110 transition duration-300">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 bg-[#141622] p-8 rounded-md shadow-lg">
          <form action="https://formspree.io/f/mnnvkqoo" method="POST" className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              name="message"
              rows="4"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded hover:bg-yellow-500 hover:text-black transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
