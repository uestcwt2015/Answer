import React from 'react';
import Button from '../Components/Button';
import CSSModules from 'react-css-modules';
import style from '../css_modules/notice.css';

function Notice() {
	return(
		<div className={style.container}>
			<header className={style.header}>答题须知</header>
			<artical className={style.article}>
				<ol className={style.ol}>
					<li className={style.li}>本试题答题时间为9月17号至九月24号，请于9月24号19：30前将试题交到学生活动中心221星辰工作室</li>
					<li className={style.li}>本试题允许搜索或动手实践。我们更看重的是报名者的责任感、工作激情、学习能力以及团队合作能力</li>
					<li className={style.li}>试题成绩仅作为参考，最终成绩秉持笔试和面试成绩相结合的原则</li>
					<li className={style.li}>没有交卷之前可以修改答案，一旦提交，便不能再修改</li>
					<li className={style.li}>选择题存在多选情况</li>
				</ol>
			</artical>
			<Button className={style.button} submit={false} href="questionlist">开始答题</Button>
		</div>
	)
}

export default CSSModules(Notice, style);
