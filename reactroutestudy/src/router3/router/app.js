import React,{Component} from "react";
// eslint-disable-next-line
import {Router,Route,hashHistory,IndexRoute} from "react-router";
import Index from "../Index";
import Login from "../login";
import Details from "../detail";
import Book from "../detail/book";
import Goods from "../detail/goods";
import NotFound from "../404";

export default class App extends Component{
    render() {
        return(
            <div>
                <Router history={hashHistory}>
                    <Route path='/' component={Index}/>
                    <Route path='/login/:username' component={Login}/>
                    <Route path='/detail' component={Details}>
                        <IndexRoute component={Book}/>
                        <Route path='/detail/goods' component={Goods}/>
                    </Route>
                    <Route component={NotFound}/>
                </Router>
            </div>
        )
    }
}
