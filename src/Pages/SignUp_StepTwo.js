import React, {Component} from 'react';
import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import Select from '../Components/Select.js';
import CSSModules from 'react-css-modules';
import style from '../css_modules/signup.css';

const towards = ["交互&设计", "产品&运营", "前端", "安卓", "后台", "运维开发"];
const academys = ['通信与信息工程学院', '通信抗干扰技术国家级重点实验室', '电子工程学院', '微电子与固体电子学院',
		'物理电子学院', '光电信息学院', '计算机科学与工程学院', '信息与软件工程学院', '自动化工程学院', '机械电子工程学院', '生命科学与技术学院',
		'数学科学学院', '经济与管理学院', '政治与公共管理学院', '外国语学院', '马克思主义教育学院', '能源科学与工程学院', '资源与环境学院',
		'航空航天学院', '格拉斯哥学院', '医学院', '英才实验学院', '基础与前沿研究院'];
function StepTwo() {
	return (
		<div className={style.main2}>
			<form className="form" className={style.form2}>
				<Input label="用户名" name="uid" type="text" id="uid" key="uid" />
				<Input label="密码" name="password" type="password" id="password" key="password" />
				<Input label="重复密码" name="passwordCopy" type="password" id="passwordCopy" key="passwordCopy" />
				<select className={style.select} name="academy">
					<option value="">学院</option>
					{
						academys.map((e, i) => {
							return <option key={i} value={e}>{e}</option>
						})
					}
				</select>
				<Input label="邮箱" name="email" type="text" id="email" key="email" />
				<Input label="手机号码" name="phoneNumber" type="text" id="phoneNumber" key="phoneNumber" />
				<Select label="方向" name="towards" arr={towards} id="select" />
				<Button href="notice" className="button next-step-button" submit={true} url={"http://exam.stuhome.com/user/registerTwo"} className={style.button} linkStyle={style.link}>立即注册</Button>
			</form>
		</div>
	)
}

export default CSSModules(StepTwo, style);


