import React from 'react'
import imgUrl from '../assets/img/homeBG.jpg';

let homeMsg = {
	position:"relative",
	zIndex:"10",
	color: '#1890ff',
	textAlign: "center",
	fontSize: "14px",
	fontweight: "bold",
	width: "600px",
	margin: "150px auto",
};
let homeBG = {
	position: "absolute",
	top: "0px",
	bottom: "0px",
	backgroundImage: 'url(' + imgUrl + ')',
	backgroundSize: "100% auto",
	left: "200px",
	right: "0px",
	opacity:"0.4",
}

class IndexPage extends React.Component {
	render() {
		return (
			<div >
				<div style={homeBG}></div>

				<div style={homeMsg}>
					<div style={{fontSize: "22px"}}>这里是基于react+ant.design的一套基本使用Demo。
					</div>
					<div>
						前端框架：reactJs
						UI框架：ant.design
						网络请求：axios
					</div>
				</div>

			</div>
		)
	}
}

export default IndexPage
