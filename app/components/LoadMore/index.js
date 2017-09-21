import React, {Component} from 'react'
import './index.less'

export default class LoadMore extends Component {
	constructor(props) {
		super(props);

		this.loadMore = this.loadMore.bind(this)
	}
	
	render() {

		let {hasMore} = this.props
	
		return (
			<div className="has-more">
				{
					hasMore ?
					<div ref="more" onClick={this.loadMore}>加载更多</div> :
					<div>我是有底线的</div>
				}
			</div>
		)
	}
	
	componentDidMount() {
		// 绑定滚动事件
		this.fn = () => {
			clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				console.log('滚动')
				// 先判断是否正在加载
				if (this.props.isLoading) {
					return
				}

				// 判断按钮距离屏幕顶端高度和可视窗口的比较
				let screen = window.screen.height

				// 获取当前元素的位置，可以获取上下左右
				let top = this.refs.more.getBoundingClientRect()

				if (top < screen) {
					// 如果加载更多按钮进入可视区加载更多
					this.props.loadMore()
				}

			}, 50)
		}
		window.addEventListener('scroll', this.fn)
	}

	componentWillUnmount() {
		// 移除滚动事件
		window.removeEventListener('scroll', this.fn)
	}

	loadMore() {
		if (this.props.isLoading) {
			return
		}
		// 调用父级加载更多函数
		this.props.loadMore()
	}
}