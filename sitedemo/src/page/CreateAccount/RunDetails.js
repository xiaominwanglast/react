import React,{Component} from "react";
import {Table, Button, notification,Steps} from 'antd';
import { SyncOutlined} from '@ant-design/icons';
const { Step } = Steps;

function clickQuit(){
    notification.success({
        message: "取消用例执行",
        description: "",
        duration: 2,
    });
}

function statusColor(text) {
    if(text.text==="成功"){
        return "#00FF00"
    }
    if(text.text==="失败"){
        return "#FF4500"
    }
    if(text.text==="取消"){
        return "#FFD700"
    }
    return ""
}
const statusRun= (text)=> {
    if(text.text==="执行"){
        return <SyncOutlined spin />
    }
    return text.text
}


const columns = [
    { title: '编号', width: 160, dataIndex: 'id', key: 'id'},
    { title: '执行因子总数', dataIndex: 'doFactorCount', key: 'doFactorCount',width:160},
    { title: '执行用例总数', dataIndex: 'doCaseCount', key: 'doCaseCount',width:160 },
    { title: '构建人', dataIndex: 'createPerson', key: 'createPerson',width:160 },
    { title: '状态', dataIndex: 'status', key: 'status' , align:'center',width:80, render:(text) =>{return <div style={{"backgroundColor":statusColor({text})}}>{statusRun({text})}</div>}},
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' ,width:200},
    { title: '操作', key: 'operation', align:'center', width: 100, render: () => <div><Button onClick={clickQuit}>取消</Button></div>},
];

const data = [
    {
        key: '1',
        id: '1589013876925',
        doFactorCount: '10',
        doCaseCount: '20',
        createPerson:"testPerson",
        status:"执行",
        createTime:"2020-04-20 12:00:00"
    },
    {
        key: '2',
        id: '1589013876825',
        doFactorCount: '10',
        doCaseCount: '34',
        createPerson:"testPerson",
        status:"成功",
        createTime:"2020-04-20 12:00:00"
    },
    {
        key: '3',
        id: '1589013876826',
        doFactorCount: '15',
        doCaseCount: '20',
        createPerson:"testPerson",
        status:"取消",
        createTime:"2020-04-20 12:00:00"
    },
    {
        key: '4',
        id: '1589013876845',
        doFactorCount: '10',
        doCaseCount: '25',
        createPerson:"testPerson",
        status:"失败",
        createTime:"2020-04-22 16:00:00"
    },
];



function stepsComp() {
    return  (
        <div>
            <span>编号：1589013876826</span>
            <Steps current={3} status="success">
                <Step title="环境检查" description="" />
                <Step title="策略准备" description="" />
                <Step title="脚本执行" description="" />
                <Step title="测试完成" description="" />
            </Steps>
        </div>
    )
}

export default class RunDetails extends Component{
    render() {
        return(
            <div>
                {stepsComp()}
                <hr/>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}


