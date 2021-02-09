import React from 'react';
import Landing from './Landing/Landing';
import AboutUs from './AboutUs/AboutUs';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import Partners from './Partners/Partners';
import Gallery from './Gallery/Gallery';

const home = () => {
    return (
        <div className="container-xl">
            <Landing />
            <AboutUs />
            <WhatWeDo />
            <Partners />
            <Gallery />
        </div>
    )
};


export default home;
