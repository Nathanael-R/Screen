import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Search from "./Search";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    setNavOpen(!navOpen);
  };
  const sideBar = (
    <div className="lg:hidden flex flex-col bg-black  h-[100vh] fixed w-[60%] top-0 z-10 right-0 items-center gap-10 py-4">
      <button
        className="border-2 border-white text-white w-[90%] p-3 mb-15"
        onClick={handleClick}
      >
        Close
      </button>
      <Search />
      <ul className="lg:hidden flex gap-10 flex-col font-bold text-2xl text-white mt-7">
        <Link to="/">
          <li className="">Home</li>
        </Link>
        <Link to="/favorites">
          <li className="">Favorites</li>
        </Link>
        <Link to="/movies">
          <li className="">Movies</li>
        </Link>
      </ul>
      {user?.email ? (
        <div className="w-[80%] mt-10 cursor-pointer">
          <button
            className="text-white bg-red-500 p-3 w-[100%] rounded-full font-bold text-xl cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="w-[80%] mt-10 cursor-pointer">
          <Link to="/login">
            <button className="text-white bg-yellow-500 p-3 w-[100%] rounded-full font-bold text-xl cursor-pointer">
              Log In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
  return (
    <nav className="flex items-center justify-between py-5 md:px-16 sm:px-8 bg-black px-4 relative">
      <Link to="/">
        <h1 className="text-yellow-500 font-extrabold text-3xl md:text-4xl cursor-pointer">
          SCREENGLUE
        </h1>
      </Link>
      <FaBars
        className="lg:hidden peer text-white cursor-pointer hover:text-amber-400"
        size={35}
        onClick={handleClick}
      />
      {navOpen && sideBar}

      <ul className="hidden lg:flex gap-20 text-white font-bold text-xl">
        <Link to="/">
          <li className="">Home</li>
        </Link>
        <Link to="/favorites">
          <li className="">Favorites</li>
        </Link>
        <Link to="/movies">
          <li className="">Movies</li>
        </Link>
      </ul>
      {user?.email ? (
        <div className="hidden relative lg:flex items-center gap-4">
          <Search />
          <button className="peer text-white">
            <FaUserCircle size={35} />
          </button>
          <div
            className="hidden peer-hover:flex hover:flex
         flex-col bg-white drop-shadow-lg absolute z-10 right-0 top-10"
          >
            <a className="px-5 py-3 hover:bg-gray-200 text-center" href="#">
              About Us
            </a>
            <a className="px-5 py-3 hover:bg-gray-200 text-center" href="#">
              Contact Us
            </a>
            <button
              className="px-5 py-3 hover:bg-red-600 hover:text-white w-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="md:flex hidden items-center gap-4">
          <Search />
          <Link to="/login">
            <button className="text-white bg-yellow-500 px-9 py-2 rounded-full font-bold text-xl">
              Log In
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
