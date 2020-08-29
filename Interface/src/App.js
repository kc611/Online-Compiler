import React, { Component } from 'react';
import './App.css';
import './styles.css';
import Nav from './Components/Nav';
import Editor from './Components/Editor'

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			mode: "python",
			val: {
				python: "Python",
				cpp: "C++",
				c: "C",
				java: "JAVA"
			}
		}

		this.changeMode = this.changeMode.bind(this);
	}

	changeMode(mode) {
		this.setState({mode: mode});
		var element = document.querySelector("#lang-selector-button");
		element.innerHTML = this.state.val[mode];
	}

	render() {
		return (
			<div classNameName="App">
				
				<Nav />

				<div className="main-wrapper">
					<div className="empty-start"></div>
					<div className="language-selector">
						<div className="col">
							<div>
								<div className="dropdown">
									<button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="lang-selector-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ marginTop: '12px', width: '100%' }}>
										Python
										</button>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a className="dropdown-item" href="#" onClick={() => this.changeMode('cpp')}>C++</a>
										<a className="dropdown-item" href="#" onClick={() => this.changeMode('c')}>C</a>
										<a className="dropdown-item" href="#" onClick={() => this.changeMode('java')}>Java</a>
										<a className="dropdown-item" href="#" onClick={() => this.changeMode('python')}>Python</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Editor mode={this.state.mode} />

				</div>

			</div>
		);
	}
}


export default App;
