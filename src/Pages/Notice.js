import React from 'react';
import Button from '../Components/Button';
import CSSModules from 'react-css-modules';
import style from '../css_modules/notice.css';

function Notice() {
	return(
		<div className={style.container}> 
			<header className={style.header}>答题须知</header>
			<artical className={style.artical}>
			</artical>
			<Button className={style.button} linkStyle={style.link} submit={false} href="questionlist">开始答题</Button>
		</div>
	)
}

export default CSSModules(Notice, style);