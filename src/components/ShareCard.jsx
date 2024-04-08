import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const ShareCard = () => {
 return(
   <div className='card p-5 text-center share rounded-md border-2 border-slate-100'>
    <p className='font-bold'>Share and inspire others</p>
    <div className=' py-5 justify-center flex '>
    <div className=' icon '>
      <FontAwesomeIcon icon={faFacebook} className='text-blue-900' />
    </div>
    <div className='icon'>
       <FontAwesomeIcon icon={faTwitter} className='text-blue-900' />
    </div>
    <div className='icon'>
       <FontAwesomeIcon icon={faEnvelope} className='text-blue-900'/>
    </div>
    </div>
    <div className='px-6 py-10 bg-slate-100   flex items-center justify-between '>
    <a className='link pr-5 text-sm font-semibold whitespace-normal break-all'>https://www.paypal.com/US/fundraiser/charity/1279469</a>
    
    <button className='btn px-2 py-1 text-sm' >Copy</button>
    
    </div>
   
   
    </div>
 )

};

export default ShareCard;


