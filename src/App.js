import Home from "./pages/Home"
import Post from "./pages/Post"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResponsiveAppBar from './components/AppBar';
import Footeer from "./components/Footer2"

function App() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
      <Footeer />
    </BrowserRouter>

  );
}

export default App ;