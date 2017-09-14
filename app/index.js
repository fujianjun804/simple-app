import React from 'react'
import { render } from 'react-dom'
import App from './containers/index'
import  './assets/index.less'
// App负责选择哪个页面
render(
	<App/>,
	document.getElementById("app")
	)