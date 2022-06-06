import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-2xl text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Login</h1>

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-teal-700 text-white hover:bg-teal-600 focus:outline-none my-1"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
