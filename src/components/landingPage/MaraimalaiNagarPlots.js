import React from 'react'
import LandingBanner from './common/LandingBanner';
import DetailsSection from './common/DetailsSection';
import Amenities from './common/Amenities';
import NearByLocation from './common/NearByLocation';
import LandingPageForm from './common/LandingPageForm';
import { Helmet } from 'react-helmet';

function MaraimalaiNagarPlots() {
  return (
    <div>
        <Helmet>
          <title>Maraimalai Nagar Plots | Plots Maraimalai Nagar – Cityplots Chennai</title>
          <meta property='og:title'
          content='Maraimalai Nagar Plots | Plots Maraimalai Nagar – Cityplots Chennai'/>
          <meta name='description'
          content='With Cityplots, you can explore premium plots in Maraimalai Nagar. The plots are conveniently located near Kilambakkam Bus Stand and Maraimalai Nagar Railway Station.'/>
          <meta property='og:description'
          content='With Cityplots, you can explore premium plots in Maraimalai Nagar. The plots are conveniently located near Kilambakkam Bus Stand and Maraimalai Nagar Railway Station.'/>
          <meta name="keywords" content="Maraimalai Nagar Plots, Plots Maraimalai Nagar, Plots in Maraimalai Nagar, Golden Plots Maraimalai Nagar, Housing Plots Maraimalai Nagar, Villa Plots Maraimalai Nagar, Global Plots Maraimalai Nagar, Luxury Plots Maraimalai Nagar, Smart Plots Maraimalai Nagar"/>
          <meta property="og:image" content="https://www.cityplots.io/cityplots-logo.png"/>
        </Helmet>
        <LandingBanner/>
        <DetailsSection/>
        <Amenities/>
        <NearByLocation/>
        <LandingPageForm/>
    </div>
  )
}

export default MaraimalaiNagarPlots