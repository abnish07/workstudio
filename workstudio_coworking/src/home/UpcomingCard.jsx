import React from 'react'
import './upcomingCard.css';

function UpcomingCard(props){

    const { cardImages, cardTitle } = props;

    return(
        <div class="imageCard text-white">
        <img src={cardImages} class="card-img" alt="..."/>
        <div class="card-img-overlay">
          <h5 class="caption py-5 mt-4" >{cardTitle}</h5>
         
        </div>
      </div>
    )
}

export default UpcomingCard;