import React, {useEffect} from 'react';


import homeImage from '../Assets/HomeImages.png';

import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init();

const Home = () => {

 useEffect(()=>{
  Aos.init({duration: 4000})
 },[])

  return (
    <div className='home'>
      <div className="secContainer">
        <div data-aos='fade-up'  className="homeText">
          <span  className="homeSpan">
            Meet your new truck
          </span>
          <h1 className='homeTitle'>Toyota Tacoma TRD Pro</h1>
          <div className="btns flex">
            <button data-aos='fade-right' className='btn'>More Details</button>
            <button data-aos='fade-left' className='btn'>Test Drive</button>
          </div>
        </div>

        <div data-aos='fade-down-right' className="homeImage">
          <img src={homeImage} alt="Home Image" />
        </div>
      </div>
    </div>
  )
}

export default Home