import NavBar from "./Components/Navigation";
import Posts from "./Components/Posts";
import "./App.css";
import Landing from "./Components/LandingPage";
import { Routes, Route } from "react-router-dom";
import PostPage from "./Components/PostPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
