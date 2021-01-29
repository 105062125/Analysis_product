import React from 'react';

import {Input, Typography } from 'antd';
import {
  ReferenceLine, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, Label
} from 'recharts';
const { Search } = Input;

const { Title,Text } = Typography;


class func2 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: null,
        kd_ratio: null,
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
            kd_ratio: data.kd_ratio,
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
        height={400}
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
        <Legend verticalAlign="top"/>
        {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
        <Line type="monotone" dataKey="close" stroke="#82ca9d" dot={false} />
        <Line type="monotone" dataKey="5MA" stroke="#FF2D2D" dot={false} />
        <Line type="monotone" dataKey="10MA" stroke="#0072E3" dot={false} />
      </LineChart>

      <LineChart
        width={1000}
        height={200}
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
        <Legend verticalAlign="top"/>
        <Line type="monotone" dataKey="k" stroke="#46A3FF" dot={false} />
        <Line type="monotone" dataKey="d" stroke="#FF2D2D" dot={false} />
        <Brush dataKey="date"/> 
      </LineChart>

      
      <Title level={4} style={{padding:"10px 30px 0px 20px"}}>KD Strategy: 買進(K超過D), 賣出(D超過K)</Title>
      <Text style={{padding:"10px 30px 0px 20px"}}type="success">年報酬率:{this.state.kd_ratio}%</Text>
      <LineChart
        width={1000}
        height={200}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        syncId="anyId"
      >
        <Label value="hii" position="top"/>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={['dataMin', 'dataMax']}/>
        <Tooltip />
        <Legend verticalAlign="top"/>
        <ReferenceLine y={1000} label="Base" stroke="red" />
        <Line type="monotone" dataKey="asset" stroke="#00B271" dot={false} />
      </LineChart>

      
        </div>
        
      )
    }
}


export default func2;