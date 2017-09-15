import React, {Component} from 'react'
import HomeHeader from '../../components/HomeHeader/index'
import Slider from '../../components/Slider/index'
import Ad from './subpage/Ad'
import List from './subpage/list'
import {connect} from 'react-redux'

class Home extends Component {


	render() {
		let { cityName } = this.props.userInfo
	
		return (
			<div>
				<HomeHeader cityName={cityName} />
				<Slider/>
				<Ad/>
				<List cityName={cityName} />
			</div>
		)
	}
}
// 取出 redux 中的城市传递给 HomeHeader 组件

export default connect(
	state => {
		return {
			userInfo: state.userInfo
			//取出 redux state 中 userInfo的数据，赋予给变量 userInfo
		}
	}
)(Home)