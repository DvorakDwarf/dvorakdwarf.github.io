import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Blog_List from './pages/blog_list/List'
import Devblog from './components/devblog/Devblog';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/devblog" element={<Blog_List />}></Route>
        <Route path="/devblog/:slug" element={<Devblog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
