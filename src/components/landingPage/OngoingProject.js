import React from 'react'
import LandingBanner from './common/LandingBanner';
import DetailsSection from './common/DetailsSection';
import Amenities from './common/Amenities';
import NearByLocation from './common/NearByLocation';
import LandingPageForm from './common/LandingPageForm';

function Landingpage() {
  return (
    <div>
        <LandingBanner/>
        <DetailsSection/>
        <Amenities/>
        <NearByLocation/>
        <LandingPageForm/>
    </div>
  )
}

export default Landingpage