import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export function Quality(props) {
    return(
      
   <div className='Quality py-5 mr-2'>
  <img src={props.img}></img>
  <p className='font-bold text-md py-2'>{props.para1}</p>
  <p>{props.para2}</p>
  </div>
    )
}