import React, {Component} from 'react';

function ListItem(props) {
	return (
		<li className='question-items' style={this.props.style}>{this.props.num}</li>
	)
}

export default ListItem;