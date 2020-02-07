import React from 'react';
import './style.scss';
import {searchByStates} from '../block4/helpers';

class Block4 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      requestedState: "",
      detectedCities: []
    };
  };

  handleInputChangeState = ({target: {value}}) => {
    this.setState({
      requestedState: value
    });
      this.setState({isOpen: false});
  };


  eventSearchState = () => {
    this.setState({isOpen: true});
    let searchParameters =  null;
    const  foundCity = (result) => {
      searchParameters = result;
    };
    searchByStates(this.props.listCities, this.state.requestedState, foundCity)
    this.setState({detectedCities: searchParameters})
  };

  searchKeyPress = (e) => {
   if(e.nativeEvent.keyCode===13){
     this.eventSearchState()
     e.preventDefault();
   }
  };


    render() {
      return (
          <div className="card4 card__container">
            <div className="card">
              <h2>Task 4</h2>
              <form>
                <input type="text"
                       onChange={this.handleInputChangeState}
                       placeholder="enter state name"
                       value={this.state.longitude}
                       onKeyDown={this.searchKeyPress}
                />
                <input type="button"
                       value="Найти"
                       onClick={this.eventSearchState}
                />
              </form>
              <p >Cities in the state {this.state.requestedState}:</p>
              {this.state.isOpen?
                this.state.detectedCities.map((item, index) => {
                  return (
                      <p className="result" key={index}>{item}</p>
                  )
                })
                :<p className="result"></p>}
            </div>
        </div>
      );
  };

}


export default Block4
