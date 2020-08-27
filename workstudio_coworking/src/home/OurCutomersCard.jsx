import React from 'react';
import "./Home.css";

function OurCustomersCard(props){
    const { customerLogo } = props;
    return(
        <>
            <div>
            <ul className="companyLogo">

            <li className="card cardLogo">
                                <span className="clients">
                                    <img src={customerLogo} className="card-img-top " />
                                </span>
                            </li>
                            </ul>
            </div>
        </>
    )
}

export default OurCustomersCard;