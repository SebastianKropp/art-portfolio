import '../css/App.css';

import React from 'react';

import aboutDescription from '../aboutDescription.js';
import { isMobile } from 'react-device-detect';
import Sidebar from './SideBar';

const About = () => {
    window.scrollTo(0, 0);
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
            <img src={'images/about/about.jpg'} alt='biophoto' style={{position: 'relative', maxWidth: '80%',maxHeight: '60%', paddingTop: '1em', objectFit: 'scale-down', alignSelf: 'center'}}/>
            </div>
            <div className="Pages" style={{marginTop: '1.5em', width: '75%', marginLeft: '0em', whiteSpace: 'pre-line', marginBottom: '0.75em', fontSize: '15px', textAlign: 'left'}}>
        {`Artist • Printmaker`}

        </div>
            <div className="Pages" style={{whiteSpace: 'pre-line', width: '75%', fontSize: '15px', paddingBottom: '4em'}}>
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
            
            <img src={imagePath} alt='biophoto' style={{position: 'relative', maxWidth: '80%',maxHeight: '60%', paddingTop: '7%', objectFit: 'scale-down', alignSelf: 'center'}}/>
        <div className="Pages" style={{marginTop: '3em', width: '55%', marginLeft: '19em', whiteSpace: 'pre-line', marginBottom: '0.25em', fontSize: '15px', textAlign: 'left'}}>
        {`Delaney Stewart
        Artist • Printmaker`}

        </div>
        <div className="Pages" style={{marginTop: '1em', width: '55%', marginLeft: '19em', whiteSpace: 'pre-line', marginBottom: '3em', fontSize: '15px', textAlign: 'left'}}>
            {aboutDescription}
        </div>
        </div>
        </div>
        <div className='Pages' style={{'zIndex': 1, position: 'absolute', 'bottom': 0, 'right': 0, padding: '1em', fontSize: '0.5em', paddingRight: '2em', opacity: '0.25'}}>
          Designed by Sebastian Kropp
        </div>
        </div>
        

    );
}

export default About;
