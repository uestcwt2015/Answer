import React from 'react';
import {Link} from 'react-router';

function StepButton(props) {
	return(
		<span className={props.className} style={props.style}>
			<Link to={props.href} className={props.linkStyle}>{props.children}</Link>
		</span>
	)
}

export default StepButton;