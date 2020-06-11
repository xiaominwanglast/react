import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {AppstoreOutlined, CodepenOutlined, SettingOutlined,CloudDownloadOutlined,LineChartOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

export default class CustomMenu extends Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4' ,'sub5'];

    constructor() {
        super();
        this.state = {
            openKeys: ['sub1'],
        };
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
            >
                <SubMenu key="sub1" icon={<CodepenOutlined/>} title="因子测试平台">
                    <Menu.Item key="1">
                        <Link to="/page/createaccount">因子用例管理</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/page/rundetails'>因子执行详情</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/page/testresult'>因子测试结果</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="造号平台">
                    <Menu.Item key="4">
                        <Link to='/page/createuser'>随心借</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to='/page/createsxd'>随心贷</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<SettingOutlined/>} title="测试工具">
                    <Menu.Item key="6">
                        <Link to='/page/toolsidt'>
                            身份证照片
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to='/page/toolsbank'>
                            银行卡照片
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<CloudDownloadOutlined />} title="打包平台">
                    <Menu.Item key="8">
                        <Link to='/page/androidplantform'>
                            Android版本
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <Link to='/page/iosplantform'>
                            Ios版本
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<LineChartOutlined />} title="监控平台">
                    <Menu.Item key="10">
                        <Link to='/page/grafana'>
                            grafana
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="11">
                        <Link to='/page/box'>
                            机器人
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}
