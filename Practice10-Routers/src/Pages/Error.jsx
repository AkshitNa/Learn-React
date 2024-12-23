import { Link} from 'react-router-dom';


export const Error = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-800 mb-2">Oops! Page not found.</p>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-green-600 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};
