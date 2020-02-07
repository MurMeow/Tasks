import React from 'react';
import './style.scss';
import {Button} from "reactstrap";
import {searchCitiesMost} from "../block1/helpers";




class Block1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  };

  eventSearchCitiesMost = (e) => {
    let searchParameters = null;
    let coordinates = null;
    if( e.target.id==="northernmost" || e.target.id==="southernmost"){
      coordinates = "longitude"
    }
    if(e.target.id==="easternmost" || e.target.id==="westernmost"){
      coordinates = "latitude"
    }
    const  exemptionSearchParameters = (result) => {
      searchParameters = result;
      this.setState({result: result})
    };
    searchCitiesMost(this.props.listCities, coordinates, e.target.id, exemptionSearchParameters);

    return console.log(searchParameters)
  };


    render() {
    return (
        <div className="card1 card__container">
          <div className="card">
            <h2>Task 1</h2>
            <div className="card1__container">
              <Button color="secondary" onClick={this.eventSearchCitiesMost} id = "northernmost" className="northernmost">northernmost</Button>{' '}
              <Button color="secondary" onClick={this.eventSearchCitiesMost} id = "easternmost" className="easternmost">easternmost</Button>{' '}
              <Button color="secondary" onClick={this.eventSearchCitiesMost} id = "southernmost" className="southernmost">southernmost</Button>{' '}
              <Button color="secondary" onClick={this.eventSearchCitiesMost} id = "westernmost" className="westernmost">westernmost</Button>{' '}
            </div>
            <p className="result">{this.state.result}</p>
          </div>
        </div>
    );
  };

}


export default Block1
