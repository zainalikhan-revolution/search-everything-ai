// search-everything-ai/search-everything-ai-main/src/pages/NotFound.tsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      `⚠️ 404 Error: Tried accessing "${location.pathname}" but no route was found.`
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          ⬅️ Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

