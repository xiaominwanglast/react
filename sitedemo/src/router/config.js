//Loadable插件需使用Loading
import Loadable from 'react-loadable'
import Loading from '../components/Loading/index';

//定义路由
global.Main = Loadable({
	loader: () => import('../page/index'),
	loading: Loading,
});
//plantform
global.es6 = Loadable({
	loader: () => import('../page/plantform'),
	loading: Loading,
});
//表单
global.FromDemo = Loadable({
	loader: () => import('../page/Tools/index'),
	loading: Loading,
});
//网络请求
global.HttpDemo= Loadable({
	loader: () => import('../page/HttpDemo/index'),
	loading: Loading,
});
//弹框提醒
global.Alert = Loadable({
	loader: () => import('../page/Grafana/index'),
	loading: Loading,
});
//表格
global.Table = Loadable({
	loader: () => import('../page/CreateUser/index'),
	loading: Loading,
});
//树状图
global.CreateAccount = Loadable({
	loader: () => import('../page/CreateAccount/index'),
	loading: Loading,
});
