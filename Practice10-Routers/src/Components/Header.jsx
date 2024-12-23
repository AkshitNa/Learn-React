import { Link } from "react-router-dom";
import mart from "../assets/JioMart.svg";

export const Header = () => {
  
  return (
    <div className="flex flex-row flex-wrap justify-between items-center px-4 py-2 bg-white shadow-md mb-4">
     
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
        </ul>
      </nav>
    </div>
  );
};
