import '../css/App.css';

import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import Title from '../images/TitleNoWords.PNG';
//import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { isMobile } from 'react-device-detect';

const TitleRow = () => {
  const navigate = useNavigate();

  const handleButtonClick = (page) => {
    // Navigate to the specified page
    navigate(`/${page}`);

  };
  let marginTop = '3.5%';
  if (isMobile) {
    marginTop = '1%';
  }
  return(
    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', marginTop: marginTop }}>
        <img 
          src={Title} 
          alt="Title" 
          style={{ width: '300px', height: 'auto' }} 
          onClick={() => handleButtonClick('')}
        />
    </div>
  )
}

const PageRow = () => {
  const navigate = useNavigate();

  const handleButtonClick = (page) => {
    // Navigate to the specified page
    navigate(`/${page}`);

  };
  let imageSize = '20%';
  let width = '35%';
  if (isMobile) {
    imageSize = '20%';
    width = '90%';
  }
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", textAlign: 'center', marginTop: '20px', width: width }}>
      <img
        src={require('../images/Gallery.PNG')} // Assuming images are in the "art" folder
        alt={`${"Gallery"}`}
        style={{ width: imageSize, height: 'auto', cursor: 'pointer' }}
        onClick={() => handleButtonClick('Gallery')}
      />
      <img
        src={require('../images/About.PNG')} // Assuming images are in the "art" folder
        alt={"About"}
        style={{ width: imageSize, height: 'auto', cursor: 'pointer' }}
        onClick={() => handleButtonClick('About')}
      />
      <img
        src={require('../images/Contact.PNG')} // Assuming images are in the "art" folder
        alt={"Contact"}
        style={{ width: imageSize, height: 'auto', cursor: 'pointer' }}
        onClick={() => handleButtonClick('Contact')}
      />
      <img
        src={require('../images/Store.PNG')} // Assuming images are in the "art" folder
        alt={"Store"}
        style={{ width: imageSize, height: 'auto', cursor: 'pointer' }}
        onClick={() => handleButtonClick('Store')}
      />
      {/* Add more buttons as needed */}
    </div>
  );
}

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

  const GridRow = ({isZoomed, setIsZoomed}) => {
    // Replace with your actual list of image file names from the "art" folder

    const imageList = [];
    const imageTypes = {"litho": 4, "screenprint": 2, "intaglio": 8, "ecoprint": 5, "relief": 1}
    for (var category in imageTypes) {
      for (var i = 0; i < imageTypes[category]; i++) {
        imageList.push(`images/${category}/${category + i}.jpg`)
      }
    }
    let width = "75vw"
    let padding = "2.5%"
    if (isMobile) {
      width = "100vw"
      padding = "5%"
    }
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: width, padding: padding }}>
      {imageList.map((path, index) => (
        <GridPhoto index={index} path={path} isZoomed={isZoomed} setIsZoomed={setIsZoomed}/>
      ))}
    </div>
    );
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
  //Create a state variable to zoom in on images
  const [isZoomed, setIsZoomed] = useState({zoomState: false, index: 0});
  useEffect(() => {
    //retrigger css animation on state change
    try {
      const textTitle = document.getElementById('text-title');
      textTitle.classList.remove('zoomed-title-text');
      void textTitle.offsetWidth;
      textTitle.classList.add('zoomed-title-text');
      const textBody = document.getElementById('text-body');
      textBody.classList.remove('zoomed-text');
      void textBody.offsetWidth;
      textBody.classList.add('zoomed-text')

      console.log('Zoomed Photo is rendered');
    }
    catch {
      console.log('Zoomed Photo is not rendered')
    }
  }, [isZoomed]);
  return (
    <div className="Home" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Helmet>
        <style>{'body { background-color: #f6f6e8; }'}</style>
        <meta charSet="utf-8" />
        <title>Beko</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <TitleRow/>
      <PageRow/>
      <GridRow isZoomed={isZoomed} setIsZoomed={setIsZoomed}/>
      { isZoomed.index != null && isZoomed.zoomState ? <ZoomedImage className='zoomed-photo' id='zoomed-photo' index={isZoomed.index} setIsZoomed={setIsZoomed} /> : null}
    </div>
  );
}

export default Home;