import React, {Children} from 'react';

const wrapStyle = {
	'display': 'block',
	'width': '100%',
	'hieght': '2.5rem',
	'background': '#3d444c',
	'fontSize': '1rem',
	'color': '#ffffff',
	'textAlign': 'center',
	'lineHeight': '2.5rem',
	'position': 'fixed',
	'bottom': '0px',
	'left': '0px'
}

function WrapBottom(props) {
	return (
		<div className="wrap-bottom" style={wrapStyle}>
			{props.children}
		</div>
	)
}

export default WrapBottom;