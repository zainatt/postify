import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePosts from "./components/CreatePosts";
import Posts from "./components/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="createpost" element={<CreatePosts />} />
        <Route path="posts" element={<Posts />} />
        {/* <Route path="posts" element={<Posts />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
