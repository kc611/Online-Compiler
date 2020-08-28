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

function MainNavbar() {
  return (
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
}

function ConsoleNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '30px' }}>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" >Input</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Output</a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right" style={{ float: 'right' }}>
          <li><a >Run
          <i className="fa fa-play"></i>
          </a></li>
        </ul>
      </div>
    </nav>
  );
}

function LangDropdown(){

}

export default App;
