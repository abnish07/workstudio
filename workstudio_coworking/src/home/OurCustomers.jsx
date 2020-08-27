import React from 'react';
import OurCustomersCard from './OurCutomersCard';
import "./Home.css";

function OurCustomers(){

    return(
        <>
          
            <div className="container">
            <div className="right companyText mx-5">
                <span className="h2">Our Customers</span>
            </div>
                {/* <div className="row">
                    <div className="col-2">
                                    <OurCustomersCard customerLogo="https://www.workstudiocoworking.com/resources/static/img/boosterimg/instamojo.jpg" />
                    </div>
                 
                </div> */}
<div className="row d-flex flex-sm-column flex-md-row flex-lg-row mt-5">
            <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6">
               <ul className="companyLogo">
                   <li className="card cardLogo">
                       <span>
                           <img src="https://www.workstudiocoworking.com/resources/static/img/boosterimg/googlecloud.png" className="card-img-top"/>
                       </span>
                   </li>
                   <li className="card cardLogo">
                       <span>
                           <img src="https://www.workstudiocoworking.com/resources/static/img/boosterimg/instamojo.jpg" className="card-img-top"/>
                       </span>
                   </li>
                   <li className="card cardLogo">
                       <span>
                           <img src="https://www.workstudiocoworking.com/resources/static/img/boosterimg/co.png" className="card-img-top"/>
                       </span>
                   </li>
                   

               </ul>
               </div>
               </div>


            </div>
        </>
    )
}

export default OurCustomers;