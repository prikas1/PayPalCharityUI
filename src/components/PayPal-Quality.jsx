import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Quality } from './Quality';
import QualityDatas from './QualityData';


const PayPalQuality = () => {
  return (
    
     <div className='Paypal helps px-3 lg:px-40 my-10 p-5 bg-slate-100'>
  <h1 className='text-xl py-3 font-semibold'>PayPal helps your gifts do more good</h1>
  <div className='Qualities md:flex'>
  {QualityDatas.map(QualityData => (
  <Quality 
   key={QualityData.id}
   img ={QualityData.img}
   para1 = {QualityData.para1}
   para2 = {QualityData.para2}
  />
  ))}
  
  </div>
  </div>
   
  );
}

export default PayPalQuality;
