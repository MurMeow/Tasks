import React from 'react';
import './style.scss';
import {searchNearestCity} from '../block2/helpers';


class Block2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude : "",
      latitude : "",
      result: ""
    };
  };


  handleInputChangeLongitude = ({target: {value}}) => {
    this.setState({
      longitude: value
    })
  };

  handleInputChangeLatitude = ({target: {value}}) => {
    this.setState({
      latitude: value
    })
  };

  eventSearchNearestCity = () => {
    let searchParameters =  null;
    const  exemptionSearchCity = (result) => {
      searchParameters = result;
      this.setState({result: result})
    };
    searchNearestCity(this.props.listCities, +this.state.longitude, +this.state.latitude, exemptionSearchCity)
    console.log(searchParameters);

  };



    render() {
    return (
        <div className="card2 card__container">
          <div className="card">
            <h2>Task 2</h2>
            <form>
              <input type="text"
                     id="longitude"
                     onChange={this.handleInputChangeLongitude}
                     placeholder="longitude"
                     value={this.state.longitude}
              />
              <input type="text"
                     id="latitude"
                     onChange={this.handleInputChangeLatitude}
                     placeholder="latitude"
                     value={this.state.latitude}
              />
              <input type="button" color="secondary" value="Найти" onClick={this.eventSearchNearestCity}/>
            </form>
            <p className="result">{this.state.result===undefined?"Incorrect data entered":this.state.result}</p>
          </div>
        </div>
    );
  };

}


export default Block2
