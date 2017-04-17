import React,{Component} from 'react';

class CommentInput extends React.Component {
	constructor(props){
		super(props);
		this.state = {title: '', username: ""};
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChangeName(e){
		this.setState({username: e.target.value});
	}

	handleChangeTitle(e){
		this.setState({title : e.target.value});
	}

	handleAdd(e){
		e.preventDefault();
		var username = this.state.username.trim();
	    var title = this.state.title.trim();
	    if (!title || !username) {
	      return;
	    }
		this.props.onSubmit({username: username, title: title});
		this.setState({title: '', username: ''});
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="请输入用户名" value={this.state.username} onChange={this.handleChangeName} /><br />
				<textarea onChange={this.handleChangeTitle} value={this.state.title}></textarea><br />
				<input type="button" value="提交按钮" onClick={this.handleAdd}/>
			</div>
		)
	}
}

export default CommentInput;