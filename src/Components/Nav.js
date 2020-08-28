import React, { Component } from 'react'

class Nav extends Component {

	constructor(props){
		super(props);
	}

	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" >OnlineCompile</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" >Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" >Upcoming</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">About</a>
						</li>
					</ul>
					<a href="https://github.com/kc611/Online-Compiler">
						<button className="btn btn-success">
							Contribute
						</button>
					</a>
				</div>
			</nav>
		);
	};
}

export default Nav;