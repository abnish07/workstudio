import React from "react";
import './Home.css';
import AdvantageCard from './AdvantageCard';

class WhatWeDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="what-we-do my-5 container">
          <h2 className="text-center cardTitle" style={{fontSize: 32}}>What We Do</h2>
          {/* <div className="row">
              <div className="col-12"> */}
        <ul className="nav nav-tabs mt-5 " id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="office-tab"
              data-toggle="tab"
              href="#office-space"
              role="tab"
              aria-controls="office-space"
              aria-selected="true"
            >
              Office Space
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="coworking-tab"
              data-toggle="tab"
              href="#coworking"
              role="tab"
              aria-controls="coworking"
              aria-selected="false"
            >
              Coworking
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="virtual-tab"
              data-toggle="tab"
              href="#virtual"
              role="tab"
              aria-controls="virtual"
              aria-selected="false"
            >
              Virtual Office
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="meeting-tab"
              data-toggle="tab"
              href="#meeting"
              role="tab"
              aria-controls="meeting"
              aria-selected="false"
            >
              meeting Rooms
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="membership-tab"
              data-toggle="tab"
              href="#membership"
              role="tab"
              aria-controls="membership"
              aria-selected="false"
            >
              Membership
            </a>
          </li>
        </ul>
        {/* </div>
        </div> */}
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="office-space"
            role="tabpanel"
            aria-labelledby="office-tab"
          >
           <AdvantageCard 
           leftImage="https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_418,h_227/CentreImagery/4152/4152_5.jpg" cardTitle="Open to Everyone" 
           cardDesc="Our fully-serviced private office spaces give teams of all sizes an inspiring environment to focus, collaborate and do their best work.1" 
           iconDesc="Choose from thousands of locations"
           />
          </div>
          <div
            className="tab-pane fade"
            id="coworking"
            role="tabpanel"
            aria-labelledby="coworking-tab"
          >
           <AdvantageCard 
           leftImage="https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_418,h_227/CentreImagery/4152/4152_5.jpg" cardTitle="Open to Everyone" 
           cardDesc="Our fully-serviced private office spaces give teams of all sizes an inspiring environment to focus, collaborate and do their best work.2"
           iconDesc="Choose from thousands of locations2"
           />
          </div>
          <div
            className="tab-pane fade"
            id="virtual"
            role="tabpanel"
            aria-labelledby="virtual-tab"
          >
            <AdvantageCard
            leftImage="https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_418,h_227/CentreImagery/4152/4152_5.jpg" cardTitle="Open to Everyone" 
            cardDesc="Our fully-serviced private office spaces give teams of all sizes an inspiring environment to focus, collaborate and do their best work.3"
            iconDesc="Choose from thousands of locations3"
            />
          </div>
          <div
            className="tab-pane fade"
            id="meeting"
            role="tabpanel"
            aria-labelledby="meeting-tab"
          >
            <AdvantageCard
            leftImage="https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_418,h_227/CentreImagery/4152/4152_5.jpg" cardTitle="Open to Everyone" 
            cardDesc="Our fully-serviced private office spaces give teams of all sizes an inspiring environment to focus, collaborate and do their best work.4"
            iconDesc="Choose from thousands of locations4"
            />
          </div>
          <div
            className="tab-pane fade"
            id="membership"
            role="tabpanel"
            aria-labelledby="membership-tab"
          >
            <AdvantageCard
            leftImage="https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_418,h_227/CentreImagery/4152/4152_5.jpg" cardTitle="Open to Everyone" 
            cardDesc="Our fully-serviced private office spaces give teams of all sizes an inspiring environment to focus, collaborate and do their best work.5"
            iconDesc="Choose from thousands of locations5"
            />
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default WhatWeDo;
