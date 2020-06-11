import React,{Component} from "react";
import {Route,Switch} from "react-router-dom";
import Pd from '../container/city/Pudong'
import Xh from "../container/city/Xuhui";
import NotFound from "../container/404";


export default class SubRouter extends Component{
    render() {
        return(
            <Switch>
                {/*<Redirect from='/city' to='/city/pd' />*/}
                <Route path='/city/pd' component={Pd}/>
                <Route path='/city/xh' component={Xh}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}
