 import React, {Component} from 'react';
 import {Link} from 'react-router';
 import {fetch} from 'react-fetch';

 class QListItem extends Component {
 	constructor(props) {
		super(props);

		this.state = {
			num: this.props.num
		}
 	}

 	componentDidMount() {
 		fetch()
 	}
 }