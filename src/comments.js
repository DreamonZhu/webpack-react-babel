import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CommentTitle from './CommentLists.js';
import CommentInput from './CommentInput.js';

class Comments extends React.Component {
	constructor(props){
		super(props);
		var data = this.props.data;
		this.state ={data: data};
		this.handleInputSubmit = this.handleInputSubmit.bind(this);
	}

	handleInputSubmit(comment){
		this.state.data.push(comment);
		this.setState({});
	}

	render() {
		return (
			<div>
				<CommentTitle data={this.state.data} />
				<CommentInput onSubmit={this.handleInputSubmit}/>
			</div>
		)
	}
}

var data = [{
	title : 'hello world',username : 'coder'
},{
	title : '你好',username : '程序员'
}];

ReactDOM.render(
	<Comments data={data} />,
	document.getElementById('app-container')
)