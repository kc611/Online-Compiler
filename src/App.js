import React from 'react';
import $ from 'jquery';
import './App.css';
import './styles.css';
import './main_functions.js';

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
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="lang-selector-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{marginTop:'12px',width:'100%'}}>
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
                <div className="col" style={{height:'100%',width:'100%'}}>
                        <div id="editor"># Write code here print("Hello World")</div>
                </div>
            </div>

            <div className="col console-wrapper" style={{paddingLeft:'0%',paddingRight:'0%'}}>
                <div className="console-navbar-wrapper">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:'5%'}}>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link" href="#" onclick="console_input_mode()">Input</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#" onclick="console_output_mode()">Output</a>
                        </li>
                      </ul>
                      <ul className="nav navbar-nav navbar-right" style={{float:'right'}}>
                        <li><a href="#" onclick="submit_code()">Run
                          <i className="fa fa-play"></i>
                        </a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* {% include 'console_navbar.html' %} */}
                <div className="console-main" id="console-main">
                    <textarea name="console-text-area" id="console-text-area" className="console-text-area"></textarea>
                </div>
            </div>
        </div>
        

    </div>


    
{/* 
    <script>
        var input = "";
        var output = "";
        var mode = "python3";
        // 0 = input mode and 1 = output mode
        var currmode = 0;
        function console_input_mode() {
            console = document.getElementById("console-text-area");
            if(currmode == 1){
                output = console.value;
                console.value = input;
                currmode = 0;
                console.removeAttribute('readonly')
            }
        }
        function console_output_mode() {
            console = document.getElementById("console-text-area");
            if(currmode == 0){
                console.removeAttribute('readonly');
                input = console.value;
                console.value = output;
                currmode = 1;
                console.readOnly = "true";
            }
        }

        function submit_code(){
            var editor = ace.edit("editor");
            var code = editor.getValue();
            var token = '{{csrf_token}}';
            const data = {
                code:code,
                input:input,
                mode:mode
            }
            $.ajax({
                url:'https://onlinecompile.herokuapp.com/send',
                type:"POST",
                headers: { "X-CSRFToken": token },
                data:JSON.stringify(data),
                dataType: "json",
                success: function(result){
                    output = result.output;
                    console_output_mode();
                },
                error:function(error){
                    console.log('Error ${error}');
                }
            })

        }

        function setmode(lang){
            var main_butt = document.getElementById("lang-selector-button");
            switch(lang){
                case "python3":
                    mode = "python3";
                    editor.setValue("# Write code here\nprint(\"Hello World\")",0);
                    editor.session.setMode("ace/mode/python");
                    main_butt.innerHTML = 'Python 3';
                    break;
                case "java":
                    mode = "java";
                    editor.setValue("import java.util.*;\nimport java.lang.*;\nimport java.io.*;\n\n/* Name of the className has to be \"Main\" only if the className is public. \nclassName Ideone\n{\n	public static void main (String[] args) throws java.lang.Exception\n	{\n		// your code goes here\n	}\n}",0);
                    editor.session.setMode("ace/mode/java");
                    main_butt.innerHTML = 'Java';
                    break;
                case "c":
                    mode = "c";
                    editor.setValue("#include <stdio.h>\n\nint main(void) \{\n// your code goes here\nreturn 0;\}",0);
                    editor.session.setMode("ace/mode/c_cpp");
                    main_butt.innerHTML = 'C';
                    break;
                case "cpp":
                    mode = "cpp";
                    editor.setValue("#include <iostream>\nusing namespace std;\n\nint main()\{\n// your code goes here\nreturn 0;\n}",0);
                    editor.session.setMode("ace/mode/c_cpp");
                    main_butt.innerHTML = 'C++';
                    break;
            }
        }

      </script> */}
    </div>
  );
}

export default App;
