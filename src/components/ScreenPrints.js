import '../css/App.css';

import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import { imageDescription } from '../imageDescription.js';

import Sidebar from './SideBar.js';

const ScreenPrints = () => {
    let home = false
    var imageName = []
    let category = 'screenprint'

    for (var i in imageDescription) {
        if (i.includes(category)) {
            imageName.push(i)
        }
    }
    const [currentImage, setCurrentImage] = useState(0);

    let imagePath = `images/${category}/${imageName[currentImage]}`

    let description = imageDescription[imageName[currentImage]]

    const handleButtonClick = (value) => {
        if (currentImage != 0 && value == -1) {
            setCurrentImage(currentImage - 1)
        }
        else if (currentImage != imageName.length - 1 && value == 1) {
            setCurrentImage(currentImage + 1)
        }
    }


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
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
            <Sidebar imageDescription={description} home={false} handleButtonClick={handleButtonClick} />
            </div>
        </div>
        <div style={{height:'100vh',width:'100vw', position: 'absolute', top: 0, right: 0}}>
            <div style={{position: 'relative', marginLeft: '18em', marginTop: '4em', marginRight: '0em', justifyContent: 'center', textAlign: 'center', marginRight:'7em'}}>
                <img src={imagePath} style={{position: 'relative', maxWidth: '100%', height:'45em', objectFit: 'scale-down', alignSelf: 'center', display: 'inline-block'}}/>
            </div>
        </div>
        </div>
    );
}

export default ScreenPrints;
