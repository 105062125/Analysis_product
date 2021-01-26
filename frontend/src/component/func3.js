import { Table, Tag} from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Actions',
    key: 'actions',
    dataIndex: 'actions',
    render: actions => (
        <>
          {actions.map(actions => {
            let color = actions==='sell' ? 'red' : 'green';

            return (
              <Tag color={color} key={actions}>
                {actions.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    actions: ['buy'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    actions: ['sell'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    actions: ['sell'],
  },
];

class func3 extends React.Component {
    render() {
      return (
        <Table columns={columns} dataSource={data} />
      ) 
    }
}


export default func3;