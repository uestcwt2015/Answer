import React, {Component}from 'react';
import QuestionList from '../Components/QuestionsList';
import WrapTop from '../Components/WrapTop';
import WrapBottom from '../Components/WrapBottom';
import File from '../Components/File';
import {Link} from 'react-router';
import {fetch} from 'react-fetch';

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			detail:  { //指明对应的题号是否完成，完全是和题号对应起来的
		        "1": true,
		        "2": false,
		        "3": false,
		        "4": false,
		        "5": true,
		        "6": false,
		        "7": false,
		        "8": false,
		        "9": false,
		        "10": false,
		        "11": false,
		        "12": false,
		        "13": false,
		        "14": false
		    }
		}

		this.check = this.check.bind(this);
	}

	
    check(e) {
    	let details = this.state.detail;
		for(let i = 0; i < details.length; i++) {
			if(details[i] === false) {
				e.preventDefault();
			}
		}
	}
	
	sureSubmit() {
		fetch('/exam/submitExam', {
			method: 'POST',
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
				},
			body:JSON.stringify({})
		})
		.then(res => res.json())
		.then((data) => {
			if(data.errorCode == 100) {
				alert(data.errorMsg);
			}
		})
	}

	componentDidMount() {
		// fetch('/exam/status')
  //           .then((res) => { console.log(res.status);return res.json() })
  //           .then((data) => { this.setState({detail: data.detail}) })
  //           .catch((e) => { console.log(e.message) })
	}

	render() {
		return (
			<div className="question-list-box">
				<WrapTop text="答题卡" needLogined={true}/>
				<QuestionList detail={this.state.detail} />
				<File />
				<WrapBottom>
					<button className="submitSure">
						<Link to="/achieved" onClick={this.Check} style={{color: '#00BC9B', fontSize: '1rem', textDecoration: 'none'}} >确认交卷</Link>
					</button>
				</WrapBottom>
			</div>
		)
	}
}



export default List;