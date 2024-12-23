import { useState } from "react";
import { Link } from "react-router-dom";
import mart from "../assets/JioMart.svg";
import { useMyData } from "../Utils/Provider";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {fakeLogin, setFakeLogin} = useMyData();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex items-center space-x-2 mb-3">
        <Link to="/" className="flex items-center">
          <img src={mart} alt="LinkedInMart" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-800 ml-2">
            LinkedInMART
          </span>
        </Link>
      </div>

      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-row justify-between px-2">
          <button
            type="submit"
            className="w-full mx-2 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
          <button
            className="w-full mx-1 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => {setFakeLogin(!fakeLogin)}}
          >
            Fake Login
          </button>
          </div>
          
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500">
            Sign up {(fakeLogin) ? "Fake Login True" : "Fake Login False"}
          </a>
        </p>
      </div>
    </div>
  );
};
