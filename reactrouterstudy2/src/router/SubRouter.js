import React,{Component} from "react";
import {Route,Switch} from "react-router-dom";
import Detail from "../container/detail";
import Home from "../container/home";
import NotFound from "../container/404";
import CityRouter from "./CityRouter";
import City from "../container/city";
export default class SubRouter extends Component{
    render() {
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <City path='/city'>
                    <Route path='/' component={CityRouter}/>
                </City>
                <Route path='/detail/:id' component={Detail}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}
