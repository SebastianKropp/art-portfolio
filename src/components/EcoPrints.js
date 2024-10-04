import '../css/App.css';

import React, { useState } from 'react';
import { imageDescription } from '../imageDescription.js';
import { useEffect } from 'react';
import Sidebar from './SideBar';
import { isMobile } from 'react-device-detect';
const SelectedPhoto = ({imageName, category, currentImage}) =>{
    let imageObjects = []
    imageName.forEach((imageName, index) => {
        if (isMobile) {
            let imageTitle = imageDescription[imageName]["Title"]
            let imageBody = imageDescription[imageName]["Body"]
            imageObjects.push(
            <>
                <div style={{position: 'relative', justifyContent: 'center', textAlign: 'center'}}>
                    <img src={`images/${category}/${imageName}`} alt='artpiece' key={index} className='subImagesMobile'/>
                </div>
                <div style={{bottom: '4.5em', left: '2em', zIndex: 10, width: '74%'}}>
                <div style={{paddingTop: '1em'}}>
                  <div style={{fontFamily: 'bricolage-grotesque', fontStyle: 'bold', lineHeight: '1.8em', color: 'rgb(91, 87, 72)', padding: '1.5px', letterSpacing: '0.8px', fontWeight: '1000', fontSize: '11px'}}>
                    {imageTitle}
                  </div>
                </div>
                <div>
                  <div style={{fontFamily: 'PT Sans', fontStyle: 'normal', lineHeight: '1.8em', fontSize: '11px', color: 'rgb(91, 87, 72)', padding: '1.5px', marginTop: '0.5em', letterSpacing: '0.22px', fontWeight: '400', whiteSpace: 'pre-line', paddingBottom: '4em'}}>
                    {imageBody}
                </div>
                </div>
                </div>
            </>)
        }
        else {
            if (index !== currentImage) {
                imageObjects.push(<img style={{opacity: '0', position: 'absolute'}} key={index} src={`images/${category}/${imageName}`} alt='artpiece' className='subImages'/>)
            }
            else {
                imageObjects.push(<img id='change-animation' key={index} src={`images/${category}/${imageName}`} alt='artpiece' className='subImages'/>)
            }
        }
    })
    return (
        <>        
        {imageObjects}
        </>
    )
}
const EcoPrints = () => {
    window.scrollTo(0, 0);
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
        if (currentImage !== 0 && value === -1) {
            setCurrentImage(currentImage - 1)
        }
        else if (currentImage !== imageName.length - 1 && value === 1) {
            setCurrentImage(currentImage + 1)
        }
    }

    useEffect(() => {
        if (!isMobile) {
        const textTitle = document.getElementById('change-animation');
        textTitle.classList.add('fade');
        setTimeout(() => {
            textTitle.src = imagePath;
            textTitle.classList.remove('fade');
        }, 250)
        }   
        
    }, [currentImage, imagePath])

    if (isMobile) {
        return (
          <div className="Home" style={{width: '100vw', height: '90vh'}}>
            {/* left aligned flex column */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100vw', paddingLeft: ''}}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: ''}}>
                <Sidebar imageDescription={imageDescription} home={false} category="Eco Print"/>
                <SelectedPhoto imageName={imageName} category={category} currentImage={currentImage}/>
                </div>
                </div>
          </div>
        );
      }
    return (
        <div className="Home" style={{width: '100vw', height: '100vh'}}>
        {/* left aligned flex column */}
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
            <Sidebar imageDescription={description} home={false} handleButtonClick={handleButtonClick} />
            </div>
        </div>
        <div style={{height:'100vh',width:'100vw', position: 'absolute', top: 0, right: 0}}>
            <div style={{position: 'relative', marginLeft: '18em', marginTop: '4em', justifyContent: 'center', textAlign: 'center', marginRight:'7em'}}>
                <SelectedPhoto imageName={imageName} category={category} currentImage={currentImage}/>
            </div>
        </div>
        <div className='Pages' style={{position: 'absolute', 'bottom': 0, 'right': 0, padding: '1em', fontSize: '0.5em', paddingRight: '2em', opacity: '0.25'}}>
          Designed by Sebastian Kropp
        </div>
        </div>
    );
}

export default EcoPrints;
