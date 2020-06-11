import React from 'react'
import idt from '../../assets/img/idt_model.png';
import {Input, Button, notification, Pagination} from 'antd';

import {getName,getId_no} from '../../public/tools'


let homeMsg = {
    position:"relative",
    fontSize:"20px",
    color:"#000000"
};
let sexStyle={
    position: "absolute",
    top: "90px",
    left: "100px",
};
let homeResult={
    position: "absolute",
    top: "490px",
    left: "220px",
    lineHeight:"15px"
}
let homeOther ={
    position:"relative",
    top:"390px",
}

let homeBG = {
    position: "absolute",
    top: "0px",
    // bottom: "0px",
    height:"400px",
    backgroundImage: 'url(' + idt + ')',
    backgroundRepeat:"no-repeat",
    left: "200px",
    backgroundSize:"100% fixed",
    // backgroundSize: "100% auto",
    right: "0px",
    opacity:"1",
};

let nameStyle={
    position: "absolute",
    top: "45px",
    left: "100px",
}

let nationalStyle={
    position: "absolute",
    top: "91px",
    left: "240px",
};
let yearStyle={
    position: "absolute",
    top: "134px",
    left: "100px",
};
let monthStyle={
    position: "absolute",
    top: "134px",
    left: "194px",
};
let dayStyle={
    position: "absolute",
    top: "134px",
    left: "248px",
};
let idcardStyle={
    position: "absolute",
    top: "297px",
    left: "195px",
    letterSpacing:"1.5px",
    fontSize: "23px"
};
let cityStyle={
    position: "absolute",
    top: "184px",
    left: "100px",
    letterSpacing:"1.5px",
    fontSize:"18px"
};
let streeStyle={
    position: "absolute",
    top: "210px",
    left: "100px",
    letterSpacing:"1.5px",
    fontSize:"18px",
};
let unitStyle={
    position: "absolute",
    top: "256px",
    letterSpacing:"1.5px",
    left: "830px",
};
let expiradateStyle={
    position: "absolute",
    top: "303px",
    letterSpacing:"0.5px",
    left: "830px",
};

const spanDiv =()=>{
    let spanApiData=[
        "[创建者：张文波] [时间：2020-04-30 10:00:00] [姓名：周知的] [身份证:32132119923023213]",
        "[创建者：王之洞] [时间：2020-04-30 10:00:00] [姓名：肖天] [身份证:32132119923023213]",
    ];

    return (
        <div style={{fontSize:"16px",lineHeight:"22px"}}>
            <span>{spanApiData[0]}</span><hr/>
            <span>{spanApiData[1]}</span><hr/>
            <span>{spanApiData[0]}</span><hr/>
            <span>{spanApiData[1]}</span><hr/>
            <span>{spanApiData[1]}</span><hr/>
        </div>
    )};



class ToolsIdt extends React.Component {
    constructor() {
        super();
        this.state={
            InputIdtValue : "",
            InputNameValue : "",
            InputExpireValue:"",
            name:"",
            sex:"",
            national:"",
            year:"",
            month:"",
            day:"",
            idcard:"",
            city:"",
            street:"",
            unit:"",
            expiradate:"",
            current:1
        }
    }
    createAnyIdt(){
        this.setState({
            name:getName(),
            sex:["男","女"][Math.floor(Math.random() * ["男","女"].length)],
            national:"汉",
            year:"1991",
            month:"9",
            day:"1",
            idcard:getId_no(),
            city:"江苏省宿迁市宿豫区顺河镇",
            street:"浦东国际花园南33一单元202",
            unit:"宿迁市公安局宿豫分局",
            expiradate:"2010.04.05-2030.04.05"
        })
    }

    createUserIdt(){
        if(this.state.InputIdtValue===""){
            this.setState(
                {
                    name:"",
                    sex:"",
                    national:"",
                    year:"",
                    month:"",
                    day:"",
                    idcard:"",
                    city:"",
                    street:"",
                    unit:"",
                    expiradate:""
                }
            );
            notification.info({
                message: "请填写指定身份证！！",
                description: "",
                duration: 1,
            });
            return
        }
        this.setState({
            name:this.state.InputNameValue===""?getName():this.state.InputNameValue,
            sex:["男","女"][Math.floor(Math.random() * ["男","女"].length)],
            national:"汉",
            year:"1991",
            month:"3",
            day:"20",
            idcard:this.state.InputIdtValue,
            city:"江苏省宿迁市宿豫区",
            street:"浦东国际花园南33",
            unit:"南京市公安局江宁分局",
            expiradate:"2010.04.05-2030.04.05"
        })
    }
    handleGetInputIdtValue = (event) => {
        this.setState({
            InputIdtValue : event.target.value,
        })
    };
    handleGetInputNameValue = (event) => {
        this.setState({
            InputNameValue : event.target.value,
        })
    };
    handleGetInputExpireValue=(event) =>{
        this.setState({
            InputExpireValue : event.target.value,
        })
    };
    onChangePage = page => {
        console.log(page);
        this.setState({
            current: page,
        });
    };
    createExpireIdt(){
        this.setState({
            name:getName(),
            sex:["男","女"][Math.floor(Math.random() * ["男","女"].length)],
            national:"汉",
            year:"1991",
            month:"3",
            day:"20",
            idcard:getId_no(),
            city:"江苏省宿迁市宿豫区",
            street:"浦东国际花园南33",
            unit:"南京市公安局江宁分局",
            expiradate:this.state.InputExpireValue===""?"2010.04.05-2020.04.05":this.state.InputExpireValue
        })
    }
    render() {
        const {name,sex,national,year,month,day,idcard,city,street,unit,expiradate,InputIdtValue,InputNameValue,InputExpireValue} =this.state;

        return (
            <div >
                <div style={homeBG}/>
                <div style={homeMsg}>
                    <div style={nameStyle}>{name}</div>
                    <div style={sexStyle}>{sex}</div>
                    <div style={nationalStyle}>{national}</div>
                    <div style={yearStyle}>{year}</div>
                    <div style={monthStyle}>{month}</div>
                    <div style={dayStyle}>{day}</div>
                    <div style={idcardStyle}>{idcard}</div>
                    <div style={cityStyle}>{city}</div>
                    <div style={streeStyle}>{street}</div>
                    <div style={unitStyle}>{unit}</div>
                    <div style={expiradateStyle}>{expiradate}</div>
                </div>
                <div style={homeOther}>
                    <div>
                        <span>身份证：</span>
                        <Input maxLength={18} style={{ width: '250px'}}  placeholder="指定身份证时-输入身份证" value={InputIdtValue} onChange={this.handleGetInputIdtValue}/>
                        <span style={{marginLeft:"20px"}}>姓名：</span>
                        <Input style={{ width: '200px'}} placeholder="输入姓名" value={InputNameValue} onChange={this.handleGetInputNameValue}/>
                        <Button style={{marginLeft:"20px"}} type="primary" onClick={this.createAnyIdt.bind(this)}>生成随机身份证</Button>
                        <Button style={{marginLeft:"20px"}} type="primary" onClick={this.createUserIdt.bind(this)}>生成指定身份证</Button>
                    </div>
                    <div style={{paddingTop:"10px"}}>
                        <span>身份有效期：</span>
                        <Input maxLength={21} style={{ width: '250px'}} placeholder="样式:2000.04.05-2010.04.05" value={InputExpireValue} onChange={this.handleGetInputExpireValue}/>
                        <Button style={{marginLeft:"20px"}} type="primary" onClick={this.createExpireIdt.bind(this)}>生成过期身份证</Button>
                    </div>
                </div>
                <div style={homeResult}>
                    <h3>身份证记录：</h3>
                    {spanDiv()}
                    <Pagination style={{paddingLeft:"600px"}} current={this.current} onChange={this.onChangePage} total={30}/>
                </div>
            </div>
        )
    }
}

export default ToolsIdt;
