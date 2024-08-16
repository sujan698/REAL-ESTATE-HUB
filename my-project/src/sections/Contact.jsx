import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
      <section
        id="contact"
        className={`${
          darkMode ? 'dark bg-gray-800' : 'light bg-red-100'
        } lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 py-20 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
        >
          <h1 className="text-2xl text-black dark:text-white">Send us a Message</h1>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            type="email"
            placeholder="Enter your valid email"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            type="number"
            placeholder="Enter your valid mobile number"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter your message..."
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          ></textarea>
          <button
            className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer"
          >
            SEND EMAIL
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1 data-aos="zoom-in" data-aos-delay="200" className="text-red-500 dark:text-white">
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
           We’re here to help you navigate the world of real estate with ease. Whether you have a question about a property, need guidance
            through the buying or renting process, or are looking for professional advice, our team  is ready to assist you.
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-xl text-gray-600 text-justify dark:text-white"
          >
            We value your inquiries and feedback. Don’t hesitate to get in touch with us for any reason. 
            Let’s work together to find the perfect property for you!
          </p>
          <button
            className="bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer"
          >
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
