import React,{Component} from "react";
import { Table,Tooltip,Button } from 'antd';

const columns = [
    { title: '编号', width: 160, dataIndex: 'id', key: 'id',render:(text) =>{return <Tooltip placement="topLeft" title="点击跳转到详情页"><a target='_blank' href='/'>{text}</a></Tooltip>}},
    { title: '运行时长(s)', dataIndex: 'runTime', key: 'runTime' },
    { title: '因子总数', dataIndex: 'factorCount', key: 'factorCount' },
    { title: '用例总数', dataIndex: 'caseCount', key: 'caseCount3' },
    { title: '成功数', dataIndex: 'successCount', key: 'successCount' },
    { title: '失败数', dataIndex: 'failCount', key: 'failCount' },
    { title: '成功率', dataIndex: 'successRate', key: 'successRate' },
    { title: '构建人', dataIndex: 'createPerson', key: 'createPerson' },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' ,width:200},
    {
        title: '操作',
        key: 'operation',
        align:'center',
        fixed: 'right',
        width: 100,
        render: () => <div><Button>删除</Button></div>,
    },
];

const data = [
    {
        key: '1',
        id: '1589013876925',
        runTime: 20,
        factorCount: '10',
        caseCount: '20',
        successCount:25,
        failCount:5,
        successRate:'80%',
        createPerson:"testPerson",
        createTime:"2020-04-20 12:00:00"
    },
    {
        key: '2',
        id: '1589013876825',
        runTime: 21,
        factorCount: '10',
        caseCount: '20',
        successCount:15,
        failCount:5,
        successRate:'80%',
        createPerson:"testPerson",
        createTime:"2020-04-20 12:00:00"
    },
    {
        key: '3',
        id: '1589013876826',
        runTime: 30,
        factorCount: '10',
        caseCount: '20',
        successCount:15,
        failCount:5,
        successRate:'70%',
        createPerson:"testPerson1",
        createTime:"2020-05-20 12:00:00"
    },
    {
        key: '4',
        id: '1589013876845',
        runTime: 45,
        factorCount: '10',
        caseCount: '80',
        successCount:15,
        failCount:5,
        successRate:'90%',
        createPerson:"testPerson",
        createTime:"2020-04-20 12:00:00"
    },
];

export default class RunDetails extends Component{
    render() {
        return(
            <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
        )
    }
}
