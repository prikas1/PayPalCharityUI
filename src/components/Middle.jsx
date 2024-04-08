import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEnvelope, faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ShareCard from './ShareCard';

const Middle = () => {
  return (
    <div className='middle px-3 lg:px-40'>
      <h1 className='text-blue-800 font-bold px-8 py-4 hover:underline'>
        <FontAwesomeIcon icon={faArrowLeft} className='pr-2' />
        Donate with PayPal
      </h1>
      <img className=' bg-blue-400 rounded-t-2xl' src="images/paypal-bg.png" />
      <img className='book-img' src="images/book.png" />
      <div className='content md:flex mt-20'>
        <div className='col-1 pl-2'>
          <p className='text-md font-medium'>Donate to PayPal Giving Funds</p>
          <h1 className='text-2xl font-medium'>Figures of Speech Theatre</h1>
          <button className='Artbtn'>Arts & Culture</button>
          <div className='py-5'>
            <p className='text-md font-medium'>Freeport, ME</p>
            <p className='text-md font-medium'>EIN: 01-0432620</p>
          </div>
          <div className='flex'>
            <div className='icon'>
              <FontAwesomeIcon icon={faEnvelope} className='text-blue-900' />
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faHeart} className="text-red-500" />
            </div>
          </div>
          <div className='para'>
            <p className='pt-5 font-medium'>Figures of Speech Theatre creates and tours visionary works of performance forged at the intersection of poetry, music, sculpture and dance. The company has toured all over the world - from Sofia, Bulgaria to Tokyo, Japan, to Lima, Peru. Besides performing at venues such as the Kennedy Center, the Smithsonian Institution, and the New Victory Theatre on Broadway, the company retains a strong commitment to teaching and performing throughout its home state of Maine.</p>
            <p className='text-sm pt-5'>Source: PayPal Giving and Charity profile</p>
            <p className='text-sm pt-5 text-slate-500'>The info in this profile is provided and managed by the charities themselves.</p>
          </div>
        </div>
        <div className='col-2 md:pl-10'>
          <div className="flex">
            <button className='Price-btn'>$25</button>
            <button className='Price-btn'>$50</button>
            <button className='Price-btn bg-blue-900 text-white'>$100</button>
          </div>
          <div className="flex">
            <button className='Price-btn'>$200</button>
            <button className='Price-btn'>Other</button>
          </div>
          <div className='pt-5 my-4 flex items-center'>
            <FontAwesomeIcon icon={faCheck} className='p-2 rounded-md text-white bg-blue-800' />
            <p className='pl-3 text-md font-medium'>Share my name and email with this charity</p>
          </div>
          <button className='btn text-white bg-blue-900'>Donate Now</button>
          <ul className="list-disc p-7">
            <li>PayPal covers all transaction fees</li>
            <li> You’re donating to PayPal Giving Fund, a 501(c)(3) charity, 
              <a>subject to its terms</a>
            </li>
            <li>Donations can take
              <a> up to 45 days</a> 
              to get to your chosen charity. It’s rare, but if
              <a> we can’t send your money to this charity</a>
              , we’ll ask you to recommend another.
            </li>
            <li>If we can’t reach you, we’ll send it to a similar charity and keep you updated. Your donation is typically tax-deductible in the US.</li>
          </ul>
          <ShareCard />
        </div>
      </div>
    </div>
  );
}

export default Middle;
