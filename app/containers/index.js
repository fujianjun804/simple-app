import React, {Component} from 'react'
import RouterMap from '../routes/index'
import {connect} from 'react-redux'
// 绑定 ActionCreators 组成的对象
import {bindActionCreators} from 'redux'
// 获取所有 ActionCreators 组成的对象
import * as Actions from '../actions/userInfo'

class App extends Component {

	constructor() {
		super()
		this.state = {
			done: false
		}
		
	}
	
	render() {

		let { done } = this.state

		return (
			<div>
				{
					// 如果路径为 / RouterMap 就会变为Home组件
				}
				{
					done ?
					<RouterMap/> :
					<div>正在加载。。。</div>
				}
				
			</div>
		)
	}

	componentDidMount() {

		// 先本地查找，是否存储过名字叫cityName的，没有默认一个城市 北京
		// 将当前的城市存到 redux 


		// setTimeout(()=>{
			this.setState({
				done: true
			})
		// },5000)
		console.log(this.props.userActions)
		
	}
}

export default connect (
	state => {

		return {}
	},
	dispatch => {
		return {
			userActions: bindActionCreators(Actions, dispatch)
		}
	}
)(App)