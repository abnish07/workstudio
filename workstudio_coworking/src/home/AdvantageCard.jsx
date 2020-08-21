import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck} from "@fortawesome/free-solid-svg-icons";

function AdvantageCard(props){
    const { cardTitle, cardIcon, iconDesc, cardDesc, leftImage } = props
    return(
        <>
        <div className="container">
            <div className="row d-flex">
                <div className="col-5">
        <img src={leftImage} className="img-thumbnail" />
        </div>
        <div className="col-7">
            <h4 className="cardTitle">{cardTitle}</h4>
            <p className="cardDesc">{cardDesc}</p>
            <div className="row">
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
            <FontAwesomeIcon icon =  {faCheck} className="cardIcon"  />
            <span className="iconDesc">{iconDesc}</span>
            </div>
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
            <FontAwesomeIcon icon =  {faCheck} className="cardIcon"  />
            <span className="iconDesc">{iconDesc}</span>
            </div>
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
            <FontAwesomeIcon icon =  {faCheck} className="cardIcon"  />
            <span className="iconDesc">{iconDesc}</span>
            </div>
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
            <FontAwesomeIcon icon =  {faCheck} className="cardIcon"  />
            <span className="iconDesc">{iconDesc}</span>
            </div>
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
            <FontAwesomeIcon icon =  {faCheck} className="cardIcon"  />
            <span className="iconDesc">{iconDesc}</span>
            </div>
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
            <FontAwesomeIcon icon =  {faCheck} className="cardIcon"  />
            <span className="iconDesc">{iconDesc}</span>
            </div>
            </div>
            <button className="btn btn-danger btn-lg btn-block mt-5">Read More</button>
        </div>
        
        </div>
        </div>
        </>
    )
}

export default AdvantageCard;