import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component{
    constructor(props){
        super(props)
        this.state={
            center:{
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        }
    }


    render(){

        return(
            <>
            Google map
                <GoogleMapReact 
                bootstrapURLKeys={{ key: "AIzaSyBaIybIhWhwuAwAC1TTa6FG6etfbryY5NI" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
              </GoogleMapReact>
                
            </>
        )
    }
}

export default Map;