
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import mainbanner from '../images/mainbanner.svg';
import mainbanner2 from '../images/mainbanner-svg.png';

function Slider() 
{
    return (
        <>
            <div className="home-slider">
                <img src={mainbanner2} className="img-fluid" />
            </div>
        </>
    );
}

export default Slider;
