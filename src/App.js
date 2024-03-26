import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/pages/about/Aboutcontent';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from "./components/Blog.js";
import NewBlog from './components/NewBlog.js';


function App() {
  return (
    <>
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/newblog" element={<NewBlog />} />
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
