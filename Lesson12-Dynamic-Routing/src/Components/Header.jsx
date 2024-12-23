import { Link } from "react-router-dom";
import mart from "../assets/JioMart.svg";
import { useEffect, useState } from "react";

export const Header = () => {

  //<1> Create state
  const [darkMode, setDarkMode] = useState(false);

  //<2> useEffect to toggle DarkMode on everytime the Button is Clicked
   useEffect(() => {
   
    //This functionality is provided by TailwindCSS
    if(darkMode){
      document.documentElement.classList.add('dark'); //add dark mode class
    } else {
      document.documentElement.classList.remove('dark'); //remove dark mode class
    }

    //Now className = "dark:text-white bg-black" this type of pattern will be followed
  }, [darkMode]);
  
  return (
    <div className="flex flex-row flex-wrap justify-between items-center px-4 py-2 shadow-md mb-4 bg-white">
     
      {/* Logo and Brand */}
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center">
          <img src={mart} alt="LinkedInMart" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-800 ml-2">LinkedInMART</span>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-4 bg-green-300 border-black border-2 rounded-lg px-4 py-2">
          <li className="hover:bg-gray-400 p-2 rounded transition duration-200">
            <Link to="/" className="text-gray-800 font-medium">Home</Link>
          </li>
          <li className="hover:bg-gray-400 p-2 rounded transition duration-200">
            <Link to="/about" className="text-gray-800 font-medium">About</Link>
          </li>
          <li className="hover:bg-gray-400 p-2 rounded transition duration-200">
            <Link to="/form" className="text-gray-800 font-medium">Form</Link>
          </li>
          <li className="hover:bg-gray-400 p-2 rounded transition duration-200">
            <Link to="/games" className="text-gray-800 font-medium">Games</Link>
          </li>
          <li className="hover:bg-gray-400 p-2 rounded transition duration-200">
            <Link to="/clock" className="text-gray-800 font-medium">Clock</Link>
          </li>

           {/* Dark Mode Button Using FlowBite */}
          <button onClick={() => setDarkMode(!darkMode)} data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
           {darkMode ? " Dark " : " Light "} { darkMode ? (<svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>) : (<svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>) }
          </button>

        </ul>
      </nav>
    </div>
  );
};
