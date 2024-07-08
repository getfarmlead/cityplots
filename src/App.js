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
import OngoingProject from './components/landingPage/OngoingProject.js';
import ContactPage from './components/pages/about/Contactcontent.js'


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
        <Route path="/ongoingproject" element={<OngoingProject />} />
        <Route path="/contact-us" element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
