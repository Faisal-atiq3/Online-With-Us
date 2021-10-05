import React from 'react';
import Menubar from '../Menubar/Menubar';
import './Header.css'
const Header = () => {
    return (

        <div className="banner-container ">
      <div className="">
         
        <div className="row d-flex banner align-items-center justify-content-center">
          
          <div className="col-md-6">
            <h1 className="title ms-5">
              Take The World's Best Course Online <br /> With Us
            </h1>
            <h5 className=" text-align-center ms-5 text-p">
              Explore the World's our Graduates
            </h5>
            <button className="mt-3 about-btn ms-5">Read More</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
       
    );
    
};

export default Header;