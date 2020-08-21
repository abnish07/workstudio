import React from 'react'

function UpcomingCard(props){

    const { cardImages, cardTitle } = props;

    return(
        <div class="card text-white" style={{width: 162, height:200}}>
        <img src={cardImages} class="card-img" style={{width: 162, height:200}} alt="..."/>
        <div class="card-img-overlay">
          <h5 class="card-title py-5 mt-4" >{cardTitle}</h5>
         
        </div>
      </div>
    )
}

export default UpcomingCard;