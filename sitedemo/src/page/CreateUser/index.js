import React,{Component} from "react";
import {Steps, Divider, Breadcrumb, Pagination} from 'antd';
import './index.css';
import {CheckCircleOutlined} from '@ant-design/icons';

const { Step } = Steps;



const spanDiv =()=>{
	let spanApiData=[
		"[张文波][2020-04-30 10:00:00][申请开户][手机号:18320213021][p_u:EWREWR324234ASFDSDS232][p_c:WEWR-3243-2SDF-DSFD-DSFD-DSFD]",
		"[张之洞][2020-04-30 10:00:00][绑定储蓄卡][手机号:16320213021][p_u:EWREWR324234ASFDSDS232][p_c:WEWR-3243-2SDF-DSFD-DSFD-DSFD]",
		"[张文波][2020-04-30 10:00:00][申请开户][手机号:18320213021][p_u:EWREWR324234ASFDSDS232][p_c:WEWR-3243-2SDF-DSFD-DSFD-DSFD]",
		"[张文波][2020-04-30 10:00:00][申请开户][手机号:18320213021][p_u:EWREWR324234ASFDSDS232][p_c:WEWR-3243-2SDF-DSFD-DSFD-DSFD]",
		"[张文波][2020-04-30 10:00:00][失败][申请开户][手机号:18320213021][p_u:][p_c:]",
	];
	return (
		<div style={{fontSize:"16px",lineHeight:"22px"}}>
			<div>{spanApiData[0]}</div><hr/>
			<div>{spanApiData[1]}</div><hr/>
			<div>{spanApiData[1]}</div><hr/>
			<div>{spanApiData[1]}</div><hr/>
			<div>{spanApiData[2]}</div><hr/>
			<div>{spanApiData[3]}</div><hr/>
			<div>{spanApiData[4]}</div><hr/>
		</div>
	)};




class CreateSxd extends Component{
	constructor() {
		super();
		this.state={
			current1: 0,
			initial1: 0,
			current2: 0,
			initial2: 6,
			current3: 0,
			initial3: 12,
			current:1,

		}
	}
	onChange = (current) => {
		console.log('onChange:', current);
		if(current<=5){
			this.setState({
				current1:current,
				current2:0,
				current3:0,
			});
		}else {
			if(current<=11){
				this.setState({
					current1:5,
					current2:current,
					current3:0,
				});
			}else {
				this.setState({
					current1:5,
					current2:11,
					current3:current,
				});
			}
		}

	};
	onChangePage = page => {
		console.log(page);
		this.setState({
			current: page,
		});
	};
	render() {
		const { current1,current2,current3,initial1,initial2,initial3,current } = this.state;
		return(
			<div>
				<div style={{paddingBottom:"10px"}}>
					<Breadcrumb separator=">>">
						<Breadcrumb.Item style={{fontSize:"20px"}}>造号平台</Breadcrumb.Item>
						<Breadcrumb.Item style={{fontSize:"18px"}}>随心借</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div style={{"border":"solid 1px #98FB98"}}>
					<div style={{"padding":"10px 10px"}}>
						<Steps current={current1} onChange={this.onChange} initial={initial1} className="site-navigation-steps"  type="navigation" >
							<Step title="填写手机号" description="" />
							<Step title="输入验证码" description="" />
							<Step title="设置登录密码" description="" />
							<Step title="开始申请" description="" />
							<Step title="人脸识别" description="" />
							<Step title="身份认证" description="" icon={current1===5?<CheckCircleOutlined style={{"fontSize":"33px"}}/>:''}/>
						</Steps>
						<Steps current={current2} onChange={this.onChange} initial={initial2} className="site-navigation-steps" type="navigation" >
							<Step title="设置交易密码" description="" />
							<Step title="确认交易密码" description="" />
							<Step title="绑定储蓄卡" description="" />
							<Step title="绑定信用卡" description="" />
							<Step title="填写个人信息" description=""/>
							<Step title="申请开户" description="" icon={current2===11?<CheckCircleOutlined style={{"fontSize":"33px"}}/>:''}/>
						</Steps>
						<Steps current={current3} onChange={this.onChange} initial={initial3} className="site-navigation-steps" type="navigation" >
							<Step title="风控审核" description="" />
							<Step title="预借款" description="" />
							<Step title="发起借款" description="" />
							<Step title="到账" description="" />
							<Step title="发起还款流程" description=""/>
							<Step title="还款成功" description="" />
						</Steps>
					</div>
				</div>
				<div style={{paddingTop:"20px",fontSize:"20px",lineHeight:"25px"}}>
					<div style={{backgroundColor:"#F5DEB3"}}>
						<span>造号记录：</span>
					</div>
					<hr/>
					{spanDiv()}
				</div>
				<div>
					<Pagination current={current} onChange={this.onChangePage} total={30}/>
				</div>
			</div>
		)
	}
}

export default CreateSxd;
