import React from 'react'

function OurCenterCard(props){
    const { centerImage, centerDesc, centerTitle } = props;
    return(
        <div class="card" >
        <img 
        src= {centerImage} 
        class="card-img-top" 
        
        alt="..."
        
        />
        <div class="card-body">
          <h5 class="card-title text-center">{centerTitle}</h5>
          <p class="card-text" 
            style={{ fontSize: "13px" }}>
              {centerDesc}</p>

          <button className="btn btn-light btn-lg btn-block">Read More</button>
        </div>
      </div>
    )
}


export default OurCenterCard;