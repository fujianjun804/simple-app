import React, {Component} from 'react'
import {getList} from '../../../fetch/home'
import ListComponent from '../../../components/ListComponent'
import './index.less'
import LoadMore from '../../../components/LoadMore'

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasMore: true,
			data: [],
			page: 0,
			isLoading: true
		}

		this.loadMore = this.loadMore.bind(this)
	}
	
	render() {

		let {hasMore, isLoading} = this.state

		return (
			<div>
                {this.state.data.length?
                    <ListComponent data={this.state.data}/>
                    :<div>正在加载</div>}
                <LoadMore 
                loadMore={this.loadMore} 
                hasMore={hasMore}
                isLoading={isLoading}
                />
            </div>
		)
	}

	componentDidMount() {

		this.processData(getList(this.props.cityName, 0))
	}
	// 需要在当前写一个加载更多的函数，传递给 loadMore,当点击按钮出发传递函数
	loadMore() {
		console.log('aa');
		this.setState({
			page: this.state.page + 1,
			isLoading: true//每次加载更多时，每次请求状态为正在加载
		}, ()=>{
			// 这个函数可以获取到最新的状态
			this.processData(getList(this.props.cityName, this.state.page))
		})
	}

	// 处理成功后的逻辑
	processData(result) {
		result.then(res => res.json()).then(({hasMore, data}) => {
			console.log(data)
			this.setState({
				hasMore,
                data: this.state.data.concat(data),
                isLoading: false
            })
		})
	}

}