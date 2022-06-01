import Home from "./pages/Home"
import Post from "./pages/Post"
import Blog from "./pages/Blog"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResponsiveAppBar from './components/AppBar';
import Footer from "./components/Footer2"

function App() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer style={{position:"fixed"}}/>
    </BrowserRouter>

  );
}

export default App ;