import React from "react";
import { Link } from "react-router-dom";
import OurCenterCard from './OurCenterCard';

function Collections() {
  return (
    <>
      <h3 className="text-center m-5">OUR Centers</h3>
      <div className="container" style={containerStyle}>
            <div className="row">
                <div className="col-6 mb-5">
            <OurCenterCard 
            centerImage="https://media-exp1.licdn.com/dms/image/C511BAQGd7d20l5ImXA/company-background_10000/0?e=2159024400&v=beta&t=msrhAJGZzvnV6CgTZqjvI6sZy8lBupSZp_nH1lsBlP0"
            centerTitle="Patna"
            centerDesc="Our City Collection features a wide range of carefully curated homes in world-class cities - exclusive to onefinestay. These private homes are personally vetted and managed by our local teams."
            /></div>
            
            <div className="col-6 mb-5">
            <OurCenterCard 
            centerImage="https://media-exp1.licdn.com/dms/image/C511BAQGd7d20l5ImXA/company-background_10000/0?e=2159024400&v=beta&t=msrhAJGZzvnV6CgTZqjvI6sZy8lBupSZp_nH1lsBlP0"
            centerTitle="Ranchi"
            centerDesc="Our City Collection features a wide range of carefully curated homes in world-class cities - exclusive to onefinestay. These private homes are personally vetted and managed by our local teams."
            /></div>

            <div className="col-6">
            <OurCenterCard 
            centerImage="https://media-exp1.licdn.com/dms/image/C511BAQGd7d20l5ImXA/company-background_10000/0?e=2159024400&v=beta&t=msrhAJGZzvnV6CgTZqjvI6sZy8lBupSZp_nH1lsBlP0"
            centerTitle="Indore"
            centerDesc="Our City Collection features a wide range of carefully curated homes in world-class cities - exclusive to onefinestay. These private homes are personally vetted and managed by our local teams."
            /></div>

            <div className="col-6">
            <OurCenterCard 
            centerImage="https://media-exp1.licdn.com/dms/image/C511BAQGd7d20l5ImXA/company-background_10000/0?e=2159024400&v=beta&t=msrhAJGZzvnV6CgTZqjvI6sZy8lBupSZp_nH1lsBlP0"
            centerTitle="gurugram"
            centerDesc="Our City Collection features a wide range of carefully curated homes in world-class cities - exclusive to onefinestay. These private homes are personally vetted and managed by our local teams."
            /></div>

            
        
      </div></div>
    </>
  );
}

const cardBodyStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "2.5rem",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
};

const cityCollection = {
  maxWidth: "450px",
};

const locationStyle = {
  margin: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  fontSize: "15px",
};

const findoutMoreButton = {
  backgroundColor: "white",
  border: "1 solid",
};

const imgStyle = {
  maxWidth: "450px",
  maxHeight: "240px",
};

export default Collections;