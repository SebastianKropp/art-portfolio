import '../css/App.css';

import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import aboutDescription from '../aboutDescription.js';

import Sidebar from './SideBar';

const About = () => {
    let home = false
    var imageName = ''
    let category = 'about'


    let imagePath = `images/about/about.jpg`

    return (
        <div className="Home" style={{width: '100vw', height: '100vh'}}>
        <Helmet>
            <style>{'body { background-color: #fcfcf6; }'}</style>
            <meta charSet="utf-8" />
            <title>Beko</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        {/* left aligned flex column */}
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', width: 'auto', paddingLeft: ''}}>
            <Sidebar imageDescription={''} home={true} handleButtonClick={''} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
            
            <img src={imagePath} style={{position: 'relative', width: '100%', height:'45em', objectFit: 'cover', objectPosition: '38em 10em', marginTop: '-6em', right: '20em'}}/>
        <div className="Pages" style={{marginTop: '3em', width: '55%', marginLeft: '19em', whiteSpace: 'pre-line', marginBottom: '3em', fontSize: '15px'}}>
            {aboutDescription}
        </div>
        </div>
        </div>
        </div>
        

    );
}

export default About;
