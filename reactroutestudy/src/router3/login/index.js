import React,{Component} from "react";
import Nav from "../nav";
export default class login extends Component{
    render() {
        return(
            <div>
                <Nav/>
                登录:{this.props.params.username}
            </div>
        )
    }
}
