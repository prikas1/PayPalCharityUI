import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {

const [showMenu, setShowMenu] = useState(true); // Initially show menu links
const [toggleMenu, setToggleMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width state when window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle menu state based on window width
  useEffect(() => {
    if (windowWidth < 820) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [windowWidth]);

  const toggleMenuShow = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className='top'>
      <div className="flex justify-between">
        <div className='flex'>
           <div className='Brand-logo py-7 pl-2 md:pl-5'>
          <img className="h-8"  src="images/PayPalLogo.png"></img>
          </div>
         
          <div className='menu'>
            {showMenu ? (
              <ul className='flex'>
                <li className='menu-li '><a >Personal</a></li>
                <li className='menu-li'><a >Business</a></li>
                <li className='menu-li'><a >Development</a></li>
                <li className='menu-li'><a >Help</a></li>
              </ul>
            ) : (
            <div>
      <button className="btn mt-7 ml-2" onClick={toggleMenuShow}>
        <FontAwesomeIcon icon={faBars} /><a className='pl-2 text-sm'>Menu</a>
      </button>
      {toggleMenu && (
        <div className="relative ml-5 mt-2">
          <div className="bg-black bg-opacity-70 absolute top-[-6px] z-10">
            <ul>
              <li className='toggle-menu-li'><a>Personal</a></li>
              <li className='toggle-menu-li'><a>Business</a></li>
              <li className='toggle-menu-li'><a>Development</a></li>
              <li className='toggle-menu-li'><a>Help</a></li>
            </ul>
          </div>
          <div className="absolute top-[-16px] bottom-10 left-1 w-6 h-6 bg-black bg-opacity-70 rotate-45 z-0"></div>
        </div>
      )}
    </div>
             
            )}
          </div>
        </div>
        
        <div className='flex py-7 pr-3 md:pr-6'>
          <button className='btn'>My PayPal</button>
          <button className='btn'>Log Out</button>
        </div>
      </div>
    
      <hr />
    </div>
   
  );
}

export default Header;




{/* <div className="relative ml-5">
  <div className="bg-black mt-4 bg-opacity-40 absolute z-10">
    <ul>
      <li className='py-3 px-6 text-white font-medium'><a>Personal</a></li>
      <li className='py-3 px-6 text-white font-medium'><a>Business</a></li>
      <li className='py-3 px-6 text-white font-medium'><a>Development</a></li>
      <li className='py-3 px-6 text-white font-medium'><a>Help</a></li>
    </ul>
  </div>
  <div className="absolute top-1 left-1 w-5 h-5 rotate-45 border-t-4 border-l-4 border-black border-opacity-40 z-20"></div>
</div> */}