import React,{Component} from "react";



class Grafana extends Component{
	render() {
		return(
			<iframe
				style={{width:'100%', overflow:'visible'}}
				ref="iframe"
				src="http://203.195.163.209:8005"
				width="100%"
				scrolling="no"
				frameBorder="0"
			/>
		)
	}
}

export default Grafana;
