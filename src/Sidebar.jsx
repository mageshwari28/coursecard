import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Menu
      </h2>

      <div className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>

        <Link to="/pos" className="hover:bg-gray-700 p-2 rounded">
          POS
        </Link>

        <Link to="/courses" className="hover:bg-gray-700 p-2 rounded">
          Courses
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
