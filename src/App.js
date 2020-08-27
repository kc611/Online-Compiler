import React from 'react';
import './App.css';
import './styles.css';
import './main_functions.js';
import $ from 'jquery';
import AceEditor from 'react-ace';

function App() {
  return (
    <div classNameName="App">


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">OnlineCompile</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="{% url 'home' %}">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{% url 'upcoming' %}">Upcoming</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{% url 'about' %}">About</a>
            </li>
          </ul>
          <a href="https://github.com/kc611/Online-Compiler">
            <button className="btn btn-success">
              Contribute
              </button>
          </a>
        </div>
      </nav>

      <div className="main-wrapper">
        <div className="empty-start"></div>
        <div className="language-selector">
          <div className="col">
            <div>
              <div className="dropdown">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="lang-selector-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ marginTop: '12px', width: '100%' }}>
                  Python 3
                        </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#" onclick="setmode('cpp')">C++</a>
                  <a className="dropdown-item" href="#" onclick="setmode('c')">C</a>
                  <a className="dropdown-item" href="#" onclick="setmode('java')">Java</a>
                  <a className="dropdown-item" href="#" onclick="setmode('python3')">Python 3</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="code-wrapper">
          <div className="code-editor">
            <div className="col" style={{ height: '100%', width: '100%' }}>
              <AceEditor mode="python" theme="monokai" height="100%" width="100%" enableLiveAutocompletion="True" />
            </div>
          </div>

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
        </div>
      </div>

    </div>
  );
}


export default App;
