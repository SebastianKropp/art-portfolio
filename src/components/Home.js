import '../css/App.css';

import React from 'react';
import { isMobile } from 'react-device-detect';
import { homeImage } from '../imageDescription.js';

import Sidebar from './SideBar';
const SelectedPhoto = ({imageName, category, currentImage}) =>{
  let imageObjects = []
  console.log(imageName)
  imageName.forEach((imageName, index) => {
      if (isMobile) {
          let imageTitle = homeImage[imageName]["Title"]
          let imageBody = homeImage?.[imageName]?.["Body"]
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
                <div style={{fontFamily: 'PT Sans', fontStyle: 'normal', lineHeight: '1.8em', color: 'rgb(91, 87, 72)', padding: '1.5px', marginTop: '0.5em', letterSpacing: '0.22px', fontWeight: '400', whiteSpace: 'pre-line', paddingBottom: '4em', fontSize: '11px'}}>
                  {imageBody}
              </div>
              </div>
              </div>
          </>)
      }
      else {
          if (index !== currentImage) {
              imageObjects.push(<img style={{opacity: '0', position: 'absolute'}} src={`images/${category}/${imageName}`} key={index} alt='artpiece' className='subImages'/>)
          }
          else {
              imageObjects.push(<img id='change-animation' src={`images/${category}/${imageName}`} key={index} alt='artpiece' className='subImages'/>)
          }
      }
  })
  return (
      <>        
      {imageObjects}
      </>
  )
}
const Home = () => {

  var imageName = []
  for (var i in homeImage) {
          imageName.push(i)
  }

  let imageDescription = homeImage[imageName]
  let home = true
  let imageTitle =  "'japanese lotus’ 2023"
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
    return (
      <div className="Home" style={{width: '100vw', height: '90vh'}}>
        {/* left aligned flex column */}
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: ''}}>
            <Sidebar imageDescription={imageDescription} home={true}/>
            <div style={{textAlign: 'center', }}>
              <img src={'images/screenprint/screenprint0.jpg'}  alt='artpiece' style={{position: 'relative', maxWidth: '80%',maxHeight: '60%', paddingTop: '1em', objectFit: 'scale-down', alignSelf: 'center'}}/>
            </div>
            <div style={{bottom: '4.5em', left: '60px', zIndex: 10}}>
            <div style={{paddingTop: '1.5em'}}>
              <div style={{fontFamily: 'bricolage-grotesque', fontStyle: 'bold', lineHeight: '1.8em', color: 'rgb(91, 87, 72)', padding: '1.5px', letterSpacing: '0.8px', fontWeight: '1000', fontSize: '11px'}}>
                {imageTitle}
              </div>
            </div>
            {imageBody ? <div>
              <div style={{fontFamily: 'PT Sans', fontStyle: 'normal', lineHeight: '1.8em', fontSize: '11px', color: 'rgb(91, 87, 72)', padding: '1.5px', marginTop: '0.5em', letterSpacing: '0.22px', fontWeight: '600', whiteSpace: 'pre-line'}}>
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
      {/* left aligned flex column */}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', width: '100vw', paddingLeft: ''}}>
          <Sidebar imageDescription={imageDescription} home={true}/>
          </div>
        </div>
        <div style={{height:'100vh',width:'100vw', position: 'absolute', top: 0, right: 0}}>
            <div style={{position: 'relative', marginLeft: '18em', marginTop: '4em', justifyContent: 'center', textAlign: 'center', marginRight:'7em'}}>
                <SelectedPhoto imageName={imageName} category={'intaglio'} currentImage={0}/>
            </div>
        </div>
        </div>
  );
}

export default Home;