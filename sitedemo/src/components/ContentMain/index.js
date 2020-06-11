import React from 'react'
//引入路由
import {Route, Switch} from 'react-router-dom'
import CreateAccount from "../../page/CreateAccount";
import RunDetails from "../../page/CreateAccount/RunDetails";
import TestResult from "../../page/CreateAccount/TestResult";
import CreateUser from "../../page/CreateUser"
import CreateSxd from "../../page/CreateUser/CreateSxd"
import ToolsIdt from "../../page/Tools"
import ToolsBank from "../../page/Tools/Banks";
import PlantFormAndroid from "../../page/plantform";
import PlantFormIos from "../../page/plantform/PlantFormIos";
import IndexPage from "../../page";
import Grafana from "../../page/Grafana";
import Box from "../../page/Grafana/Box";
class ContentMain extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={IndexPage}/>
					<Route exact path='/page/grafana' component={Grafana}/>
					<Route exact path='/page/box' component={Box}/>
					<Route exact path='/page/androidplantform' component={PlantFormAndroid}/>
					<Route exact path='/page/iosplantform' component={PlantFormIos}/>
					<Route exact path='/page/toolsidt' component={ToolsIdt}/>
					<Route exact path='/page/toolsbank' component={ToolsBank}/>
					<Route exact path='/page/createuser' component={CreateUser}/>
					<Route exact path='/page/createsxd' component={CreateSxd}/>
					<Route exact path='/page/createaccount' component={CreateAccount}/>
					<Route exact path='/page/rundetails' component={RunDetails}/>
					<Route exact path='/page/testresult' component={TestResult}/>
				</Switch>
			</div>
		)
	}
}

export default ContentMain
