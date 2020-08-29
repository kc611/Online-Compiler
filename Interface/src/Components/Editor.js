import React, { Component } from 'react';
import Console from './Console';
import AceEditor from 'react-ace';
import { timers } from 'jquery';

class Editor extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div className="code-wrapper">
				<div className="code-editor">
					<div className="col" style={{ height: '100%', width: '100%' }}>
						<AceEditor mode={this.props.mode} theme="monokai" height="100%" width="100%" enableLiveAutocompletion="True" />
					</div>
				</div>

				<Console />
				
			</div>
		);
	}
}

export default Editor;