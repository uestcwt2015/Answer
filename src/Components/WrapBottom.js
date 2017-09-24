import React from 'react';
import CSSModules from 'react-css-modules';
import style from '../css_modules/wrap.css';

function WrapBottom(props) {
	return (
		<div className={style.wrap_bottom}>
			{props.children}
		</div>
	)
}

export default CSSModules(WrapBottom, style);