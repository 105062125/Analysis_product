import { Table, Tag, Input} from 'antd';
import React from 'react';

const { Search } = Input;
const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '開盤價',
    dataIndex: 'open',
    key: 'open',
  },
  {
    title: '最高價',
    dataIndex: 'high',
    key: 'high',
  },
  {
    title: '最低價',
    key: 'low',
    dataIndex: 'low',
  },
  {
    title: '收盤價',
    key: 'close',
    dataIndex: 'close',
  },
  {
    title: '漲跌價差',
    key: 'spread',
    dataIndex: 'spread',
    render: spread => (
      <>
        {spread.map(spread => {
          let color = spread[0]==='-' ? 'red' : 'green';

          return (
            <Tag color={color} >
              {spread}
            </Tag>
          );
        })}
      </>
    ),
  }
];

// {
//   title: 'Actions',
//   key: 'actions',
//   dataIndex: 'actions',
  // render: actions => (
  //     <>
  //       {actions.map(actions => {
  //         let color = actions==='sell' ? 'red' : 'green';

  //         return (
  //           <Tag color={color} key={actions}>
  //             {actions.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
// },

class func3 extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          data: null,
          loading: 0
          
        };
        this.fetch_stock = this.fetch_stock.bind(this);
      }
    
    fetch_stock(stock_number){
      const payload = {"stock_number":stock_number}
      this.setState({
        loading: 1
      })

      fetch('/fetch_stock',{
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
            loading: 0,
            data: data.data
            
          });
          // console.log(data)
        });
    }
    // componentDidMount() {
        
    // }

    render() {
      return (
        <div>
          <h3>Stock Fetch</h3>
          <Search style={{ padding:"10px 10px 10px 0px", width: 200 }} placeholder="代號" enterButton="Search" onSearch={value => this.fetch_stock(value)} loading={this.state.loading} />
          {/* <Button type="primary" onClick={this.fetch_stock}>Run!</Button> */}
        <Table columns={columns} dataSource={this.state.data} size="small" />
        </div>
        
        
      ) 
    }
}


export default func3;