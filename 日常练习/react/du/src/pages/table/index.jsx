import React from 'react'
import { Table } from 'antd'

export default function ZTable() {
    const columns = [
        {
            title: '订单编号',
            dataIndex: 'order',
            key: 'order',
        },
        {
            title: '产品名',
            dataIndex: 'prodName',
            key: 'prodName',
        },
        {
            title: '店铺',
            dataIndex: 'shopName',
            key: 'shopName',
        },
        {
            title: '下单时间',
            dataIndex: 'orderTime',
            key: 'orderTime',
        }
    ]
    const data = [
        {
            order:'1202012180003768647',
            prodName:'篮球专业比赛鞋韦德系列ABAR051-1045',
            shopName:'本溪大商新玛特店中店',
            orderTime:'2020/12/18 0:43',
        }
    ];
    return (
        <Table columns={columns} dataSource={ data}/>
    )

}
