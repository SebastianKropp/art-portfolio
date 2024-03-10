import '../css/App.css';

import React from 'react';

import aboutDescription from '../aboutDescription.js';
import { isMobile } from 'react-device-detect';
import Sidebar from './SideBar';

const About = () => {
    let imagePath = `images/about/about.jpg`
    if (isMobile) {
        return (
            <div className="Home" style={{width: '100vw', height: '90vh'}}>
        {/* left aligned flex column */}
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100vw',}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'auto'}}>
            <Sidebar imageDescription={''} home={true} handleButtonClick={''} />
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', paddingLeft: ''}}>
            <div style={{position: 'relative', justifyContent: 'center', textAlign: 'center'}}>
            <img src={'images/about/aboutMobile.jpg'} alt='biophoto' style={{position: 'relative', width: '100%', height: '15em', objectFit: 'scale-down', alignSelf: 'center', display: 'inline-block', paddingTop: '1em',  paddingBottom: '2em',marginRight:'39.5em'}}/>
            </div>
            <div className="Pages" style={{whiteSpace: 'pre-line', width: '65%', fontSize: '15px', paddingBottom: '2em'}}>
            {aboutDescription}
            </div>
        </div>
        </div>
        </div>
        </div>
        )
    }
    return (
        <div className="Home" style={{width: '100vw', height: '100vh'}}>
        {/* left aligned flex column */}
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', width: 'auto', paddingLeft: ''}}>
            <Sidebar imageDescription={''} home={true} handleButtonClick={''} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
            
            <img src={imagePath} alt='biophoto' style={{position: 'relative', width: '100%', height:'45em', objectFit: 'cover', objectPosition: '38em 10em', marginTop: '-6em', right: '20em'}}/>
        <div className="Pages" style={{marginTop: '3em', width: '55%', marginLeft: '19em', whiteSpace: 'pre-line', marginBottom: '0.25em', fontSize: '15px', textAlign: 'left'}}>
        {`Delaney Stewart
        Artist • Printmaker`}

        </div>
        <div className="Pages" style={{marginTop: '1em', width: '55%', marginLeft: '19em', whiteSpace: 'pre-line', marginBottom: '3em', fontSize: '15px', textAlign: 'left'}}>
            {aboutDescription}
        </div>
        </div>
        </div>
        </div>
        

    );
}

export default About;
