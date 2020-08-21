import React from 'react'
import Header from '../home/Header';
import CompanyLogo from '../home/CompanyLogo';
import WhatWeDo from '../home/WhatWeDo';
import OurCenters from '../home/OurCenters';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header />
                <CompanyLogo />         
                <WhatWeDo />
                <OurCenters />
            </div>
         );
    }
}
 
export default Home;