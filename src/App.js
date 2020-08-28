import React,{useState} from 'react';
import './App.css';
import AceEditor from 'react-ace';

/* eslint-disable */


function App() {

  return (
    <div className="App">

      <MainNavbar />

      <div className="main-wrapper">
        <div className="empty-start"></div>
        <div className="language-selector">
          <div className="col">
            <div>


            </div>
          </div>
        </div>

        <div className="code-wrapper">
          <div className="code-editor">
            <div className="col" style={{ height: '100%', width: '100%' }}>
              <AceEditor mode="python" theme="monokai" height="100%" width="100%" />
            </div>
          </div>

          <div className="col console-wrapper" style={{ paddingLeft: '0%', paddingRight: '0%' }}>
            <div className="console-navbar-wrapper">
            <ConsoleNavbar />
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
