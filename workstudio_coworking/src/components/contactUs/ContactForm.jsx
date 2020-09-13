import React from 'react';
import { connect } from 'react-redux';
import { submitYourRequirement } from '../../redux/action';

class ContactForm extends React.Component{
      constructor(props){
        super(props)
        this.state={
          name: '',
          email: '',
          city: '',
          mobileNo: ''
        }
      }

      handleChange=(e)=>{
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      render(){
        const { name, email, city, mobileNo } = this.state;
        const { handleChange } = this
        const { submitYourRequirement, submittedResponse, successData } = this.props;
        console.log("submitted res", successData)
    return(
        <>
  <div class="form-row">
    <div class="form-group col-12">
    <div class="px-3 my-3">
      <label for="name">Name</label>
      <input type="text" class="form-control" value={name} placeholder="enter your name" name="name" onChange={handleChange} />
      </div>

    <div class="px-3 my-3">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" value={email} placeholder="enter you email" name="email" onChange={handleChange} />
    </div>

    <div class="px-3 my-3">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" value={city} placeholder="enter your city to open" name="city" onChange={handleChange} />
    </div>
    <div class="px-3 my-3">
      <label for="seats">Mobile Number</label>
      <input type="text" class="form-control" maxLength="10" value={mobileNo} placeholder="enter you valid mobile no" name="mobileNo" onChange={handleChange} />
    </div>
    </div>
  </div>
        <div className="text-center mt-4">
  <button type="submit" class="btn btn-primary" onClick={()=>submitYourRequirement(this.state)} >Submit Your Requirements</button></div>

        </>
    )
      }
}

const mapStateToProps = (state)=>({
  successData: state.submittedResponse
})

const mapDispatchToProps = (dispatch)=>({
  submitYourRequirement: (query)=>(dispatch(submitYourRequirement(query)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);