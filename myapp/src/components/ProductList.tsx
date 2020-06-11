import {Button,Table,Popconfirm} from 'antd';
import React from 'react';
// @ts-ignore
const ProductList = ({ onDelete, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" placement="topLeft" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  return <Table dataSource={products} columns={columns} />;
};


export default ProductList;
