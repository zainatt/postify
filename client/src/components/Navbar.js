import React from "react";
import { Link } from "react-router-dom";
import logo from '../postify.png';

const Navbar = () => {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-teal-900 p-6  ">
        {/* <div className="float-right"> */}
        <div class="flex items-center flex-shrink-0 text-white mr-6 ">
          {/* <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg> */}
          <img src={logo} alt="Logo" className="rounded-full " />    
          <Link
            to="/"
            class="ml-6 block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4 text-lg"
          >
              Postify
          </Link>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto flex items-center ">
          <div class="text-sm lg:flex-grow ">
            <Link
              to="/signup"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4 text-lg"
            >
              SignUp
            </Link>
            <Link
              to="/login"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4 text-lg"
            >
              Login
            </Link>
            <Link
              to="/createpost"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4 text-lg"
            >
              Create Post
            </Link>
            <Link
              to="/posts"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white text-lg"
            >
              All Posts
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
