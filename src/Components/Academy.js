import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import style from '../css_modules/academy.css';

class Academy extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			isShow: false
		}

		this.ListShow = this.ListShow.bind(this);
		this.ChooseAcademy = this.ChooseAcademy.bind(this);
	}
	
	ListShow() {
		this.setState({
			isShow: true
		})
	}
	
	ChooseAcademy(e) {
		let value = e.target.innerText;
		console.log(value);

		this.setState({
			value: value,
			isShow: false
		});
	}

	render() {
		return (
			<div styleName="container">
				<input styleName="input" onClick={this.ListShow} value={this.state.value} placeholder="学院" name="academy"/>
				{this.state.isShow ? <AcademyList onClick = {this.ChooseAcademy}/> : null}
			</div>
		)
	}
}

function AcademyList(props) {
	const academys = ['通信与信息工程学院', '通信抗干扰技术国家级重点实验室', '电子工程学院', '微电子与固体电子学院', '国家示范性微电子学院',
		'物理电子学院', '光电信息学院', '计算机科学与工程学院', '信息与软件工程学院', '自动化工程学院', '机械电子工程学院', '生命科学与技术学院',
		'数学科学学院', '经济与管理学院', '政治与公共管理学院', '外国语学院', '马克思主义教育学院', '能源科学与工程学院', '资源与环境学院',
		'航空航天学院', '格拉斯哥学院', '医学院', '英才实验学院'];
	return (
		<ul className={style.ul}>
			{
				academys.map((academyName) => {
					return (
						<li className={style.li} key={academys.indexOf(academyName)} onClick={props.onClick}>{academyName}</li>
					)
				})
			}
		</ul>
	)
}

export default CSSModules(Academy, style);