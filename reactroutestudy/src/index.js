import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./router3/router/app";

ReactDOM.render(<App/>,document.getElementById('root'));

serviceWorker.unregister();
