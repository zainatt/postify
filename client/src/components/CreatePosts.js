import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePosts = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const handlepost = (e) => {
    e.preventDefault();

    const Post = {
      title: title,
      description: description,
    };
    axios
      .post("http://localhost:5000/posts/create", Post)
      // .post("/api/articles/create", newPost)
      // .then((res) => res.json())
      .then((data) => {
        // console.log(user.username);
        console.log(data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div>
        <div class="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
          <div class="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
            <div class="mb-4">
              <h1 class="font-serif text-3xl font-bold underline decoration-gray-400">
                Create Post
              </h1>
            </div>

            <div class="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
              <form method="POST" onSubmit={handlepost}>
                <div>
                  <label
                    class="block text-sm font-bold text-gray-700"
                    for="title"
                  >
                    Title
                  </label>

                  <input
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    name="email"
                    placeholder="180"
                  />
                </div>

                <div class="mt-4">
                  <label
                    class="block text-sm font-bold text-gray-700"
                    for="password"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="4"
                    onChange={(e) => setdescription(e.target.value)}
                    placeholder="400"
                  ></textarea>
                </div>

                <div class="flex items-center justify-start mt-4 gap-x-2">
                  <button
                    type="submit"
                    class="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePosts;
