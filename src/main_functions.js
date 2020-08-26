

// var input = "";
// var output = "";
// var mode = "python3";
// // 0 = input mode and 1 = output mode
// var currmode = 0;
// function console_input_mode() {
//     console = document.getElementById("console-text-area");
//     if(currmode == 1){
//         output = console.value;
//         console.value = input;
//         currmode = 0;
//         console.removeAttribute('readonly')
//     }
// }
// function console_output_mode() {
//     console = document.getElementById("console-text-area");
//     if(currmode == 0){
//         console.removeAttribute('readonly');
//         input = console.value;
//         console.value = output;
//         currmode = 1;
//         console.readOnly = "true";
//     }
// }

// function submit_code(){
//     var editor = ace.edit("editor");
//     var code = editor.getValue();
//     var token = '{{csrf_token}}';
//     const data = {
//         code:code,
//         input:input,
//         mode:mode
//     }
//     $.ajax({
//         url:'https://onlinecompile.herokuapp.com/send',
//         type:"POST",
//         headers: { "X-CSRFToken": token },
//         data:JSON.stringify(data),
//         dataType: "json",
//         success: function(result){
//             output = result.output;
//             console_output_mode();
//         },
//         error:function(error){
//             console.log('Error ${error}');
//         }
//     })

// }

// function setmode(lang){
//     var main_butt = document.getElementById("lang-selector-button");
//     switch(lang){
//         case "python3":
//             mode = "python3";
//             editor.setValue("# Write code here\nprint(\"Hello World\")",0);
//             editor.session.setMode("ace/mode/python");
//             main_butt.innerHTML = 'Python 3';
//             break;
//         case "java":
//             mode = "java";
//             editor.setValue("import java.util.*;\nimport java.lang.*;\nimport java.io.*;\n\n/* Name of the class has to be \"Main\" only if the class is public. */\nclass Ideone\n{\n	public static void main (String[] args) throws java.lang.Exception\n	{\n		// your code goes here\n	}\n}",0);
//             editor.session.setMode("ace/mode/java");
//             main_butt.innerHTML = 'Java';
//             break;
//         case "c":
//             mode = "c";
//             editor.setValue("#include <stdio.h>\n\nint main(void) \{\n// your code goes here\nreturn 0;\}",0);
//             editor.session.setMode("ace/mode/c_cpp");
//             main_butt.innerHTML = 'C';
//             break;
//         case "cpp":
//             mode = "cpp";
//             editor.setValue("#include <iostream>\nusing namespace std;\n\nint main()\{\n// your code goes here\nreturn 0;\n}",0);
//             editor.session.setMode("ace/mode/c_cpp");
//             main_butt.innerHTML = 'C++';
//             break;
//     }
// }

