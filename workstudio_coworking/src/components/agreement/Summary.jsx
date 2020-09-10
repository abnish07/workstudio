import React from 'react'

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div className="container">
                <div className="row">
                <p>
                <strong>IN WITNESS WHEREOF,</strong> the Parties hereto have hereunto put their respective hands to this Agreement on this <input type="date" />
                </p>
                </div>
            </div>

            <div className="container ">
                <h4 className="text-center">
                    <strong>
                Summarized Agreement for Use of Work-Studio Coworking,</strong>
                </h4>
                <div className="justify-center text-center"><input type="text" className="form-control offset-4 col-3 " placeholder="enter the center number" /></div>
                
            </div>

            <div className="container mt-4">

               <div className="form-group row">
                    <label className="col-3">Date:</label>
                    <input type="date" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Name of Organisation:</label>
                    <input type="text" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Date of Commencement of Space use:</label>
                    <input type="date" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Location:</label>
                    <input type="text" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Space Offered
:</label>
                    <input type="text" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Plan:</label>
                    <input type="text" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Inclusions:</label>
                    <input type="text" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Meeting Room Credits:</label>
                    <input type="text" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Conference Room Credits:</label>
                    <input type="text" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Additional Services:</label>
                    <input type="text" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Centre Timing:</label>
                    <input type="text" className="form-control col-4" />
               </div>

               <div className="form-group row">
                    <label className="col-3">Signing Agreement:</label>
                    <input type="text" className="form-control col-4" />
               </div>
            </div>

            <div className="container">
                <h5><strong><u>ADDITIONAL TERMS & CONDITIONS</u></strong></h5>
                <div className="row">
                    <ul>
                        <li>
                            <p>
                            This proposal is valid only for the duration mentioned above, unless mutually extended and is subject to availability of space.
                            </p>
                        </li>

                        <li>
                            <p>
                            The charges above (including monthly usage fee) are subject to GST applicable or levied by the concerned statutory bodies from time to time.
                            </p>
                        </li>

                        <li>
                            <p>
                            Any additional equipment/ services/ facilities/ provisions and or changes in the existing infrastructure would be extended if possible and at an additional cost. Use of space beyond Centre timing and days would be chargeable as per rate card available with the community manager.
                            </p>
                        </li>

                        <li>
                            <p>
                            Rent is to be paid between 01 to 05 day of every month at beginning, delay will be charged Rs.25/- (Rs. Twenty-Five) per day. 
                            </p>
                        </li>

                        <li>
                            <p>
                                All occupants need to complete the KYC documents and hand over to the community manager for us to grant access to the premise and enable 
services.
                            </p>
                        </li>

                        <li>
                            <p>
                                Please contact community in-charge for list of National/Public Holidays.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
            <div className="row">
            We do hope that the above offer is as per your expectations. We will be pleased to explain or discuss any of the information provided above.
            </div></div>

            <div className="container mt-5">
                <div className="row ">
                    <div className="col-6">
                        <span><strong> Lavero Infra Services Pvt. Ltd.  </strong></span>
                        <div><p><strong><u>For and on behalf of Coworking space provider </u></strong></p></div>
                        <div className="form-group">
                            <label>
                                Signature
                            </label>
                            <input type="file" className="form-control-file" />
                        </div>

                        <div className="form-group">
                            <label>
                                Company Stamp
                            </label>
                            <input type="file" className="form-control-file" />
                        </div>
                    </div>

                    <div className="col-6">
                       
                        <div><p><strong><u>For and on behalf of the client:  </u></strong></p></div>
                        <div className="form-group">
                            <label>
                                Signature
                            </label>
                            <input type="file" className="form-control-file" />
                        </div>

                        <div className="form-group">
                            <label>
                                Company Stamp
                            </label>
                            <input type="file" className="form-control-file" />
                        </div>
                    </div>
                </div>
            </div>

            </>

         );
    }
}
 
export default Summary;