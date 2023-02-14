import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import userContext from "../context/context";

const Navbar = () => {
  const context = useContext(userContext);

  return (
    <nav className="flex justify-between px-2 py-4 text-white bg-sky-800">
      <div className="flex items-center">
        <h1 className="flex text-xl font-bold">
          <Link to="/" className="flex items-center">
            
            <BsGithub className="mr-2" /> GitHub Finder
          </Link>
        </h1>
        {/* <h2 className=" text-sm underline underline-offset-2 font-medium ml-4">
          {context.user?.email ? context.user.email : ""}
        </h2> */}
      </div>
      <div className="flex">
        {context.user ? (
          <p className="mx-2 cursor-pointer" onClick={() => context.setUser(null)}>
            Log out
          </p>
        ) : (
          <>
            <p className="mx-2">
              <Link to="/signin"> Sign In</Link>
            </p>
            <p className="mx-2">
              <Link to="/signup"> Sign Up</Link>
            </p>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
