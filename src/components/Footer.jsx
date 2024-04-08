import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Footer = () => {
  return (
     <div className='footer px-5 pb-10 '>
  <div className='brand  '>
  <img className="h-20" src="images/PayPalLogo2.png"></img>
  </div>
  <div className="xl:flex justify-between">
      <ul className=' footer-menu flex flex-wrap'>
        <li ><a >Help</a></li>
        <li><a >Contact</a></li>
        <li><a >Fees</a></li>
        <li><a >Security</a></li>
        <li><a >Apps</a></li>
        <li><a >Shop</a></li>
        <li><a >Enterprise</a></li>
        <li><a >Partner</a></li>
      </ul>
      <div className='pt-5 pb-5 xl:pb-0'><img className=' h-3' src="images/AFlag.png"></img></div>
     </div>
      <hr />
    <div className="xl:flex justify-between">
     <ul className='footer-menu flex flex-wrap'>
        <li ><a >About</a></li>
        <li ><a >Newsroom</a></li>
        <li><a >Jobs</a></li>
        <li><a >Investor Relation</a></li>
        <li ><a >Values in Action</a></li>
        <li ><a >Public Policy</a></li>
        <li ><a >Sitemap</a></li>
        
      </ul>
   <ul className='footer-menu flex flex-wrap'>
        <li className='py-3 pr-5 text-slate-500 font-sm text-sm'><a ><FontAwesomeIcon icon={faCopyright} /> 1999-2022</a></li>
        <li><a >Accessibility</a></li>
        <li><a >Privacy</a></li>
        <li><a >Cookies</a></li>
        <li><a >Legal</a></li>
       
      </ul>
      </div>
      </div>
   
  );
}

export default Footer;
