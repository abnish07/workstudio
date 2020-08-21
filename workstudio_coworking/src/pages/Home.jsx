import React from 'react'
import Header from '../home/Header';
import CompanyLogo from '../home/CompanyLogo';

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
            </div>
         );
    }
}
 
export default Home;