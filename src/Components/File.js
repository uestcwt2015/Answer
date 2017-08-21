import React, {Component} from 'react';


const fileStyle = {
	'float': 'left',
	'marginLeft': '3rem',
}

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

		// fetch('/exam/upload',{
		// 	method:'POST',
		// 	headers: { 
		// 		'Accept': 'application/file',
		// 		'Content-Type': 'application/json' 
		// 		},
		// 	body: file
		// })
		// .then(res => res.json())

	}

	componentDidMount() {
// 		fetch('/exam/getAttach')
// //    	.then((res) => { console.log(res.status);return res.json() })
//   //    .then((data) => {
//   			if(data.errorCode == 0){
//   				let link = document.createElement('a');
// 				link.href = data.url;
// 				link.innerText = data.fileName
//   			}
//   		})
	}

	render() {
		return (
			<div>
				<label htmlFor="file" style={fileStyle}>
					添加附件📎
					<span id="filename" style={{marginLeft: '0.5rem',}}></span>
					<input type="file" id="file" style={{display: "none"}} onChange={this.changeName}/>
				</label>
			</div>
		)
	}
}

export default File;