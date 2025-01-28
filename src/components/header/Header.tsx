import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <nav className="hidden md:flex space-x-6">
        <div
          className="font-bold text-gray-700 hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className="font-bold text-gray-700 hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </div>
      </nav>
    </div>
  );
};

export default Header;
