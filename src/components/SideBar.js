import {useNavigate} from 'react-router-dom';

const Sidebar = ({imageDescription, home, handleButtonClick}) => {
    const navigate = useNavigate();

    let imageTitle = imageDescription["Title"]
    let imageBody = imageDescription?.["Body"]? imageDescription["Body"] : null;

    return(
      <>
      <div style={{display: 'flex', zIndex: '10', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', paddingTop: '4em', paddingLeft: '81px' }}>
          <div onClick={() => (navigate('/'))} style={{cursor: 'pointer', fontFamily: 'florenescans', fontSize: '20px', fontStyle: 'normal', letterSpacing: '0.2em', lineHeight: '1.4em', fontWeight: '500', textTransform: 'uppercase', color: '#6d674f', whiteSpace: 'pre-line', paddingBottom: '30px'}}>
            {'Delaney \nStewart'}
          </div>
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
              {'Screenprint (selected works)'}
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
      </div>
      <div style={{position: 'absolute', bottom: '4.5em', left: '60px', zIndex: 10}}>
      <div >
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
    </>
    )
  }
  
  export default Sidebar;

  