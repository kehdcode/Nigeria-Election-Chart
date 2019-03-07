import React, { Component } from 'react'
import { Bar, Pie} from 'react-chartjs-2';

 class Chart extends Component {
    constructor(props){
      super(props);
      this.state = {
        chartData: {
          labels: ['Lagos', 'Oyo', 'Ogun', 'Ondo', 'Sokoto'],
          datasets: [
            {
              label: 'City Population',
              data: [4252562, 62562, 652611, 51626, 26126126],
              backgroundColor: ['yellow', 'purple', 'green', 'pink', 'red']
            }
          ]
        }
      }
    }
  render() {
    return (
      <div className="chart">
        <h1> Population Chart</h1>

        <Pie
          data={this.state.chartData}

          options={{
            
          }}
/>
      </div>
    )
  }
}

export default Chart