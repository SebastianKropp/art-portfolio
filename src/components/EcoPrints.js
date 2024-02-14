import '../css/App.css';

import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import { imageDescription } from '../imageDescription.js';
import { useEffect } from 'react';
import Sidebar from './SideBar';
const SelectedPhoto = ({imageName, category, currentImage}) =>{
    let imageObjects = []
    console.log(imageName[0])
    imageName.forEach((imageName, index) => {
        if (index != currentImage) {
            imageObjects.push(<img style={{opacity: '0', position: 'absolute'}} src={`images/${category}/${imageName}`} className='subImages'/>)
        }
        else {
            imageObjects.push(<img id='change-animation' src={`images/${category}/${imageName}`} className='subImages'/>)
        }
    })
    console.log(imageObjects)
    return (
        <>        
        {imageObjects}
        </>
    )
}
const EcoPrints = () => {
    let home = false
    var imageName = []
    let category = 'ecoprint'

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

    useEffect(() => {
        console.log('Changing classes')
        const textTitle = document.getElementById('change-animation');
        textTitle.classList.add('fade');
        setTimeout(() => {
            textTitle.src = imagePath;
            textTitle.classList.remove('fade');
        }, 250)
        
    }, [currentImage])

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
                <SelectedPhoto imageName={imageName} category={category} currentImage={currentImage}/>
            </div>
        </div>
        </div>
    );
}

export default EcoPrints;
