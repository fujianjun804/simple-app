import React, {Component} from 'react'
// 路由的两种类型 HashRouter BrowserRouter
import { HashRouter as Router, 
	Route, 
	Switch, //只匹配一次
	BrowserRouter
} from 'react-router-dom'
import Home from '../containers/Home'
import Detail from '../containers/Detail'

export default class RouterMap extends Component {
	
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						{/* exact 只有路径为 /时候匹配*/}
						<Route exact path='/' component={Home} />
						<Route path='/detail/:id' component={Detail} />
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}