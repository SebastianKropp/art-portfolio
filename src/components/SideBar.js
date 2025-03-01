import {useNavigate} from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useState, useEffect, useRef } from 'react';
import '../css/App.css';

function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstRender]);

  return firstRender.current;
}
const Sidebar = ({imageDescription, home, handleButtonClick, category}) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [removeBar, setRemoveBar] = useState(false);

    let imageTitle = imageDescription["Title"]
    let imageBody = imageDescription?.["Body"]? imageDescription["Body"] : null;
    let firstRender = useFirstRender();

    useEffect(() => {
      if (isMobile) {
        //modify className of menuBar and menuBarText
        let menuBar = document.getElementById('menuBar')
        let menuBarText = document.getElementById('menuBarText')
        if (isMenuOpen) {
            menuBar.className = 'menuBarClosed'
            menuBarText.className = 'menuBarTextClosed'
            menuBar.style.animation = 'none'
            menuBar.style.animation = 'slideIn 1s cubic-bezier(0.17, 0.04, 0.03, 0.94)'
            setRemoveBar(true)

        }
        else {
            menuBar.style.animation = 'none'
            if (!firstRender) {
              menuBar.style.animation = 'slideOut 1s cubic-bezier(0.17, 0.04, 0.03, 0.94)'
              //wait for animation
              setTimeout(() => {
                menuBar.style.animation = 'none'
                menuBar.className = 'menuBarOpen'
                menuBarText.className = 'menuBarTextOpen'
                setRemoveBar(false)
              }, 850)
            }
        }
      }
    }, [isMenuOpen, setIsMenuOpen, firstRender])
    //If isMobile is true, create dropdown instead of sidebar
    if (isMobile) {
      return(
        <>
        <div style={{position: 'fixed', top: 0, width: '100%', zIndex: 100, display: 'block'}}>
              <div id='menuBar' className='menuBarOpen'>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center'}}>
                <div onClick={() => (setIsMenuOpen(!isMenuOpen))} id='menuBarText' className='menuBarTextOpen'>
                  {'Menu'}
                </div>
                {removeBar ? 
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center'}}>
                  <div>
                    <div className='PagesMobile' onClick={() => (navigate('/') )}>
                      {'Home'}
                    </div>
                  </div>
                  <div>
                    <div className='PagesMobile' style={{borderTop: '1px solid #FCFCF7B3', borderImage: 'radial-gradient(#f6b73c, #0000) 2'}} onClick={() => (navigate('/lithographs'))}>
                      {'Lithography'}
                    </div>
                  </div>
                  <div>
                    <div className='PagesMobile' style={{borderTop: '1px solid #FCFCF7B3', borderImage: 'radial-gradient(#f6b73c, #0000) 2'}} onClick={() => (navigate('/screenprints') )}>
                      {'Screenprint'}
                    </div>
                  </div>
                  <div>
                    <div className='PagesMobile' style={{borderTop: '1px solid #FCFCF7B3', borderImage: 'radial-gradient(#f6b73c, #0000) 2'}} onClick={() => (navigate('/intaglio') )}>
                      {'Photo Intaglio'}
                    </div>
                  </div>
                  <div>
                    <div className='PagesMobile' style={{borderTop: '1px solid #FCFCF7B3', borderImage: 'radial-gradient(#f6b73c, #0000) 2'}} onClick={() => (navigate('/reliefprints') )}>
                      {'Relief'}
                    </div>
                  </div>
                  <div>
                    <div className='PagesMobile' style={{borderTop: '1px solid #FCFCF7B3', borderBottom: '1px solid #FCFCF7B3', borderImage: 'radial-gradient(#f6b73c, #0000) 2', marginBottom: '20px'}} onClick={() => (navigate('/ecoprints') )}>
                      {'Eco Print'}
                    </div>
                  </div>
                  <div>
                    <div className='OtherPagesMobile' style={{borderBottom: '1px solid #FCFCF7B3', borderImage: 'radial-gradient(#f6b73c, #0000) 2', paddingBottom: '0.5em', marginTop: '0em'}} onClick={() => (navigate('/about') )}>
                      {'About'}
                    </div>
                  </div>
                  <div>
                    <img style={{paddingTop: '1em', width: '5em'}} src={'images/beko.jpg'} alt='Beko'/>
                  </div>
                  <div className='PagesMobile' style={{position: 'absolute', 'bottom': 0, padding: '1.5em', fontSize: '0.5em', paddingRight: '2em', opacity: '0.25'}}>
          Designed by Sebastian Kropp
        </div>
                  </div>
                  : null}
                </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center'}}>
            <h1 onClick={() => (navigate('/'))} className="title" style={{cursor: 'pointer', fontFamily: 'florenescans', fontSize: '20px', fontStyle: 'normal', letterSpacing: '0.2em', lineHeight: '1.4em', fontWeight: '500', textTransform: 'uppercase', color: '#6d674f', whiteSpace: 'pre-line', paddingBottom: '1em', paddingTop: '3em'}}>
              {home? 'Delaney Stewart' : category}
            </h1>
            </div>
        </>
            )
    }
    return(
      <>
      <div style={{display: 'flex', zIndex: '10', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', paddingTop: '4em', paddingLeft: '81px' }}>
          <h1 onClick={() => (navigate('/'))} style={{cursor: 'pointer', fontFamily: 'florenescans', fontSize: '20px', fontStyle: 'normal', letterSpacing: '0.2em', lineHeight: '1.4em', fontWeight: '500', textTransform: 'uppercase', color: '#6d674f', whiteSpace: 'pre-line', paddingBottom: '30px'}}>
            {'Delaney \nStewart'}
          </h1>
          <div>
            <div className='Pages' onClick={() => (navigate('/'))}>
              {'Home'}
            </div>
          </div>
          <div>
            <div className='Pages' onClick={() => (navigate('/lithographs'))}>
              {'Lithography'}
            </div>
          </div>
          <div>
            <div className='Pages' onClick={() => (navigate('/screenprints'))}>
              {'Screenprint'}
            </div>
          </div>
          <div>
            <div className='Pages' onClick={() => (navigate('/intaglio'))}>
              {'Photo Intaglio'}
            </div>
          </div>
          <div>
            <div className='Pages' onClick={() => (navigate('/reliefprints'))}>
              {'Relief'}
            </div>
          </div>
          <div>
            <div className='Pages' style={{marginBottom: '20px'}} onClick={() => (navigate('/ecoprints'))}>
              {'Eco Print'}
            </div>
          </div>
          <div>
            <div className='OtherPages' onClick={() => (navigate('/about'))}>
              {'About'}
            </div>
          </div>
          
          <div>
            <img style={{paddingTop: '1.75em', width: '6em'}} src={'images/beko.jpg'} alt='Beko' onClick={() => window.location.href = 'https://printhousebeko.myshopify.com/'}/>
            <div className='OtherPages' onClick={() => window.location.href = 'https://printhousebeko.myshopify.com/'}>
              {'Shop'}
            </div>
          </div>

          
      </div>
      <div style={{position: 'absolute', bottom: '4.5em', left: '60px', zIndex: 10}}>
      <div >
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
    </>
    )
  }
  
  export default Sidebar;

  