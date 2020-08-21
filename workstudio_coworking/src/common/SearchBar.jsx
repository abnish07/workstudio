import React, { Component } from "react";
import style from "./SearchBar.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { connect } from "react-redux";
// import { fetchCatalogRequest } from "../../redux/action";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "react-google-places-autocomplete/dist/index.min.css";

// import { Redirect } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      guests: null,
    };
  }

  handleOnClick = (e) => {
    ////console.log(this.props, "clicked");
    const { arrivalDate, departureDate } = this.state;
    const { fetchCatalogRequest } = this.props;
    let url = "/search";
    let arrival =
      arrivalDate &&
      `${arrivalDate.getFullYear()}-${
        arrivalDate.getMonth() + 1
      }-${arrivalDate.getDate()}`;
    let departure =
      departureDate &&
      `${departureDate.getFullYear()}-${
        departureDate.getMonth() + 1
      }-${departureDate.getDate()}`;
    let query = "";
    if (this.state.city) {
      url += `/${this.state.city}`;
      query += !arrivalDate ? "" : `&arrivalDate=${arrival}`;
      query += !departureDate ? "" : `&departureDate=${departure}`;
      query += !this.state.guests ? "" : `&sleeps=${this.state.guests}`;
      query = query.length > 0 ? query.slice(1) : "";
      url += query.length > 0 ? `?${query}` : "";
      this.props.history.push(url);
    } else {
      query += !arrivalDate ? "" : `&arrivalDate=${arrival}`;
      query += !departureDate ? "" : `&departureDate=${departure}`;
      query += !this.state.guests ? "" : `&sleeps=${this.state.guests}`;
      query = query.length > 0 ? query.slice(1) : "";
      url += query.length > 0 ? `?${query}` : "";
      this.props.history.push(url);
    }
    fetchCatalogRequest(url);
  };

  setCity = (e) => {
    console.log(e["description"]);
    let cityName = e["description"].split(",")[0];
    this.setState({ city: cityName });
  };

  render() {
    return (
      <div style={searchBarStyle}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-row row" style={{height:'42px'}}>
          <div className="form-group col-5" style={child4}>
              <select
                className="form-control border-0"
                id="guests"
                onChange={(e) => {
                  this.setState({
                    guests: e.target.value,
                  });
                }}
              >
                <option selected>Select type</option>
                <option value="office_space">office space</option>
                <option value="coworking">coworking space</option>
                <option value="virtual_space">virtual space</option>
                <option value="meeting">meeting space</option>
             
              </select>
            </div>
            <div className="form-group col-5" style={{height:'42px'}}>
              <div style={child1}>
                <GooglePlacesAutocomplete
                  onSelect={(e) => this.setCity(e)}
                  inputStyle={inputStyle}
                  placeholder="Search for your location?"
                  debounce={500}
                />
              </div>
              <datalist id="topdestinations">
                <option value="patna" />
                <option value="indore" />
                <option value="ranchi" />
                <option value="gurugram" />
              </datalist>
            </div>

            

            <button
              style={submitButton}
              onClick={(e) => this.handleOnClick(e)}
              type="submit"
              className="btn btn-danger col-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const searchBarStyle = {
  //zIndex: "1",
  position: "relative",
  fontSize: "12px",
  backgroundColor: "white",
  height: "42px",
  borderRadius: "5px",
  maxWidth: "auto",
  // margin: "4rem auto 6rem auto",
};

const searchImgStyle = {
  //position: "relative",
  right: "25px",
};

const inputStyle = {
  padding: "12px",
  width: "100%",
  boxShadow: "none",
};

const child1 = {
 // zIndex: "2",
  height: "100%",
};

const child2 = {
 // zIndex: "2",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "stretch",
  alignContent: "center",
};

const child3 = {
 // zIndex: "2",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "stretch",
  alignContent: "center",
};

const child4 = {
  height: "100%",
  boxShadow: "none",
};

const submitButton = {
  maxHeight: "42px",
  backgroundColor: "#ED4031"
};

// const mapDispatchToProps = (dispatch) => ({
//   fetchCatalogRequest: (query) => dispatch(fetchCatalogRequest(query)),
// });

// export default connect(null, mapDispatchToProps)(SearchBar);

export default SearchBar;