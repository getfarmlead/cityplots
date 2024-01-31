import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/pages/about/Aboutcontent';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
