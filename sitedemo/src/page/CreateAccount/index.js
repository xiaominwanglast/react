import React, {Component} from "react";
import {Table, Select, notification,Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';



const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}



const expandedRowRender = (record) => {
    console.log(record);
    const columns = [
        {title: '因子名', dataIndex: 'name', key: 'name'},
        {title: '用例名', dataIndex: 'caseName', key: 'caseName'},
        {title: '用例描述', dataIndex: 'caseDesc', key: 'caseDesc'},
        {title: '用例状态', dataIndex: 'caseStatus', key: 'caseStatus'},
    ];
    const rowdata = [
        {
            key: 0,
            name: "td30ApplyGuardCnt",
            caseName: "test0_thid_td30ApplyGuardCnt",
            caseDesc: "同盾1个月内无申请记录-返回值：-9999999",
            caseStatus: "正常"
        },
        {
            key: 1,
            name: "td30ApplyGuardCnt",
            caseName: "test1_thid_td30ApplyGuardCnt",
            caseDesc: "同盾1个月有记录但无platform_detail类型数据-返回值：-9999996",
            caseStatus: "正常"
        },
        {
            key: 2,
            name: "td30ApplyGuardCnt",
            caseName: "test3_thid_td30ApplyGuardCnt",
            caseDesc: "同盾1个月有记录且有platform_detail类型，返回字段platform_count",
            caseStatus: "正常"
        }
    ];


    // for (let i = 0; i < 3; ++i) {
    //     data.push({
    //         key: i,
    //         date: '2014-12-24 23:12:00',
    //         name: 'This is production name',
    //
    //         upgradeNum: 'Upgraded: 56',
    //     });
    // }
    return <Table columns={columns} dataSource={rowdata} pagination={false}/>;
};


function caseOnlyTest() {
    notification.info({
        message: "开始执行测试用例",
        description: "",
        duration: 1,
    });
}

const columns = [
    {title: '因子名', dataIndex: 'name', key: 'name'},
    {title: '因子类型', dataIndex: 'nameType', key: 'nameType'},
    {title: '因子描述', dataIndex: 'nameDesc', key: 'nameDesc'},
    {title: '用例数', dataIndex: 'caseCount', key: 'caseCount'},
    {title: '创建时间', dataIndex: 'createTime', key: 'createTime'},
    {title: '更新时间', dataIndex: 'updateTime', key: 'updateTime'},
    {title: '执行', key: 'operation', render: () => <a onClick={caseOnlyTest.bind(this)}>点击测试</a>},
];

const data = [
    {
        key: 0,
        name: 'td30ApplyGuardCnt',
        nameType: '同盾',
        nameDesc: '同盾1个月内申请人在多个平台申请借款',
        caseCount: '3',
        createTime: "2020-03-20",
        updateTime: "2020-03-23",
    },
    {
        key: 1,
        name: 'idcardHitFrozenIdcard',
        nameType: '名单库',
        nameDesc: '申请人身份证号命中冻结客户身份证号',
        caseCount: '5',
        createTime: "2020-03-10",
        updateTime: "2020-03-13",
    },
    {
        key: 2,
        name: 'smsOverduecourtOrgCnt',
        nameType: '设备',
        nameDesc: '短信内容出现的"法院|起诉"且"还款|逾期"的不同机构数',
        caseCount: '2',
        createTime: "2020-04-01",
        updateTime: "2020-04-23",
    }
];
// for (let i = 0; i < 3; ++i) {
//     data.push({
//         key: i,
//         name: 'td30ApplyGuardCnt',
//         nameType:'同盾',
//         nameDesc: '同盾1个月内申请人在多个平台申请借款',
//         caseCount: '3',
//         createTime: "2020-03-20",
//         updateTime: "2020-03-23",
//     });
// }

export default class CreateAccount extends Component {
    constructor() {
        super();
        this.state = {
            selectedRowKeys: [],
            loading: false,
        };
    }
    runFactor(event){
        notification.success({
            message: "开始执行测试用例",
            description: "",
            duration: 2,
        });
        setTimeout(() => {
            console.log("other")
            this.props.history.push('/page/rundetails?id=2')
        }, 2000);
    }

    start = () => {
        this.setState({loading: true});
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };
    onSelectChange = selectedRowKeys => {
        console.log(selectedRowKeys);
        this.setState({selectedRowKeys});
    };

    render() {
        const {loading, selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <span style={{fontSize:"16px"}}>选择因子类型：</span>
                <Select
                    showSearch
                    style={{ width: 150 }}
                    placeholder="选择因子类型"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="同盾">同盾</Option>
                    <Option value="设备">设备</Option>
                    <Option value="名单库">名单库</Option>
                </Select>
                <Button type="primary" style={{left:"800px"}} onClick={this.runFactor.bind(this)}>运行</Button>
                <hr/>
                <Table
                    rowSelection={rowSelection}
                    className="components-table-demo-nested"
                    columns={columns}
                    expandable={{expandedRowRender}}
                    dataSource={data}
                />
            </div>

        )
    }
}
