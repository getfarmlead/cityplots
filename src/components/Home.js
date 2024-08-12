import React,{useEffect} from "react";
import Slider from './Slider';
import Productslider from './Productslider';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);

    });
    return (
        <>
        <Helmet>
              <link rel="canonical" href="https://www.cityplots.io/"/>
              <meta property="og:site_name" content="Cityplots" />
              <meta property="og:url" content="https://www.cityplots.io/" />
              <title>
                Mobile Apps For Property Investors - Online AI Investment Portal | Cityplots
              </title>
              <meta
                property="og:title"
                content="Online AI Investment Portal - Mobile Apps For Property Investors | Cityplots"
              />
              <meta
                name="description"
                content="Cityplots - Leading AI Driven Property Investment Portal for Approved Villas/Land/Plots for Sale, Housing Flats residential, commercial and industrial projects."
              />
              <meta
                property="og:description"
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
                property="og:image"
                content="https://www.cityplots.io/cityplots-logo.png"
              />
        </Helmet>
        <Slider/>
        <Productslider/>
        </>
    );
}

export default Home;
