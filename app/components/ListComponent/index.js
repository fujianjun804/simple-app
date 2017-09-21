import React, {Component} from 'react'
import ListItem from './ListItem'
import './index.less'


export default class ListComponent extends Component {
	
	render() {
	
		let {data} = this.props

		return (
			<div>
				{
					data.map((item, index) => {
						return <ListItem key={index} data={item} />
					})
				}
			</div>
		)
	}
}