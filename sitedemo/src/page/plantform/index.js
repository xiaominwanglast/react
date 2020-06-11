import React,{Component} from "react";
import { Upload, message,Card ,Row, Col} from 'antd';
import { CloudServerOutlined } from '@ant-design/icons';
import iconIma from "../../assets/img/dai.jpeg"


const QRCode = require('qrcode.react');

const { Dragger } = Upload;
const { Meta } = Card;
const props = {
	name: 'file',
	multiple: true,
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	onChange(info) {
		const { status } = info.file;
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (status === 'done') {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

let iconImage = {
	height:"160px",
	backgroundImage: 'url(' + iconIma + ')',
	backgroundRepeat:"no-repeat",
	opacity:"1",
	margin:"10px 60px"
};

let qrCode={
	margin:"10px 60px"
}

class PlantFormAndroid extends Component{
	render() {
		return(
			<div>
				<div style={{width:"300px"}}>
					<Dragger {...props} >
						<p className="ant-upload-drag-icon">
							<CloudServerOutlined />
						</p>
						<p className="ant-upload-text">点击或者拖拽文件到这个区域上传文件</p>
						<p className="ant-upload-hint">
							目前上传的问题是个人买的私服腾讯云，上传小写，太大会把我服务干蹦的
						</p>
					</Dragger>
				</div>
				<div style={{fontSize:"16px",lineHeight:"10px",border:"dashed 1px #D3D3D3",width:"300px",marginTop:"10px"}}>
					<div style={iconImage}/>
					<QRCode style={qrCode} value={'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg'} size={160}/>
					<div style={{marginLeft:"60px"}}>
						<p>包  名：随心借</p>
						<p>版本号:V5.1.0</p>
						<p>上传人：王羲之</p>
					</div>
					<p>更新时间：2020-04-30 00:00:00</p>
				</div>
			</div>
		)
	}
}

export default PlantFormAndroid;
