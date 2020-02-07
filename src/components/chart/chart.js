import React from 'react';
import './style.scss';
import {Doughnut} from 'react-chartjs-2';
import {groupData} from '../chart/helpers';

const data = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [
      '#F4F41A',
      '#FFAE12',
      '#FF7F1E',
      '#FF5C1D',
      '#FF2942',
      '#FF3C83',
      '#F067FF',
      '#965DFF'
    ],
    hoverBackgroundColor: [
      '#7F7F11',
      '#9C6A0B',
      '#A85419',
      '#AD3E14',
      '#A61C2B',
      '#B32C59',
      '#9E42A8',
      '#583A9D'
    ]
  }]
};


class Chart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  };


  getArrayData = (arrayDataState,arrayDataCount) =>{
    arrayDataState.forEach((item, index) => {
      data.labels.push(item);
      data.datasets[0].data.push(arrayDataCount[index]);
    })
  };


    render() {
      console.log(this.props.listCities);
      groupData(this.props.listCities, this.getArrayData)
      return (
        <div className="chart">
          <p>Chart</p>
          <Doughnut data={data} width={200} height={200}/>
        </div>
      );
  };

}


export default Chart
