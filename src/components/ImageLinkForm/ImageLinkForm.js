import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
      <div>
          <p className='f2 gbr4 grow dib'>
              {'CELEBRITY FACE DETECTOR'}
          </p>
        <div className='center'>
            <div className='form pa3 br3 shadow-5 center'>
            <input className='f3 pa2 w-70 center' type='text' onChange={onInputChange}/>
            <button className='w-30 grow ma2 f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
            >DETECT</button>
        </div>
      </div>  
      </div>
    )
}

export default ImageLinkForm;
