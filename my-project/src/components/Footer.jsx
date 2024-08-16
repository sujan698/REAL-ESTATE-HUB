import React from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBuilding
  , FaMobile, FaFax, FaArrowUp, FaMoon, FaSun} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from 'react-icons/io';
import prop7 from '../Captures/images/prop7.jpg'
import prop8 from '../Captures/images/prop8.jpg'
const Footer = () => {
  const { darkMode,toggleDarkMode} = useDarkMode();

  return (
    <>
      <footer
        className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
          We pride ourselves on delivering accurate, up-to-date information and providing a seamless, user-friendly experience.
           Our goal is to connect buyers, sellers, and renters with the best opportunities in the market, helping them make informed decisions with confidence.
          </p>
          <div id="social-icons" className=" flex justify-start items-center gap-4 mt-4">
            <div className="p-3 rounded-xl  bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:scale-110 transition-transform duration-300">
            <FaFacebookF className="size-5"/>
            </div>
            <div className="p-3 rounded-xl  bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:scale-110 transition-transform duration-300">
            <FaInstagram className="size-5"/>
            </div>
            <div className="p-3 rounded-xl  bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:scale-110 transition-transform duration-300">
            <FaTwitter className="size-5"/>
            </div>
            <div className="p-3 rounded-xl  bg-white hover:bg-red-600 hover:text-white
            cursor-pointer transform hover:scale-110 transition-transform duration-300">
            <FaYoutube className="size-5"/>
            </div>
          </div>
          <h1 className="text-white mt-8"> copyright Real Estate, All Rights Reserved</h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="flex justify-center items-center gap-3">
           <FaBuilding className="text-white size-5"/>
           <p className="text-slate-200">Biratnagar Metropolitan City-10, Sahanti-Chok, Morang, Nepal</p>
          </div>
          <div className="flex justify-center items-center gap-3">
           <FaMobile className="text-white size-5"/>
           <p className="text-slate-200">+98 1456 7516</p>
          </div>
          <div className="flex justify-center items-center gap-3">
           <FaFax className="text-white size-5"/>
           <p className="text-slate-200">+97 2345 5678 </p>
          </div>
          <div className="flex justify-center items-center gap-3">
           <IoMdMail className="text-white size-5"/>
           <p className="text-slate-200">mail22@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>
          <div className="flex justify-center items-center gap-4"></div>
          <img src={prop7} alt="" className="w-[120px] rounded-xl transform 
           hover:scale-110 cursor-pointer transition-transform duration-300" />
           <div>
            <h1 className="text-lg text-white">Villa with amazing view</h1>
            <p className="text-slate-400">$ 499.99</p>
           </div>
           <div className="flex justify-center items-center gap-4"></div>
          <img src={prop8} alt="" className="w-[120px] rounded-xl transform 
           hover:scale-110 cursor-pointer transition-transform duration-300" />
           <div>
            <h1 className="text-lg text-white">Smart form swimming pool</h1>
            <p className="text-slate-400">$ 299.99</p>
           </div>
        </div>
      </footer>

      {/* slide to top buttom start here */}
      <div id="icon-box" className="bg-red-600 p-4 rounded-full hover:bg-black
      cursor-pointer fixed lg:bottom-6 right-6">
        <Link to="hero" spy={true} offset={-100} smooth={true}>
        <FaArrowUp className="text-white size-6"/>
        </Link>
      </div>
      {/* dark mode toggle section */}
      <div>
        <button onClick={toggleDarkMode} className="flex items-center p-2
        rounded-full bg-red-600 fixed lg:top-60 w-10 h-10 right-6 top-6">
          {darkMode ? <FaMoon size={40} className="text-white " /> :<FaSun size={40} className="text-white"/>}
        </button>
      </div>
    </>
  );
};

export default Footer;
