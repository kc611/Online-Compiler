import React from 'react';
import $ from 'jquery';
import './App.css';
import './styles.css';
import './main_functions.js';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">OnlineCompile</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="{% url 'home' %}">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{% url 'upcoming' %}">Upcoming</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{% url 'about' %}">About</a>
            </li>
          </ul>
          <a href="https://github.com/kc611/Online-Compiler">
              <button class="btn btn-success">
                  Contribute
              </button>
          </a>
        </div>
      </nav>

      <div class="main-wrapper">
        <div class="empty-start"></div>
        <div class="language-selector">
            <div class="col">
                <div>
                    <div class="dropdown">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="lang-selector-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{marginTop:'12px',width:'100%'}}>
                            Python 3
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#" onclick="setmode('cpp')">C++</a>
                          <a class="dropdown-item" href="#" onclick="setmode('c')">C</a>
                          <a class="dropdown-item" href="#" onclick="setmode('java')">Java</a>
                          <a class="dropdown-item" href="#" onclick="setmode('python3')">Python 3</a>
                        </div>
                      </div>
                </div>
            </div>
        </div>

        <div class="code-wrapper">
            <div class="code-editor">
                <div class="col" style={{height:'100%',width:'100%'}}>
                        <div id="editor"># Write code here
print("Hello World")</div>
                    
                </div>
            </div>

            <div class="col console-wrapper" style={{paddingLeft:'0%',paddingRight:'0%'}}>
                <div class="console-navbar-wrapper">
                  <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{height:'5%'}}>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item active">
                          <a class="nav-link" href="#" onclick="console_input_mode()">Input</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#" onclick="console_output_mode()">Output</a>
                        </li>
                      </ul>
                      <ul class="nav navbar-nav navbar-right" style={{float:'right'}}>
                        <li><a href="#" onclick="submit_code()">Run
                          <i class="fa fa-play"></i>
                        </a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* {% include 'console_navbar.html' %} */}
                <div class="console-main" id="console-main">
                    <textarea name="console-text-area" id="console-text-area" class="console-text-area"></textarea>
                </div>
            </div>
        </div>
        

    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-python.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-c_cpp.min.js" integrity="sha512-0OZmNbvdTUAXjS/gE+K7ytccKZGonVz82m6zzAZ5kbByRTC0WlO2BL3BjSvpzn4mCnpr3gFSRmqUVPrzJLVEwg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-java.min.js" integrity="sha512-cBlD1MiRruu3tqWXrtxq3TrDDGF5NWpUQftHE6kS412z04C/nfl6DPMAJi2UJ70+X3eaCjiUdw7m1SaWPytZ2g==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/theme-twilight.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    <script>
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/twilight");
        editor.session.setMode("ace/mode/python");
    </script>
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
                    editor.setValue("import java.util.*;\nimport java.lang.*;\nimport java.io.*;\n\n/* Name of the class has to be \"Main\" only if the class is public. \nclass Ideone\n{\n	public static void main (String[] args) throws java.lang.Exception\n	{\n		// your code goes here\n	}\n}",0);
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
