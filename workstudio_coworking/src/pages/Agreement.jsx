import React from "react";
// import Between from "../components/agreement/Between";
// import Purpose from "../components/agreement/Purpose";
// import Terms from "../components/agreement/Terms";
// import Summary from "../components/agreement/Summary";
class Agreement extends React.Component{
      constructor(props){
        super(props)
        this.state={
          agreementDate: Date.now,
          clientName: '',
          clientRegisteredAddress: '',
          clientRepresentedBy:'',
          clientEmail: '',
          workStudioRepresentedBy: '',
          spaceInventoryDetails: '',
          commencementDate: Date.now,
          endDate: '',
          monthlyOccupancyCharge: '',
          freeCommencementDate: '',
          workstudioLocation: '',
          depositeAmount: '',
          workstudioCenter: '',
          summarizedPlan: '',
          summarizedInclusions: '',
          meetingRoomCredits: '',
          conferenceRoomCredits: '',
          additionalServices: '',
          centerTiming: '',
          signingTiming: '',
          workstudioSignature: null,
          workstudioStamp: null,
          clientSignature: null,
          clientStamp: null
        }
      }

      handleChange=(e)=>{
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      render(){

        const { agreementDate, clientName, clientRegisteredAddress, clientRepresentedBy, clientEmail, workStudioRepresentedBy, spaceInventoryDetails, commencementDate, endDate, monthlyOccupancyCharge, freeCommencementDate, workstudioLocation, depositeAmount, workstudioCenter, summarizedPlan, summarizedInclusions, meetingRoomCredits, conferenceRoomCredits, additionalServices, centerTiming, signingTiming, workstudioSignature, workstudioStamp, clientSignature, clientStamp   }= this.state;

        const { handleChange } = this;

        console.log("total Data", agreementDate, clientName, clientRegisteredAddress, clientRepresentedBy, clientEmail, workStudioRepresentedBy, spaceInventoryDetails, commencementDate, endDate, monthlyOccupancyCharge, freeCommencementDate, workstudioLocation, depositeAmount, workstudioCenter, summarizedPlan, summarizedInclusions, meetingRoomCredits, conferenceRoomCredits, additionalServices, centerTiming, signingTiming,  workstudioSignature, workstudioStamp, clientSignature, clientStamp  )

  return (
      <>
    <div className="w-100">
      <div style={imgStyle} className="img-fluid">
        <h1 style={h1Style}>
          Our Agreements
        </h1>
        <h3 style={h3Style}>we ensure that your enquiry is addressed within 24 hours</h3>
      </div>
      <div className="col-6 mt-5 px-5">
      </div>
    </div>
    
    {/* Between Module */}

    <div>
                <h2 className="text-center"><strong>Service Agreement</strong></h2>
                <div className="container">
                    <div className="row">
                    <p>
                This services Agreement (“the Agreement”) is made on the <input type="date" placeholder="enter the starting date" name="agreementDate" value={agreementDate} onChange={handleChange} />(“Execution Date”).
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
                        <input type="text" className="form-control" placeholder="enter the client name" name="clientName" value={clientName} onChange={handleChange} />
                    </div>
                    <div className="form-group col-6">
                        <label>Regd. Address:</label>
                        <input type="text" className="form-control" placeholder="enter the Register Address" name="clientRegisteredAddress" value={clientRegisteredAddress} onChange={handleChange} />
                    </div>

                    <div className="form-group col-6">
                        <label>Represented By:</label>
                        <input type="text" className="form-control" placeholder="Represented By" name="clientRepresentedBy" value={clientRepresentedBy} onChange={handleChange} />
                    </div>

                    <div className="form-group col-6">
                        <label>Email:</label>
                        <input type="text" className="form-control" placeholder="enter the official email id" name="clientEmail" value={clientEmail} onChange={handleChange} />
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
                   <strong>Represented By: </strong> <input type="text" className="form-control col-6" placeholder="represented By" name="workStudioRepresentedBy" value={workStudioRepresentedBy} onChange={handleChange} />
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


    {/* Purpose Module Space Inventory */}

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
                        <input type="text" className="form-control col-6" placeholder="Space for inventory details" name="spaceInventoryDetails" value={spaceInventoryDetails} onChange={handleChange} />
                    </div>

                    <div className="form-group row">
                        <label className="col-3"><strong>Term Commencement Date: </strong> </label>
                        <input type="date" className="form-control col-2" placeholder="Term Commencement Date:" name="commencementDate" value={commencementDate} onChange={handleChange} />

                        <label className="col-2"><strong>End Date: </strong> </label>
                        <input type="date" className="form-control col-2" placeholder="Term Commencement Date:" name="endDate" value={endDate} onChange={handleChange} />
                    </div>

                    <div className="form-group row">
                        <label className="col-3"><strong>Monthly occupancy Fee/Charges(INR) </strong> </label>
                        <input type="text" className="form-control col-6" placeholder="monthly charge" name="monthlyOccupancyCharge" value={monthlyOccupancyCharge} onChange={handleChange} />
                    </div>

                    <div className="form-group row">
                        <label className="col-3"><strong>Fee commencement Date </strong> </label>
                        <input type="date" className="form-control col-6" name="freeCommencementDate" value={freeCommencementDate} onChange={handleChange} />
                    </div>

                    <div className="form-group row">
                        <label className="col-3"><strong>Location </strong> </label>
                        <input type="text" className="form-control col-6" placeholder="location" name="workstudioLocation" value={workstudioLocation} onChange={handleChange}  />
                    </div>

                    <div className="form-group row">
                        <label className="col-3"><strong>Deposite(INR)</strong> </label>
                        <input type="text" className="form-control col-6" placeholder="deposite" name="depositeAmount" value={depositeAmount} onChange={handleChange}  />
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


    {/* Terms Module */}

    <div className="container">
               <ol>
                   <h5><strong> <li> Terms</li> </strong></h5>
                 <div className="row">
                      <p>
                      This Agreement shall come into force on the Commencement Date, as specifically mentioned above and shall remain in force unless terminated early, for a period of 11 (Eleven) Months from the Commencement Date. Upon expiry of aforesaid period, the Parties may extend this Agreement for further period on mutually agreed terms in writing. 
                      </p>
                 </div>

                <h5><strong><li> 
                <span className="text-decoration-none">
                      This agreement shall have a lock-in period of 6 (six) months.
                      </span>
                    </li> </strong></h5>
                   

                <h5><strong><li>Responsibilities and Obligations of the Host: </li> </strong></h5>
                 <div className="row">
                      <p>
                      The Host/ Co-Working Space Provider shall be responsible to ensure the following: -
                      </p>
                      <ol type="a">
                        <li>Ensure that the Premises as well as the space occupied by the Client are clean and hygienic as well as ensure that sufficient staff are engaged for this purpose; </li>

                        <li>Ensure that sufficient security personnel are engaged at the Premises at all times;  </li>

                        <li>Ensure that all statutory licenses and consents are always kept in force and renewed from time to time so as to provide the Client uninterrupted rights to use the Premises for its business purposes;</li>

                        <li>Ensure that regular maintenance is carried out to ensure that there is no degradation in the look and feel of the Premises; and </li>
                      </ol>
                 </div>
                 
                 <h5><strong> <li> Identification Documents: </li> </strong></h5>
                 <div className="row">
                      <p>
                      The Client agrees to provide all documents, for identification & verification purposes/s to Host (list of documents i.e. only Company issued ID card) 
                      </p>
                 </div>
                 
                 <h5><strong> <li> Monthly occupancy Fee: </li> </strong></h5>
                 <div className="row">
                      <p>
                      The Monthly occupancy Fee shall be payable monthly in advance, on the first day of each and every month and latest by 5th of that month to Coworking Space Provider. All pro-rata adjustment shall be subject to notice clause or as per Host approval and Client, if permitted by the host, shall only pay the fee applicable for the actual period occupied. Also, it is agreed between the parties that any increase in the number of occupants will be pre-informed and invoice will be raised accordingly. 
                      </p>
                      <p>
                          In the event that the Client is in need of additional space, Host shall ensure that adequate arrangements are made for the same and in the event that such request cannot be accommodated, the Parties will mutually discuss and implement a suitable alternative.   
                      </p> 
                    <p>
                    In case there is a change in ownership of the Centre, either during the present tenure of this Agreement and/or the extended period, the Host shall put all the efforts to keep client’s interest unaffected as per this agreement. Further, in such an event, the Client shall, on receipt of a written intimation in this regard from the Host and the new owner(s), shall at torn in favor of the new owner(s) and pay the monthly occupancy fee to the new owner(s).
                    </p>

                 </div>
                 
                 <h5><strong> <li> Security Deposits: </li> </strong></h5>
                 <div className="row">
                      <p>
                      The Client agrees to pay an interest free security deposit, if applicable, upon entering into this Agreement. A demand for additional security deposit will be constituted and payable by the client, in case of enhancement of occupancy upon mutual consent of the Parties.  
                      </p>
                 </div>

                 <h5><strong> <li> Use. </li> </strong></h5>
                 <div className="row">
                    <ol type="i">
                    <h6><strong> <li><u>The Client’s name and address.</u>  </li> </strong></h6>
                    <p>The Client agrees to carry on business in its name or in its affiliates’ name. The affiliates of the Client will be intimated to the host within a reasonable period of time. </p>

                    <h6><strong> <li><u>Use of office Address.</u>  </li> </strong></h6>
                    <p>The Client may use the Coworking address as its business address only. </p>

                    <h6><strong> <li><u>Installations in the Premises.</u>  </li> </strong></h6>
                    <p>The Client shall have the right to install any cabling, IT or telecom connections and any other equipment for Client’s business purposes and shall notify of such installations to the Host, If nothing pertains to conflict of the interest, host will not unnecessary withhold the approval. </p>

                    <h6><strong> <li><u>Alternations to the Premises.</u>  </li> </strong></h6>
                    <p>The Client shall not make any alterations or additions to the Premises without prior written consent of Coworking Space Provider. </p>

                    <h6><strong> <li><u>Non-Compete Business.</u>  </li> </strong></h6>
                    <p>The Client must not carry on a business that directly or indirectly competes with Coworking Space Provider. </p>

                    </ol>
                 </div>

                 <h5><strong> <li> Access: </li> </strong></h5>
                 <div className="row">
                      <ol type="i">
                        <p><li>The Client will have access to the premises on all 7 (seven) days of the week and shall be accessible 24 hours a day. The only exception will be gazette notified Public Holidays or force majeure events.</li>
                        </p>

                        <p><li>The Services and the facility of central air-conditioning and other similar facilities i.e. power backup, adequate support staff and services will not be available on Sundays and Public Holidays. </li></p>

                        <p><li>The Client is required to disclose the number of persons who will work in the premises for the purpose of enabling the Host to ensure that sufficient space is allocated to meet the operational requirements of the Client </li></p>

                        <p><li>The Client agrees not to smoke in the office nor consume alcoholic beverages in the Premises and/or elsewhere in the Centre or any part thereof. However, smoking shall be permissible in designated smoking zones allocated for this purpose around the Centre. </li>
                        </p>

                        <p><li>The Client shall utilize, and shall ensure that its employees utilize, the equipment and facilities provided in the Premises with due care and caution. The Client will be liable for all direct damage or destruction caused by it or its employees to the equipment and facilities provided in the Centre in particular with the exception of normal wear and tear  </li></p>
                        </ol>
                 </div>
                        
                 <h5><strong> <li> Compliance. </li> </strong></h5>
                 <div className="row">
                      <ol type="i">
                        <p><li>The Client must comply with all relevant laws and regulations in the conduct of its business. The Client must not engage in any illegal activity in connection with its use of the Centre. The Client must not do anything that may interfere with the use of the Centre by Coworking space provider or by others or cause nuisance or annoyance. </li>
                        </p>

                        <p><li>The Client is liable for any direct damage caused by it or by those at the Client’s invitation whether express or implied, including but not limited to all employees, contractors, authorized agents or other persons present on the premises. The Client agrees to repair in a proper way any such damage and if the Client fails to do so Coworking space provider may do so at the Client’s expense.  </li></p>

                        <p><li>In case of deliberate misconduct, breach of law or gross negligence by the client/company or its employees or obligations under this Agreement, the host shall reserve the right to forthwith terminate this Agreement and/or claim such damages for breach as prescribed under law for loss suffered by the host due to the breach. </li></p>

                      
                        </ol>
                        </div>

                        <h5><strong> <li>Inspection and Maintenance.</li> </strong></h5>
                 <div className="row">
                      <p>
                      Coworking space provider may need to enter the Client’s occupied area and may do so as long as the client’s work and regular business content is not impacted adversely. Unless there is an emergency, Coworking space provider will attempt to notify the Client electronically in advance when Coworking space provider needs access to carry out testing, repair or works other than routine inspection, cleaning and maintenance.
                        </p>
                        <p>
                       Coworking space provider will also adhere to reasonable security procedures to protect the confidentiality of Client’s business. 
                      </p>
                 </div>

                        <h5><strong> <li>Invoices.</li> </strong></h5>
                 <div className="row">
                      <p>
                      Host will send a due date reminder to the client electronically with a due period of 7 days.If payment is not made in the next 14 days, notice will be issued to terminate the agreement within 30 days.
                        </p>                    
                 </div>

                        <h5><strong> <li>Invoice disputes.	</li> </strong></h5>
                 <div className="row">
                      <p>
                      Any dispute in payment of monthly occupancy fees shall be notified to the host within 3 (three) days from the date of invoice, however, this shall not be the reason to withhold the demand of the demand instrument/s i.e. invoice / payment advice, etc.
                      </p> 
                      <p>Coworking Space Provider and the Client will endeavor to resolve by mutual discussion, the disputed portion of the charges for Services within 1 (one) week of receiving a notice form the Client.
                        </p>                    
                 </div>
                   
                        <h5><strong> <li>Deposit Refund.	</li> </strong></h5>
                 <div className="row">
                      <p>
                      The security deposit, or any balance after deducting outstanding fees due to Host, under this license, will be returned to the Client within 30 business days, after the Client has settled their account and has fulfilled all obligations under this license. 
                      </p>          
                 </div>

                        <h5><strong> <li>Renewal</li> </strong></h5>
                 <div className="row">
                      <p>
                      Upon expiry of the tenure of this Agreement the Parties shall have the right to extend this Agreement for further period on such mutually agreed terms and conditions.
                      </p> 
                                      
                 </div>

                        <h5><strong> <li>Handing over of the Premises.</li> </strong></h5>
                 <div className="row">
                      <ol type="i">

                        <li> <p>
                          Upon expiry of this Agreement or early termination in accordance with the terms herein the Client shall remove all its equipment, belongings, articles and things and its employees/personnel. The Client shall simultaneously handover the vacant charge of the premises along with any keys or access cards to the Host.
                          </p> 
                          </li>
                        
                          <li>  <p>
                          The Client shall remove from the premises their fixtures and equipment provided that any damage or defacement is occasioned to any part of the Premises in the course of such removal, the same shall be remedied by the Client immediately and at their own expense.
                          </p>
                          <p>
                           If the Client fails to do so, the Host may do so at the Client’s expense. If the Client leaves any property in the Centre, Coworking space provider to notify the Client of such property and provide the Client the right of access for the purpose of collecting such property.
                           </p>
                          </li>
                          <li>
                              <p>The Client agrees to leave the premises in the same condition as it was when the Client took it. </p>
                          </li>

                          <li>
                              <p>If the Client defaults in vacating the premises upon the expiry or early termination of this Agreement, the Client shall be liable to pay a penalty amount equivalent to the usage fee applicable to the number of days of occupation beyond the termination date. Coworking space provider may, at its discretion, permit the Client an extension, subject to payment of applicable fees as will be mutually agreed to between the Parties in writing. </p>
                          </li>
                          </ol>        
                 </div>
                   
                 <h5><strong> <li>Termination of the License.</li> </strong></h5>
                 <div className="row">
                      <ol type="i">

                        <li><strong><u>Notice:</u></strong> <p>
                        Either the host or the client can terminate this license at any time without assigning any reasons by giving at least 1 (one) months’ written notice to the other with a copy of the same on email. All notices served on email will be deemed delivered and read after 3 business days.
                          </p> 
                          </li>
                        
                          <li><strong><u>Ending this license immediately.</u></strong>  <p>
                          Each Party to this Agreement may put an end to this license immediately, without needing to follow any additional procedure, if 
                          </p>
                          <ol type="a">
                              
                              <li><p>
                              Any Party becomes insolvent, bankrupt, goes into liquidation or becomes unable to pay its debts as they fall due, or </p>
                              </li>

                              <li><p>
                              Any Party has failed to comply with any of the obligations/provisions of this Agreement, or </p>
                              </li>

                              <li><p>
                              In the event if Host breaches any applicable law, misrepresents or commits breach of terms of this Agreement that if such default, if capable of being cured, then a 14 (fourteen) days cure period will be initiated and if the Host cures such default to the best adherence of this agreement prior to expiration of such notice period, then enforcement will be withdrawn, if any, including termination. </p>
                              </li>
                          </ol>
                          </li>
                          
                          </ol>        
                 </div>


                 <h5><strong> <li>Representations and Warranties</li> </strong></h5>
                 <p>Host hereby covenants and warrants that:</p>

                 <div className="row">
                      <ol type="a">

                        <li> <p>
                        the Host has full right and authority to sub-lease the Centre upon the terms and conditions herein set forth.
                          </p> 
                          </li>
                        
                          <li> <p>
                          the Centre has good and marketable title to the premises
                          </p>
                          </li>

                          <li> <p>
                          the Centre is not subject to the lien of any deed of trust, mortgage or other similar encumbering instrument which is not subordinated to this Agreement.
                          </p>
                          </li>

                          <li> <p>
                          Host will put the Client into complete possession of the Centre free from all orders, restrictions, covenants, agreements, leases, easements, laws, codes, ordinances, regulations or decrees which would, in any way, prevent or inhibit the use of the Centre by the Client.
                          </p>
                          </li>

                          <li> <p>
                          the Host will, at the time of delivery of possession, ensure that the Centre is suitable for the Client’s business purposes;   
                          </p>
                          </li>

                          <li> <p>
                         the Centre or the premises is in compliance with all applicable local municipal laws including any building by-laws and ensure that the relevant licenses are valid throughout the Term of this Agreement.  
                          </p>
                          </li>
                          
                          </ol>        
                 </div>


                 <h5><strong> <li>Indemnity</li> </strong></h5>
                 <p>Parties shall indemnify, protect, defend and hold harmless each other, its employees, agents, customers, licensees or invitees from and against any and all claims arising out of;</p>

                 <div className="row">
                      <ol type="a">

                        <li> <p>
                        breach of Representations and Warranties or any misrepresentation in this regard; 
                          </p> 
                          </li>
                        
                          <li> <p>
                          gross negligence and/or willful misconduct; 
                          </p>
                          </li>

                          <li> <p>
                          breach of applicable law; or  
                          </p>
                          </li>

                          <li> <p>
                          any breach of terms of this Agreement. 
                          </p>
                          </li>
                          
                          </ol>        
                 </div>

                 <h5><strong> <li>Liability and Disclaimer.</li> </strong></h5>

                 <div className="row">
                      <ol type="1">

                        <li> <p>
                        Coworking Space Provider shall be liable for all the direct damages that the Client may incur for any of the acts or omissions of host or any of its present and future affiliates, employees, members, representatives, successors and assigns under any provisions of this Agreement. 
                       </p> <p>
                        Coworking space provider will not in any circumstances have any liability for loss of business, loss of profits, loss of anticipated savings, loss of or damage to data, third party claims or any consequential loss unless Coworking space provider otherwise agrees in writing. 
                          </p> 
                          </li>
                        
                          <li> <p>
                          The Parties will not be liable to continue, any obligation, related directly or indirectly, with the covenants of this agreement, whether written or communicated verbally, after expiry / early termination of this agreement, irrespective of the reason/s whatsoever.
                          </p>
                          </li>

                          <li> <p>
                          In case of deliberate misconduct and gross negligence by the any of the party or its employees or its other occupants, then the party is liable to rectify or make the loss good.  
                          </p>
                          </li>

                          <li> <p>
                          Except for gross negligence and deliberate misconduct;
                          </p>
                         

                            <ol type="a">
                                <li><p>
                                the Host shall not be responsible for any loss, damage, corruption of data or any loss of information whether from hardware, software or internet damage that may occur to the Client during the term of this license.</p>
                                </li>

                                <li><p>
                                Host shall not be responsible for any loss, damage or loss of information resulting from communications or data failure including voice, communication and the internet. </p>
                                </li>
                            </ol>
                         
                          </li>
                          </ol>        
                 </div>

  <h5><strong> <li>Liability and Disclaimer.</li> </strong></h5>

                 <div className="row">
                      <ol type="1">

                        <li> <p>
                        Coworking Space Provider shall be liable for all the direct damages that the Client may incur for any of the acts or omissions of host or any of its present and future affiliates, employees, members, representatives, successors and assigns under any provisions of this Agreement. 
                       </p> <p>
                        Coworking space provider will not in any circumstances have any liability for loss of business, loss of profits, loss of anticipated savings, loss of or damage to data, third party claims or any consequential loss unless Coworking space provider otherwise agrees in writing. 
                          </p> 
                          </li>
                        
                          <li> <p>
                          The Parties will not be liable to continue, any obligation, related directly or indirectly, with the covenants of this agreement, whether written or communicated verbally, after expiry / early termination of this agreement, irrespective of the reason/s whatsoever.
                          </p>
                          </li>

                          <li> <p>
                          In case of deliberate misconduct and gross negligence by the any of the party or its employees or its other occupants, then the party is liable to rectify or make the loss good.  
                          </p>
                          </li>

                          <li> <p>
                          Except for gross negligence and deliberate misconduct;
                          </p>
                         

                            <ol type="a">
                                <li><p>
                                the Host shall not be responsible for any loss, damage, corruption of data or any loss of information whether from hardware, software or internet damage that may occur to the Client during the term of this license.</p>
                                </li>

                                <li><p>
                                Host shall not be responsible for any loss, damage or loss of information resulting from communications or data failure including voice, communication and the internet. </p>
                                </li>
                            </ol>
                         
                          </li>
                          </ol>        
                 </div>

                 <h5><strong> <li>Confidentiality.	</li> </strong></h5>
                 <div className="row">
                      <p>
                      The terms of this License are confidential. Neither the Client nor host may disclose them without the other’s consent unless required to do so by law or an official authority. This obligation continues after this License ends. 
                      </p> 
                                      
                 </div>

                 <h5><strong> <li>Governing Law and Jurisdiction.	</li> </strong></h5>
                 <div className="row">
                      <p>
                      This Agreement shall be governed exclusively by the laws of India. In the event of any dispute, at the outset Lavero Infra Services Pvt. Ltd.  shall facilitate the amicable resolution of the matter between the Client and the Host. In the event that amicable resolution fails, the courts at Indore, Madhya Pradesh shall have exclusive jurisdiction over all matters connected with this Agreement. 	
                      </p> 
                                      
                 </div>

                 <h5><strong> <li>Force Majeure	</li> </strong></h5>
                 <div className="row">
                      <p>
                      In the event the Centre or the premises are destroyed or damaged, at any time, by any event falling within the term “force majeure”, this License shall come to an end on Coworking space provider giving to the Client notice in writing to that effect. 
                      </p>
                      <p>Coworking space provider shall within two weeks of giving notice that this License has come to an end for the reasons aforesaid refund to the Client the Security Deposit and the monthly fees paid by the Client after adjusting there from all dues under any head for the past period up to the date of occurrence of the event of force majeure and payable by the Client under this License.
                      </p> 
                                   
                 </div>

                 <h5><strong> <li>DISPUTE RESOLUTION </li> </strong></h5>
                 <div className="row">
                      <p>
                      All disputes, claims or differences arising out of or in connection with the execution, interpretation and performance of this Agreement shall be first referred to PoC of the parties for an amicable dispute resolution and should they both fail to resolve the dispute, claims or differences within a period of 30 (thirty) days from the dispute being referred to them, if incurable in first attempt of resolution, such dispute, claim or differences shall be referred for Arbitration under the Indian Arbitration & Conciliation Act, 1996, as amended from time to time. 
                     </p>
                     <p>
                      The arbitral tribunal shall be composed of a sole arbitrator appointed with mutual consent of the PARTIES and located in Patna. The Arbitration proceeding shall be held in English and the expenses of the proceedings shall be borne equally by both the PARTIES. Nothing in this agreement shall limit the PARTIES' rights to seek interim injunctive relief or to enforce an arbitration award in any court of law.
                         </p>             
                 </div>


                 <h5><strong> <li>Survival </li> </strong></h5>
                 <div className="row">
                      <p>
                      The obligations of the Parties under this Agreement will not survive after the termination, except in case there is any monetary liability on the client.
                         </p>             
                 </div>




                 </ol> 
             </div>


    {/* Summary Module */}

    <div className="container">
                <div className="row">
                <p>
                <strong>IN WITNESS WHEREOF,</strong> the Parties hereto have hereunto put their respective hands to this Agreement on this <input type="date" name="agreementDate" value={agreementDate} onChange={handleChange} />
                </p>
                </div>
            </div>

            <div className="container ">
                <h4 className="text-center">
                    <strong>
                Summarized Agreement for Use of Work-Studio Coworking,</strong>
                </h4>
                <div className="justify-center text-center"><input type="text" className="form-control offset-4 col-3 " placeholder="enter the center name" name="workstudioCenter" value={workstudioCenter} onChange={handleChange} /></div>
                
            </div>

            <div className="container mt-4">

               <div className="form-group row">
                    <label className="col-3">Date:</label>
                    <input type="date" className="form-control col-4" name="agreementDate" value={agreementDate} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Name of Organisation:</label>
                    <input type="text" className="form-control col-4" name="clientName" value={clientName} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Date of Commencement of Space use:</label>
                    <input type="date" className="form-control col-4" name="spaceInventoryDetails" value={spaceInventoryDetails} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Location:</label>
                    <input type="text" className="form-control col-4" name="workstudioCenter" value={workstudioCenter} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Space Offered
:</label>
                    <input type="text" className="form-control col-4" name="spaceInventoryDetails" value={spaceInventoryDetails} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Plan:</label>
                    <input type="text" className="form-control col-4" name="summarizedPlan" value={summarizedPlan} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Inclusions:</label>
                    <input type="text" className="form-control col-4" name="summarizedInclusions" value={summarizedInclusions} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Meeting Room Credits:</label>
                    <input type="text" className="form-control col-4" name="meetingRoomCredits" value={meetingRoomCredits} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Conference Room Credits:</label>
                    <input type="text" className="form-control col-4" name="conferenceRoomCredits" value={conferenceRoomCredits} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Additional Services:</label>
                    <input type="text" className="form-control col-4" name="additionalServices" value={additionalServices} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Centre Timing:</label>
                    <input type="text" className="form-control col-4" name="centerTiming" value={centerTiming} onChange={handleChange} />
               </div>

               <div className="form-group row">
                    <label className="col-3">Signing Agreement:</label>
                    <input type="text" className="form-control col-4" name="signingTiming" value={signingTiming} onChange={handleChange} />
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
                            <input type="file" className="form-control-file" name="workstudioSignature" value={workstudioSignature} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>
                                Company Stamp
                            </label>
                            <input type="file" className="form-control-file" name="workstudioStamp" value={workstudioStamp} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="col-6">
                       
                        <div><p><strong><u>For and on behalf of the client:  </u></strong></p></div>
                        <div className="form-group">
                            <label>
                                Signature
                            </label>
                            <input type="file" className="form-control-file" name="clientSignature" value={clientSignature} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>
                                Company Stamp
                            </label>
                            <input type="file" className="form-control-file" name="clientStamp" value={clientStamp} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>


    <div className="text-center">
      <button className="btn btn-success btn-lg">Submit</button>
    </div>
    </>
  );
      }
}

const imgStyle = {
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.2)), URL("https://www.equinoxlab.com/wp-content/uploads/contact-Us-1.jpg")',
  width: "100%",
  height: "auto",
  padding: "1rem 1rem 1rem 1rem",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  transition: "opacity 0.2s ease 0s",
};

const h1Style = {
  maxWidth: "550px",
  fontSize: "32px",
  lineHeight: "45px",
  margin: "5rem auto",
  textAlign: "center",
  color: "white",
};



const h3Style = {
    maxWidth: "auto",
    fontSize: "24px",
    lineHeight: "25px",
    margin: "5rem auto",
    textAlign: "center",
    color: "white",
  };
export default Agreement;