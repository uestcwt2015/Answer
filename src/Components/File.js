import React, {Component} from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import CSSModules from 'react-css-modules';
import style from '../css_modules/file.css';

class File extends Component {
	constructor(props) {
		super(props);

		this.state = {
		
		}

		this.changeName = this.changeName.bind(this);
	}
	
	changeName() {
		let file = document.getElementById('file').value;
		let filename = file.toString().split('\\');
		let index = filename.length - 1;
		let name = document.getElementById('filename');
		name.innerText = filename[index];
		
		let formData = new FormData();
		formData.append('data', file);
		fetch('http://jcuan.org/exam/upload',{
			method:'POST',
			credentials: 'include',
			body: formData
		})
		.then(res => res.json())
		.then(data => {
			if(data.errorCode !== 0) {
				alert(data.errorMsg)
			}
		})

	}

	componentDidMount() {
		fetch('http://jcuan.org/exam/getAttach', {credentials: "include"})
   		.then((res) => {return res.json() })
        .then((data) => {
        	console.log(data)
  			if(data.errorCode === 0){
  				let link = document.createElement('a');
				link.href = data.url;
				link.innerText = data.fileName
				document.getElementsByTagName('label')[0].appendChild(link);
  			}
  		})
	}

	render() {
		return (
			<div>
				<label htmlFor="file" className={style.file}>
					添加附件📎
					<span id="filename" className={style.fileName}></span>
					<input type="file" id="file" className={style.input} onChange={this.changeName}/>
				</label>
			</div>
		)
	}
}

export default CSSModules(File, style);