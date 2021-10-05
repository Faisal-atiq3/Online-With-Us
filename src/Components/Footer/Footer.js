import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>EDUCAT INTERNATIONAL LEARNING COURSE</h1>
                <div className="icons-container d-flex text-center ">
                 
                
                  
                </div>
                <p className="mt-4 ">
                  
                    Top  Companies choose <b>EDUCATE</b> to in-demand career skills
                  
                </p>

                <p className="mt-5">
                  <small>© 2021 Educate.Inc</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">About us</li>
                  <li className="footer-menu">Success</li>
                  <li className="footer-menu">Refund Policy</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> Terms and Conditions</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign Up</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  
                  <div>
                    <h5> OUR ADRESS</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                 
                  <div>
                    <p>
                    Level-4, 34, Awal Centre, Banani, Dhaka,<br/>
                                Phone: +8801322810867
                      <br /> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;