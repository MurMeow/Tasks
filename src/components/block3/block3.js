import React from 'react';
import './style.scss';
import {returnStrStates} from '../block3/helpers';


class Block3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  eventSearchNearestCity = () => {
    let amountSymbol =  null;
    let strStates = null;
    const  exemptionStrStates = (searchStrStates,searchAmountSymbol ) => {
      strStates = searchStrStates;
      amountSymbol = searchAmountSymbol;
    };
    returnStrStates(this.props.listCities,exemptionStrStates);
    return (
       <div>
          <p>States: {strStates}</p>
          <p>Symbol = {amountSymbol}</p>
       </div>
    )

  };



    render() {
    return (
        <div className="card3 card__container">
            <div className="card">
                <h2>Task 3</h2>
                <div>
                  {this.eventSearchNearestCity()}
                </div>
            </div>
      </div>
    );
  };

}


export default Block3
