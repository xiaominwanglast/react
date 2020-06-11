import React,{Component} from "react";
import {Link} from "react-router-dom";

export default class app extends Component{
    render() {
        var detailId='1001';

        return(
            <div>
                <ul>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                    <li>
                        <Link to='/city'>城市</Link>
                    </li>
                    <li>
                        <Link to={`/detail/${detailId}`}>详情</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
