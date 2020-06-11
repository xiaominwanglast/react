import React,{Component} from "react";
import {Link} from "react-router-dom";

export default class city extends Component{
    render() {
        return(
            <div>
                <ul>
                    <li>
                       <Link to='/city/pd'>浦东</Link>
                    </li>
                    <li>
                        <Link to='/city/xh'>徐汇</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
