import React from 'react';
import './index.css';

const CvInfo = ({ title, img }) => {
  return(
    <div className='cvInfo'>
      <img src={img} alt='generic' width={50} height={50} className='rounded-circle'/>
      <h2 className='cvTitle'>{title}</h2>
    </div>
  )
}

export  default CvInfo