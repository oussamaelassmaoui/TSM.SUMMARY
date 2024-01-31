import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

      </nav>

      <h1 className='head_text'>
       <span style={{color:"white"}}> TSM.<span className='orange_gradient '>SUMMARY</span></span><br className='max-md:hidden' />
       
      </h1>
    
    </header>
  );
};

export default Hero;
