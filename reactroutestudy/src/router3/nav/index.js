import React, {Component} from "react";
import {Link} from "react-router";

export default class nav extends Component {

    render() {
        // eslint-disable-next-line
        var username="wxm_11&123456";
        return (
            <ul>
                <li>
                    <Link to='/'>首页</Link>
                </li>
                <li>
                    <Link to={`/login/${username}`}>登录</Link>
                </li>
                <li>
                    <Link to='/detail'>详情</Link>
                </li>
            </ul>
        )
    }
}
