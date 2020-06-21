import React from 'react';
import image from '../../hot-onion-restaurent-resources-master/bannerbackground.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            
            <img src={image} alt=""/>
            <h2 className="text">Best food waiting for your belly</h2>
        </div>
    );
};

export default Banner;