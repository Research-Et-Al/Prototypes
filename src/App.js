
import Home from "./pages/Home/Home"
import Post from "./pages/Post/Post"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResponsiveAppBar from './components/AppBar';
// import Footeer from "./components/Footer2"
import Login from "./pages/Login/Login"
import Footer from "./components/Footer2";
import Register from "./pages/Register/Register";
import Blog from "./pages/Blog"
function App() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<Post />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer style={{position:"fixed"}}/>
    </BrowserRouter>

  );
}

export default App ;