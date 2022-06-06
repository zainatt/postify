import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

const Posts = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  // const location = useLocation();
  // const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/posts/all" + search);
      console.log(res.data);
      setData(res.data);
    };
    getPost();
  }, [search]);


  return (
    <div>
      <Navbar />

      {data.map?.((post) => {
        return (
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-12 lg:px-20 lg:w-1/2 lg:h-1/2 container  mx-auto px-4 md:px-12">
            <div className="Posts overflow-hidden rounded-lg shadow-lg">
              <span className="title no-underline  text-black text-lg ">
                {" "}
                <h6 className=" font-bold">Title: {post.title}</h6>
                <h6>Description: {post.description}</h6>
                <DeleteIcon
                  className="float-right hover:cursor-pointer"
                />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
