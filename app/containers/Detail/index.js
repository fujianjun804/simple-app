import React, {Component} from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import Info from "./subpage/Info"
import Comment from "./subpage/Comment"

export default class Detail extends Component {
	
	render() {

		console.log(this.props.match.params.id)
		return (
			<div>
				{/*头部*/}
				<HeaderComponent
					title="商户详情"
					history={this.props.history}
				 />
				{/*商户信息*/}
                <Info id={this.props.match.params.id} />
                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
			</div>
		)
	}
}