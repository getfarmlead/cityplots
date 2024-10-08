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
import MaraimalaiNagarPlots from './components/landingPage/MaraimalaiNagarPlots.js';
import ContactPage from './components/pages/about/ContactPage.js';
import NotFound from './components/404.js';

function App() {
  return (
    <>
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/blogs/:slug" element={<Blog />} />
        <Route path="/blogs" element={<NewBlog />} />
        <Route path="/maraimalainagar-plots" element={<MaraimalaiNagarPlots />} />
        <Route path="/contact-us" element={<ContactPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
