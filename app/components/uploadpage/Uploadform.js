import React, { Component } from 'react';
import Search from "../homepage/Search";
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';
import Countries from './countries';
import fetch from 'isomorphic-fetch';
import AlertContainer from 'react-alert';
import ImageUploader from './imageUpload';



export default class Uploadform extends Component {
	alertOptions() {
		offset = 14,
			position = 'bottom left',
			theme = 'dark',
			time = 5000,
			transition = 'scale'
	}

	showAlert(e) {
		this.msg.show('Your bot has been successfully uploaded', {
			time: 2000,
			type: 'success',
			icon: <img src="img/gg.jpeg" />
		})
	}
	constructor() {
		super()
		this.state = {
			botname: '',
			companyname: '',
			botdescription: '',
			country: '',
			category: ''

		}
	}



	onChange(e) {

		this.setState({
			[e.target.name]: e.target.value
		})


	}



	onSubmit(e) {
		var url = "http://localhost:3000/api/v1/upload"

		e.preventDefault();
		this.props.onSubmit
		console.log(this.state);
		//clear after submitting
		this.setState({
			botname: '',
			companyname: '',
			botdescription: '',
			country: '',
			category: ''
		});
		fetch(url, {
			method: 'POST',
			mode: 'CORS',//allows for data to be reached from athour api calls
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}

		}).then(res => {
			return res;
			console.log('Data has been sent to the server')
		}).catch(err => err);
	}


	render() {

		var formstyle = {
			border: 'grey solid 2px',
			borderRadius: '4px',
			width: '800px',
			height: '500px',
			marginLeft: '300px',
			marginTop: '10px',
			backgroundColor: 'white'
		};
		var formfields = {
			marginLeft: '10px',
			marginRight: '20px',
			marginTop: '10px',
			marginBottom: '10px'
		};
		var header = {
			color: 'black',
			textAlign: 'center',
			transition: 'scale'
		};
		return (
			<div>
				<div >
					<nav className="navbar navbar-inverse">
						<div className="container-fluid">

							<ul className="nav navbar-nav">
								<li><a href="#">Home</a></li>
								<li className="active"><a href="/upload">Upload</a></li>
							</ul>
							<div style={header} className="navbar-header">
								<a className="navbar-brand head text-center" href="#">BOT STORE</a>
							</div>
						</div>
					</nav>
				</div>
				<h1 style={header}>Upload Section</h1>
				<div className="Uploadform" style={formstyle}>
					<form class="mui-form" style={formfields}>
						<Input label="Bot Name" floatingLabel={true} name="botname" onChange={e => this.onChange(e)} />
						<Input label="Company/Developer Name" floatingLabel={true} name="companyname" onChange={e => this.onChange(e)} />
						<Textarea label="Bot Description" floatingLabel={true} name="botdescription" onChange={e => this.onChange(e)} />
						<Select name="country" floatingLabel={true} onChange={e => this.onChange(e)}>
							<Countries />
						</Select>
						<ImageUploader />
						<Select name="category" label="Bot Category" defaultValue="Music" onChange={e => this.onChange(e)}>
							<Option value="Games" label="Games" />
							<Option value="Music" label="Music" />
							<Option value="Entertainment" label="Entertainment" />
							<Option value="Health" label="Health" />
						</Select>
						<Button onClick={e => this.showAlert(e)} color="primary">Upload</Button>
						<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
					</form>
				</div>
			</div>
		);
	}
}

