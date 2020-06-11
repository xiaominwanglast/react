/*全局配置*/
//网络请求
// import {post, get, put} from './utils/http'
import {HttpData} from './utils/http'
//全局样式
import './App.css';
//全局路由文件
export * from './router/config';
//接口api
export * from './utils/globalAPI'
/*全局网络请求*/
// global.$post=post;
// global.$get=get;
global.HttpData=HttpData;
//临时变量
global.menus = [
	{
		title: '首页',
		icon: 'page',
		key: '/'
	},
	{
		title: '身份证',
		icon: 'laptop',
		key: '/page/tools',
	},
	{
		title: '银行卡',
		icon: 'bars',
		key: '/page/Grafana',
	},
	{
		title: '造号平台',
		icon: 'desktop',
		key: '/page/CreateUser',
	},
	{
		title: '因子平台',
		icon: 'message',
		key: '/page/CreateAccount',
	},

]
