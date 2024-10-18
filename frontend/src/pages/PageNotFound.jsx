/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <div className="text-9xl font-bold text-gray-400">404</div>
      <div className="text-2xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </div>
      <div className="text-gray-600 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default PageNotFound;
