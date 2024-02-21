import '../css/App.css';

import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import Title from '../images/TitleNoWords.PNG';
//import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { isMobile } from 'react-device-detect';
import { homeImage } from '../imageDescription.js';

import Sidebar from './SideBar';


const GridPhoto = ({index, path, isZoomed, setIsZoomed}) => {

  const handleZoomClick = (index) => {
    setIsZoomed({zoomState: !isZoomed.zoomState, index: index});
  };

  let imageSize = '20vw';
  let padding = '0.1vw';

  if (isMobile) {
    imageSize = '45vw';
    padding = '0.5vw';
  }
  return(
    <img
      src={path} // Assuming images are in the "art" folder
      alt={"image" + `${index}`}
      style={{ width: imageSize, height: imageSize, cursor: 'pointer', objectFit: 'cover', backgroundSize: 'contain', margin: padding}}
      onClick={() => handleZoomClick(index)}
    />
  )
}

const ZoomedImage = ({index, setIsZoomed}) => {

  const handleZoomClick = (zoomState, index) => {
    setIsZoomed({zoomState: zoomState, index: index});
  };

  const imageList = [];
  const imageTypes = {"litho": 4, "screenprint": 2, "intaglio": 8, "ecoprint": 5, "relief": 1}
  for (var category in imageTypes) {
    for (var i = 0; i < imageTypes[category]; i++) {
      imageList.push(`images/${category}/${category + i}.jpg`)
    }
  }

  let width = '25vw';
  let height = 'auto';
  let textWidth = '50vw';
  if (isMobile) {
    width = '50vw';
    height = 'auto';
    textWidth = '80vw';
  }

  return(
    <div 
      className='zoomed-background'>
      <div className='zoomed-photo'>
      <div 
        style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh'}}
        onClick={() => handleZoomClick(false, 0)}>
        <div style={{position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{padding: "5vw", opacity: '75%', position: 'relative'}} onClick={(event) => event.stopPropagation() && handleZoomClick(true, index - 1)}>
            <FontAwesomeIcon style={{width: '5vw', height: "25%", color: '#ddddd0', position: 'relative'}} icon={faArrowLeft} onClick={() => handleZoomClick(true, index - 1)}/>
          </div>
          <img
            src={imageList[index]} 
            alt="zoomedImage" 
            style={{ width: width, height: height, position: 'relative'}}
            onClick={(event) => event.stopPropagation()}/>
          <div style={{padding: "5vw", opacity: "75%", position: 'relative'}} onClick={(event) => event.stopPropagation() && handleZoomClick(true, index + 1)}>
            <FontAwesomeIcon style={{width: '5vw', height: "25%", color: '#ddddd0', position: 'relative'}} icon={faArrowRight} onClick={() => handleZoomClick(true, index + 1)}/>
          </div>
        </div>
        <div className='zoomed-title-text' id="text-title">
          Lorem ipsum dolor
        </div>
        <div className='zoomed-text' style={{width: textWidth}} id='text-body'>
        sit amet, consectetur adipiscing elit. Morbi sagittis viverra risus, vitae finibus lorem vestibulum quis. Integer erat mauris, lobortis tempor porttitor nec, gravida vitae massa. Donec tincidunt gravida aliquet. Curabitur justo orci, tincidunt in faucibus et, lobortis sit amet nisi. Proin ultrices porttitor sem sit amet cursus. (2007)
        </div>
      </div>
    </div>
  </div>
  )
}

const Home = () => {
  const navigate = useNavigate()

  var imageName = ''
  for (var i in homeImage) {
    imageName = i;

  }
  let directory = imageName.split('.')[0].slice(0, -1).toLowerCase()
  let homeImagePath = `images/${directory}/${imageName}`
  let imageDescription = homeImage[imageName]
  let home = true
  let imageTitle =  "\'japanese lotus\’ 2023"
  let imageBody = imageDescription?.["Body"]? imageDescription["Body"] : null;
  function handleButtonClick (value)  {
    return
  }
  const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
   }
   window.addEventListener('resize', documentHeight)
   documentHeight()



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
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: ''}}>
            <Sidebar imageDescription={imageDescription} home={true}/>
            <div style={{textAlign: 'center', }}>
              <img src={'images/screenprint/screenprint0.jpg'} style={{position: 'relative', maxWidth: '80%',maxHeight: '60%', paddingTop: '1em', objectFit: 'scale-down', alignSelf: 'center'}}/>
            </div>
            <div style={{bottom: '4.5em', left: '60px', zIndex: 10}}>
            <div style={{paddingTop: '1.5em'}}>
              <div style={{fontFamily: 'bricolage-grotesque', fontStyle: 'bold', lineHeight: '1.8em', fontSize: '11px', color: 'rgb(91, 87, 72)', padding: '1.5px', fontWeight: '400', letterSpacing: '0.8px', fontWeight: '1000', fontSize: '11px'}}>
                {imageTitle}
              </div>
            </div>
            {imageBody ? <div>
              <div style={{fontFamily: 'PT Sans', fontStyle: 'normal', lineHeight: '1.8em', fontSize: '11px', color: 'rgb(91, 87, 72)', padding: '1.5px', marginTop: '0.5em', fontWeight: '400', letterSpacing: '0.22px', fontWeight: '600', whiteSpace: 'pre-line'}}>
                {imageBody}
              </div>
            </div> : null}
            {!home ? 
            <div style={{display: 'flex', flexDirection: 'row', zIndex: '10', marginTop: '0.5em'}}>
              <div className='OtherPages' onClick={() => (handleButtonClick(-1))}>
                  {'PREV'}
              </div>
              <div className='Pages'>
                  {'/'}
              </div>
              <div className='OtherPages' onClick={() => (handleButtonClick(1))}>
                  {'NEXT'}
              </div>
              </div>
              : null }
          </div>
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
        <link rel="canonical" href="https://delaneystewart.com" />
      </Helmet>
      {/* left aligned flex column */}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
          <Sidebar imageDescription={imageDescription} home={true}/>
        </div>
      </div>
        <div style={{height:'100vh',width:'100vw', position: 'absolute', top: 0, right: 0}}>
          <div style={{position: 'relative', marginLeft: '23em', marginTop: '2em', marginRight: '0em'}}>
            <img src={homeImagePath} style={{position: 'relative', maxWidth: '100%', height:'45em', objectFit: 'scale-down', alignSelf: 'center'}}/>
          </div>
      </div>
    </div>
  );
}

export default Home;