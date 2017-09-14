import React, {Component} from 'react'
import RouterMap from '../routes/index'

export default class App extends Component {

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
		// setTimeout(()=>{
			this.setState({
				done: true
			})
		// },5000)
		
	}
}