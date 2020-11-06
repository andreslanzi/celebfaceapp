import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, celebrity}) => {
    return (
      <div className='center ma'>
          <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                <h1 className='celeb f1 fw3 db black link hover-near-white'>{celebrity}</h1>
            </div>
      </div>
    )
}
 
export default FaceRecognition;
