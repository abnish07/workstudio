import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { square } from '@fortawesome/free-solid-svg-icons';
 
function Footer(){

    return (
        <>
        <div className={style.container}>
        <div className="row my-2 text-center">
          <div className="col-sm text-left pl-5">
            <img src="/images/logo.png" className="img-fluid" 
            style={{width: "auto", borderRadius: 5, height: "64px"}}/>
          </div>
       
        </div> 
        <hr className={style.new1}/>
         <div className="row my-5 text-center ml-5 pl-5">
          <div className="col-2">
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{lineHeight: "30px"}}>
              <h5>Our Centers</h5>
              <div>Patna</div>
              <div>Ranchi</div>
              <div>Gurugram</div>
              <div>Indore</div>
              
            </div>
            
          </div>
          <div className="col-2">
                <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{lineHeight: "30px"}}>
                <h5>About</h5>
              <div>About onefinestay</div>
              <div>Our team</div>
            </div>     
            
          </div>
          <div className="col-2">
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{lineHeight: "30px"}}>
              <h5>Work with us</h5>           
              <div>Press Room</div>
              <div>Our Partners</div>
              <div>List your Property</div>
              <div>Jobs</div>
               <div ><Link to="/agreement" className="text-decoration-none text-white">Agreements</Link> </div>
              </div>
       
           </div>
          <div className="col-2">
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{lineHeight: "30px"}}>
              <h5>Policies</h5>
              <div>Our commitment</div>
              <div>Cancellation policy</div>
              <div>Website terms of use</div>
              <div>Terms and conditions</div>
              <div>Privacy policy</div>
            </div>     
          </div>
          <div className="col-2">
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{lineHeight: "30px"}}>
            <h5>Get in touch</h5>
              <div>Enquires</div>
              <div>+91-8051665056</div>
              <div>Contact Us</div>
            </div>     
          </div>
          <div className="col-2">
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{lineHeight: "30px"}}>
            <h5>Follow on</h5>
              
          <div className="col-2">
           <i className="fab fa-facebook" style={{marginRight: "10px"}}></i>
            <i className="fab fa-twitter" style={{marginRight: "10px"}}></i>
            <i className="fab fa-instagram" style={{marginRight: "10px"}}></i>
            <i className="fab fa-pinterest-p" style={{marginRight: "10px"}}></i>
          </div>
            </div>     
          </div>
        </div>

            <hr className={style.new1}/>
              <div className="text-center">
              <small> Workstudio are registered trademarks of Lavero Infra Limited, Indian company number 06554630. © 2017, all rights reserved.</small>  </div>
          </div>
    
      
       </>
      
    )
}

export default Footer;