import React from 'react';
import { Link } from 'react-router-dom';
import '../common/Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faCoffee} from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            scrolled: false,
            mobileMenuClass: false
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", ()=>{
            const isTop = window.scrollY<200;
            if(isTop !== true){
                this.setState({
                    scrolled: true
                })            
            }
            else{
                this.setState({
                    scrolled: false
                })
            }
        })
    }

    setMobileResponsive=()=>{
        this.setState({
            mobileMenuClass: !this.state.mobileMenuClass
        })
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", ()=>{
            console.log('scrolled removed')
        })
    }
  

    render(){
        const { scrolled, mobileMenuClass } = this.state;
        return(
            <>
            <div className=" d-none d-sm-none d-md-block">
            <nav className= { scrolled?"navbar2":"navbar" } style={{zIndex: 99}}>
            <Link to='/'><img src="https://www.workstudiocoworking.com/resources/static/img/logo-light.png" /></Link>
            <Link to='/' className="menu">Home</Link>
            <Link to='/about' className="menu">About</Link>
            <Link to='/our-center' className="menu">Our centers</Link>
            <Link to='/add-your-space' className="menu">Add your space</Link>
          
            <Link to='/contact-us' className="menu">Contact Us</Link>
            <Link to='/blogs' className="menu">Blogs</Link>
            </nav>
            </div>
            <div>
            <div className=" d-block d-sm-block d-md-none">
            <nav className= { scrolled?"navbar2":"navbar" } style={{zIndex: 3}}>

            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <FontAwesomeIcon icon =  {faBars} style={{color:"red"}} onClick={this.setMobileResponsive} />
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button"><Link to='/' className=" dropdown-item">Home</Link></button>

    <button class="dropdown-item" type="button"><Link to='/about' className=" dropdown-item">About</Link></button>

    <button class="dropdown-item" type="button"><Link to='/our-center' className=" dropdown-item">Our centers</Link></button>

    <button class="dropdown-item" type="button"><Link to='/add-your-space' className=" dropdown-item">Add your space</Link></button>

    <button class="dropdown-item" type="button"><Link to='/contact-us' className=" dropdown-item">Contact Us</Link></button>

    <button class="dropdown-item" type="button"><Link to='/blogs' className=" dropdown-item">Blogs</Link></button>

  </div>
</div>


            <Link to='/'><img src="https://www.workstudiocoworking.com/resources/static/img/logo-light.png" /></Link>
            
            </nav>
            </div>
            </div>
            </>
        )
    }

}

export default Navbar;


// 