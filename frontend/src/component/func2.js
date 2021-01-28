import React from 'react';
import {Button} from 'antd';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class func2 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: null,
        
      };
      this.fetch_stock_close = this.fetch_stock_close.bind(this);
    }

    fetch_stock_close() {
      fetch('/fetch_stock_close')
        .then(response => response.text())
        .then(data => {
          data = JSON.parse(data);
          this.setState({
            data: data.data
          });
          // console.log(data)
        });
    }
    render() {
      return (
        <div>
          <Button type="primary" onClick={this.fetch_stock_close}>Run!</Button>
        <LineChart
        width={1000}
        height={500}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
        <Line type="monotone" dataKey="close" stroke="#82ca9d" dot={false} />
        <Line type="monotone" dataKey="5MA" stroke="#FF2D2D" dot={false} />
        <Line type="monotone" dataKey="10MA" stroke="#0072E3" dot={false} />
        <Line type="monotone" dataKey="k" stroke="#46A3FF" dot={false} />
        <Line type="monotone" dataKey="d" stroke="#FF2D2D" dot={false} />
      </LineChart>
        </div>
        
      )
    }
}


export default func2;