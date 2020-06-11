import React,{Component} from "react";
import Nav from "../nav";
import { Link} from "react-router";

export default class details extends Component{
    render() {
        return(
            <div>
                <Nav/>
                详情
                <ul>
                    <li>
                        <Link to='/detail'>书籍</Link>
                    </li>
                    <li>
                        <Link to='/detail/goods'>商品</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
