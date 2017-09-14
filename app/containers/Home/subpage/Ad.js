import React, {Component} from 'react'
import {getAd} from '../../../fetch/home'

export default class Ad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	
	render() {
		return (
			<div>
				
			</div>
		)
	}

	componentDidMount() {
		let data = this.state
		
		getAd().then(res => res.json).then(
			this.setState({
				data
			})
		)
	}
}