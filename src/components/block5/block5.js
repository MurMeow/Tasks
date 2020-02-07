import React from 'react';
import './style.scss';
import {addCities} from '../block5/helpers';

class Block5 extends React.Component {

  // regExp = /^[0-9]*[.,]?[0-9]+$\/;

  constructor(props) {
    super(props);
    this.state = {
      city: "",
      state: "",
      longitude: "",
      latitude: "",
      newCity: [],
      strNewCities: [],
      conclusion: false
    };
  };

  handleInputChangeStateCity = ({target: {value}} ) => {
    this.setState({
      city: value
    });
  };
  handleInputChangeStateState = ({target: {value}} ) => {
    this.setState({
      state: value
    });
  };
  handleInputChangeStateLongitude = ({target: {value}} ) => {
    this.setState({
      longitude: value
    });
  };
  handleInputChangeStateLatitude = ({target: {value}} ) => {
    this.setState({
      latitude: value
    });
  };



  eventAddCities = () => {
     this.state.newCity.map((item, index) => {
          this.props.addUserCities(this.state.newCity[index], this.state.strNewCities[index])
      });
    this.setState({newCity: []});
    this.setState({strNewCities: []});

  };

    eventProcessData = () => {
      const returnObjNewCity = (result, strDataNewCity, conclusion) => {
        if(conclusion){
          this.setState({newCity: [...this.state.newCity, result]});
          this.setState({strNewCities: [...this.state.strNewCities, strDataNewCity]});
        }else{alert("Такие данные уже есть!!!")}
      };
      if(!isNaN(this.state.longitude) && !isNaN(this.state.latitude)){
        addCities([this.state.city, this.state.state, this.state.longitude, this.state.latitude], returnObjNewCity, this.state.strNewCities);
        // this.setState({conclusion: true});
        this.setState ({
          city: "",
          state: "",
          longitude: "",
          latitude: "",
          conclusion: false
        });
      }else{
        this.setState({conclusion: true})
        console.log("false!!!!!!!!")
      }
      console.log(this.state)
    };


    render() {
      return (
          <div className="card5 card__container">
            <div className="card">
              <h2>Task 5</h2>
              <form>
                <input type="text"
                       onChange={this.handleInputChangeStateCity}
                       placeholder="city"
                       value={this.state.city}
                       name="city"
                />
                <input type="text"
                       onChange={this.handleInputChangeStateState}
                       placeholder="state"
                       value={this.state.state}
                       name="state"
                />
                <input type="text"
                       onChange={this.handleInputChangeStateLongitude}
                       placeholder="longitude"
                       value={this.state.longitude}
                       name="longitude"
                />
                <input type="text"
                       onChange={this.handleInputChangeStateLatitude}
                       placeholder="latitude"
                       value={this.state.latitude}
                       name="latitude"
                />
                <input type="button"
                       value="Add cities"
                       onClick={this.eventProcessData}
                />
              </form>
              <p className="block5__title">Cities have been added:</p>
              <div className="block5__result">
              {this.state.conclusion?"Incorrect data entered":
                this.state.newCity.map((item, index) => {
                  let keyObj = Object.keys(item);
                  return (<p key={index} className="pResult">"{keyObj[0]} {this.state.newCity[index][keyObj[0]].state}", {this.state.newCity[index][keyObj[0]].longitude}, {this.state.newCity[index][keyObj[0]].latitude}</p>)
              })
              }
              </div>
              <button onClick={this.eventAddCities} className="block5__buttonSave">save</button>
            </div>
        </div>
      );
  };

}


export default Block5
