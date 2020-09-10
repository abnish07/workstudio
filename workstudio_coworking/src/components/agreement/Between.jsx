import React from 'react'

class Between extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2 className="text-center"><strong>Service Agreement</strong></h2>
                <div className="container">
                    <div className="row">
                    <p>
                This services Agreement (“the Agreement”) is made on the <input type="date" placeholder="enter the starting date" />(“Execution Date”).
                </p>
                    </div>
                </div>
               
               <h5 className="text-center"><strong > Between</strong></h5>

                <div className="container">
                    <div className="row">

                    <p>
                    (1) “Client”, and its associates which expression shall unless it be repugnant to the context or meaning thereof, include its successors and permitted assigns:
                    <div className="form-group col-6">
                        <label>Client Name</label>
                        <input type="text" className="form-control" placeholder="enter the client name" />
                    </div>
                    <div className="form-group col-6">
                        <label>Regd. Address:</label>
                        <input type="text" className="form-control" placeholder="enter the Register Address" />
                    </div>

                    <div className="form-group col-6">
                        <label>Represented By:</label>
                        <input type="text" className="form-control" placeholder="Represented By" />
                    </div>

                    <div className="form-group col-6">
                        <label>Email:</label>
                        <input type="text" className="form-control" placeholder="enter the official email id" />
                    </div>
                    </p>
                    </div>
                </div>

                <h5 className="text-center"><strong > AND</strong></h5>


                <div className="container">
                    <div className="row">
                    <p>
                    (2) “Host” or Coworking Space Provider, and its associates which expression shall unless it be repugnant to the context or meaning thereof, include its successors and permitted assigns)
                    </p>
                    </div>
                </div>

                <div className="container text-center">

                    <div><strong>M/S Lavero Infra Services Pvt Ltd</strong></div>

                    <div> <strong> Reg. Address:</strong>  A/3 PC Colony, Kankarbagh, Patna, Bihar-800020</div>

                    <div>  <strong>Corp. Address: </strong>6th Floor, DS Business Park, Saguna More, Bailey Road, Danapur Cantt, Patna, Bihar-800020 </div>

                    <div>
                   <strong>Represented By: </strong> <input type="text" className="form-control col-6" placeholder="represented By" />
                    </div>

                    <div>
                   
                   <strong>Email: admin@workstudiocoworking.com</strong> </div>
                </div>
            <div>
                <p>
                They may singly be referred as the Party and collectively as the Parties to this Agreement

For the avoidance of doubt, references to “Premises”” Centre”” Space” in these Terms refer to Client’s access to and use of Host’s Coworking space
                </p>
            </div>
            </div>
         );
    }
}
 
export default Between;