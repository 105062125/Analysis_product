import React from 'react';
import {Input} from 'antd';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush
} from 'recharts';
const { Search } = Input;


class func2 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: null,
        loading: 0
      };

      this.fetch_stock_close = this.fetch_stock_close.bind(this);
    }

    fetch_stock_close(stock_number) {
      const payload = {"stock_number":stock_number}
      this.setState({
        loading: 1
      })
      fetch('/fetch_stock_close',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
       })
        .then(response => response.text())
        .then(data => {
          data = JSON.parse(data);
          this.setState({
            data: data.data,
            loading: 0
          });
        });
    }
    render() {
      return (
        <div>
          <Search style={{ padding:"10px 10px 10px 0px", width: 200 }} placeholder="代號" enterButton="Search" onSearch={value => this.fetch_stock_close(value)} loading={this.state.loading} />
        <LineChart
        width={1000}
        height={250}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        syncId="anyId"
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
      </LineChart>

      <LineChart
        width={1000}
        height={250}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        syncId="anyId"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="k" stroke="#46A3FF" dot={false} />
        <Line type="monotone" dataKey="d" stroke="#FF2D2D" dot={false} />
        <Brush dataKey="date"/> 
      </LineChart>
        </div>
        
      )
    }
}


export default func2;