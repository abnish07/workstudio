import React from 'react';
import '../home/Home.css';
class CompanyLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="container "> 
            <div className="row d-flex flex-sm-column flex-md-row flex-lg-row mt-5">
            <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6">
                <h5 className="text-center">Our Trusted Brands</h5>
               <ul className="companyLogo">
                   <li className="card">
                       <span>
                           <img src="https://www.workstudiocoworking.com/resources/static/img/boosterimg/googlecloud.png" className="card-img-top"/>
                       </span>
                   </li>
                   <li className="card">
                       <span>
                           <img src="https://www.workstudiocoworking.com/resources/static/img/boosterimg/instamojo.jpg" className="card-img-top"/>
                       </span>
                   </li>
                   <li className="card">
                       <span>
                           <img src="https://www.workstudiocoworking.com/resources/static/img/boosterimg/co.png" className="card-img-top"/>
                       </span>
                   </li>

               </ul>
                
               <ul className="companyLogo">
                   <li className="card">
                       <span>
                           <img src="https://www.workstudiocoworking.com/resources/static/img/boosterimg/aws.png" className="card-img-top"/>
                       </span>
                   </li>
                   <li className="card">
                       <span>
                           <img src="https://www.workstudiocoworking.com/resources/static/img/boosterimg/The-Startup-Zone-Logo.png" className="card-img-top"/>
                       </span>
                   </li>
                   <li className="card">
                       <span>
                           <img src="https://www.workstudiocoworking.com/resources/static/img/boosterimg/DigitalOcean.png" className="card-img-top"/>
                       </span>
                   </li>

               </ul>
                
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-6 col-xl-6 right">
            <h5>From Entrepreneurs to</h5>
                <h3>Fortune 500</h3>
                <div className="companyText">
                    
               <span> companies</span>
               </div>
               <p>
                Over <strong>3 million</strong> professionals and businesses
have used Coworker to find flexible workspace.
Allow our team of professional partners help you find your next coworking office space.</p>
            </div>
            </div> 
            </div> 
         );
    }
}
 
export default CompanyLogo;