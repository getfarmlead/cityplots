import React,{useEffect} from "react";
import Slider from './Slider';
import Productslider from './Productslider';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
    return (
        <>
        <Slider/>
        <Productslider/>
        </>
    );
}

export default Home;
