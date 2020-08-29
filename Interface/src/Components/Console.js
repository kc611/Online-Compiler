import React, { Component } from 'react';

class Console extends Component {

	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<div className="col console-wrapper" style={{ paddingLeft: '0%', paddingRight: '0%' }}>
				<div className="console-navbar-wrapper">
					<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '30px' }}>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item active">
									<a className="nav-link" href="#" onclick="console_input_mode()">Input</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" onclick="console_output_mode()">Output</a>
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right" style={{ float: 'right' }}>
								<li><a href="#" onclick="submit_code()">Run
											<i className="fa fa-play"></i>
								</a></li>
							</ul>
						</div>
					</nav>
				</div>
				<div className="console-main" id="console-main">
					<textarea name="console-text-area" id="console-text-area" className="console-text-area"></textarea>
				</div>
			</div>
		);
	}
	
}

export default Console;