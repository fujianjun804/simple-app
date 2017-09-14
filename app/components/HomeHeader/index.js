import React, {Component} from 'react'
import  './index.less'


export default class HomeHeader extends Component {
	
	render() {

		let { cityName } = this.props

		return (
			<div className="home-header back">
				<div className="city">
					{cityName}
					<i className="iconfont icon-xiangxia2"></i>
				</div>
				<div className="search">
					<i className="iconfont icon-sousuo-xianxing"></i>
					<input type="text"/>
				</div>
				<div className="profile"><i className="iconfont icon-yonghufill"></i></div>
			</div>
		)
	}
}