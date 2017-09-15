import React from 'react'
import { render } from 'react-dom'
import App from './containers/index'
import  './assets/index.less'
import {Provider} from 'react-redux'
// 导入store
import {configureStore} from './store'

let store = configureStore() //生成store
// App负责选择哪个页面
render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("app")
	)