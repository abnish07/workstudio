import React from 'react'

class Purpose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>  
                <div className="container">
                    <div className="row">
                    <h5>
                    <strong>
                    Now, This Agreement (including the Exhibits) constitutes the entire Agreement between the Host and the Client regarding the use of the Centre, THE PARTIES HERETO HEREBY AGREE AS FOLLOWS:
                    </strong>
                </h5>
                <h5><strong>Purpose:</strong></h5>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <p>
                    Subject to the terms and conditions of this Agreement, the Client has approached the Co-working Space Provider to express its interest and confirmation to occupy space within Co-working Space Provider’s ‘Centre’. The Host hereby grants, subject to fulfillment of the clause-4 and not more than the permitted occupancy as per numbers of workstations or as authorized by the host at any given point of time, to the Client and its employees, personnel, contractors, representatives and agents a non-transferable license to occupy and use the Space prescribed in the building (the “License”) for all its business and operational purposes during the Term and the Client accepts such License subject to the terms and conditions and for consideration as set out below:
                </p>
                    </div>
                </div>

                <div className="container">
                    <div className="form-group row">
                        <label className="col-3"><strong>Space and Inventory detail: </strong> </label>
                        <input type="text" className="form-control col-6" placeholder="Space for inventory details" />
                    </div>

                    <div className="form-group row">
                        <label className="col-3"><strong>Term Commencement Date: </strong> </label>
                        <input type="date" className="form-control col-2" placeholder="Term Commencement Date:" />
                        <label className="col-2"><strong>End Date: </strong> </label>
                        <input type="date" className="form-control col-2" placeholder="Term Commencement Date:" />
                    </div>

                    <div className="form-group row">
                        <label className="col-3"><strong>Monthly occupancy Fee/Charges(INR) </strong> </label>
                        <input type="text" className="form-control col-6" placeholder="monthly charge" />
                    </div>

                    <div className="form-group row">
                        <label className="col-3"><strong>Fee commencement Date </strong> </label>
                        <input type="date" className="form-control col-6" />
                    </div>

                    <div className="form-group row">
                        <label className="col-3"><strong>Location </strong> </label>
                        <input type="text" className="form-control col-6" placeholder="location"  />
                    </div>

                    <div className="form-group row">
                        <label className="col-3"><strong>Deposite(INR)</strong> </label>
                        <input type="text" className="form-control col-6" placeholder="deposite"  />
                    </div>
                    <p className="text-muted "><small><u>*Free Value-added services and perks to the client and Occupants provided by the Host.</u></small></p>
                </div>
                
                <div className="container">
                        <h5><strong><u>Office</u></strong></h5>
                        <ol>
                            <li>1 Lockable Cabin (1-seat)</li>
                            <li>Fully Air-conditioned office</li>
                            <li>Server Space/ Printer Space</li>
                        </ol>
                </div>

                <div className="container">
                        <h5><strong><u>Shared & Support Services:</u></strong></h5>
                        <ul>
                            <li>Wash rooms for Ladies and Gents.</li>
                            <li>House-Keeping Services.</li>
                            <li>Front Desk Assistance.</li>

                            <li>Reception at Entrance.</li>

                            <li>Cafeteria Space</li>
                            <li>Internet Connection</li>
                            <li>Tea/Coffee – 2 Times a day</li>
                        </ul>
                </div>
            </>
         );
    }
}
 
export default Purpose;