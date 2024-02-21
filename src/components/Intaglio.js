import '../css/App.css';

import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import { imageDescription } from '../imageDescription.js';
import { useEffect } from 'react';
import Sidebar from './SideBar';
import { isMobile } from 'react-device-detect';
const SelectedPhoto = ({imageName, category, currentImage}) =>{
    let imageObjects = []
    console.log(imageName[0])
    imageName.forEach((imageName, index) => {
        if (isMobile) {
            let imageTitle = imageDescription[imageName]["Title"]
            let imageBody = imageDescription[imageName]["Body"]
            imageObjects.push(
            <>
                <div style={{position: 'relative', justifyContent: 'center', textAlign: 'center'}}>
                    <img src={`images/${category}/${imageName}`} className='subImagesMobile'/>
                </div>
                <div style={{bottom: '4.5em', left: '2em', zIndex: 10, width: '74%'}}>
                <div style={{paddingTop: '1em'}}>
                  <div style={{fontFamily: 'bricolage-grotesque', fontStyle: 'bold', lineHeight: '1.8em', fontSize: '11px', color: 'rgb(91, 87, 72)', padding: '1.5px', fontWeight: '400', letterSpacing: '0.8px', fontWeight: '1000', fontSize: '11px'}}>
                    {imageTitle}
                  </div>
                </div>
                <div>
                  <div style={{fontFamily: 'PT Sans', fontStyle: 'normal', lineHeight: '1.8em', fontSize: '11px', color: 'rgb(91, 87, 72)', padding: '1.5px', marginTop: '0.5em', fontWeight: '400', letterSpacing: '0.22px', fontWeight: '600', whiteSpace: 'pre-line', paddingBottom: '4em'}}>
                    {imageBody}
                </div>
                </div>
                </div>
            </>)
        }
        else {
            if (index != currentImage) {
                imageObjects.push(<img style={{opacity: '0', position: 'absolute'}} src={`images/${category}/${imageName}`} className='subImages'/>)
            }
            else {
                imageObjects.push(<img id='change-animation' src={`images/${category}/${imageName}`} className='subImages'/>)
            }
        }
    })
    console.log(imageObjects)
    return (
        <>        
        {imageObjects}
        </>
    )
}
const Intaglio = () => {
    let home = false
    var imageName = []
    let category = 'intaglio'

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
        if (!isMobile) {
        console.log('Changing classes')
        const textTitle = document.getElementById('change-animation');
        textTitle.classList.add('fade');
        setTimeout(() => {
            textTitle.src = imagePath;
            textTitle.classList.remove('fade');
        }, 250)
        }   
        
    }, [currentImage])

    let imageTitle = imageDescription["Title"]
    let imageBody = imageDescription?.["Body"]? imageDescription["Body"] : null;

    if (isMobile) {
        console.log('mobile detected')
        return (
          <div className="Home" style={{width: '100vw', height: '90vh'}}>
            <Helmet>
              <style>{'body { background-color: #fcfcf6; }'}</style>
              <meta charSet="utf-8" />
              <link rel="canonical" href="https://delaneystewart.com" />
            </Helmet>
            
            {/* left aligned flex column */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100vw', paddingLeft: ''}}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: ''}}>
                <Sidebar imageDescription={imageDescription} home={true}/>
                <SelectedPhoto imageName={imageName} category={category} currentImage={currentImage}/>
                </div>
                </div>
          </div>
        );
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
                <SelectedPhoto imageName={imageName} category={category} currentImage={currentImage}/>
            </div>
        </div>
        </div>
    );
}

export default Intaglio;
