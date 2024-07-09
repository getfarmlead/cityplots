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
import MaraimalaiNagarPlots from './components/landingPage/MaraimalaiNagarPlots.js';
import ContactPage from './components/pages/about/Contactcontent.js'
import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
    <div className="App">
    <Header/>
    <Helmet>
          <link rel="canonical" href="https://www.cityplots.io/" />
          <title>
            Mobile Apps For Property Investors - Online AI Investment Portal |
            Cityplots
          </title>
          <meta
            name="description"
            content="Cityplots - Leading AI Driven Property Investment Portal for Approved Villas/Land/Plots for Sale, Housing Flats residential, commercial and industrial projects."
          />
          <meta
            name="keywords"
            content="CMDA Approved Residential Plots, Ultra-Luxury Villas,
            Premium Villa for Sale, Plot for Sale, Land for Sale, CMDA Approved plots, Approved plots
            near me, Top Real Estate Developer in South India, Residential projects, Commercial
            Projects, Industrial Projets, Best Real Estate Developers, Top Builders, Book Villas,
            Independent Villas for sale, Cityplots"
          />
          <meta
            property="og:title"
            content="Online AI Investment Portal - Mobile Apps For Property Investors | Cityplots"
          />
          <meta property="og:site_name" content="Cityplots" />
          <meta property="og:url" content="https://www.cityplots.io/" />
          <meta
            property="og:description"
            content="Cityplots - Leading AI Driven Property Investment Portal for Approved Villas/Land/Plots for Sale, Housing Flats residential, commercial and industrial projects."
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content="https://www.cityplots.io/cityplots-logo.png"
          />
    </Helmet>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/maraimalainagar-plots" element={<MaraimalaiNagarPlots />} />
        <Route path="/contact-us" element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
