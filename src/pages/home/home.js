import React from 'react';
import './style.scss';
import {initialCities} from '../../constants/ initialCities'
import {convertDataToObject} from  '../home/helpers';
import Block1 from "../../components/block1/block1";
import Block2 from "../../components/block2/block2";
import Block3 from "../../components/block3/block3";
import Block4 from "../../components/block4/block4";
import Block5 from "../../components/block5/block5";
import Chart from "../../components/chart/chart";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    handleCityAdd = () => {
        const addState = (listCities) =>{
            this.setState(listCities)
        };
        if(localStorage.getItem("userCity")===null){
            convertDataToObject(initialCities, addState);
        }
        else {
            let arrayStrUserCity = JSON.parse(localStorage.getItem("userCity"));
            convertDataToObject(initialCities, addState, arrayStrUserCity);
        }
    };


    addUserCities = (result, strNewCities) => {
        let lSstrNewCities = JSON.parse(localStorage.getItem("userCity"));
        lSstrNewCities = [...lSstrNewCities, strNewCities];
        localStorage.setItem("userCity", JSON.stringify(lSstrNewCities));

        let keyObj = Object.keys(result);

        this.setState({...this.state, [keyObj[0]] : result[keyObj[0]]})

    };


    componentDidMount() {
        this.handleCityAdd();
    }

    render() {
        console.log("-----!!!!render", this.state)
    return (
      <div className="homePage flex">
          <Block1 listCities = {this.state}/>
          <Block2 listCities = {this.state}/>
          <Block3 listCities = {this.state}/>
          <Block4 listCities = {this.state}/>
          <Block5 listCities = {this.state}
                  addUserCities = {this.addUserCities}/>
          <Chart listCities = {this.state}/>
      </div>
    );
  };
}


export default Home
