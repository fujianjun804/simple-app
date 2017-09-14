import React, {Component} from 'react'
import ReactSwipe from 'react-swipe'
import  './index.less'


export default class Slider extends Component {
	constructor() {
		super();
		this.state = {
			index: 0
		}
	}
	
	render() {

		let ops = {
			continuous: false,
			callback: (index)=>{
				this.setState({
					index
				})
			}
		}

		return (
			<div>
				<ReactSwipe className="carouse1" swipeOptions={ops}>
					<div>
						<ul>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
							<li>
								<i className="iconfont icon-coupons"></i>
								<span>美食</span>
							</li>
						</ul>
					</div>
				</ReactSwipe>
				<ul className="dots">
					
					{
						[0,1,2,3].map((index) => {
							return <li key={index} className={this.state.index == index ? "active" : ""}></li>
						})
					}
				</ul>
			</div>
		)
	}
}