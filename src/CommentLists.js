import React,{Component} from 'react';

class CommentTitle extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.data.map((list, index) => {
					return (
						<div key={index}>
							<h2>{list.title}</h2>
							<p>{list.username}</p>
						</div>
					);
				})}
			</div>
		)
	}
}

export default CommentTitle;