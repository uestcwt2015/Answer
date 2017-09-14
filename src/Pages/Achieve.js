import React from 'react';
import CSSModules from 'react-css-modules';
import style from '../css_modules/achieve.css';

function Achieve() {
	return (
		<div className={style.container}>
			<h3>你已完成答题，请等候短信通知</h3>
			<div className={style.img}></div>
		</div>
	)
}

export default CSSModules(Achieve, style);