import { Link } from "react-router-dom";

export const Footer = () => {
    
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> &copy; 2024 <Link to="/" className="hover:underline">IMdB-Movies</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://www.instagram.com/nauti_hit25/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/nautiyalakshit777/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
              </li>
              <li>
                  <a href="https://leetcode.com/u/AkshitNautiyal7/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LeetCode</a>
              </li>
              <li>
                  <a href="https://github.com/AkshitNa" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
              </li>
              
          </ul>
      </footer>
  )
}
