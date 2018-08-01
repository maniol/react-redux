import React, { Component} from 'react';


class AddComment extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	addComment(){
		this.props.addComment(this.state.value);
		this.setState({
			value: ''
		})
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	render(){
		return (
		<div>
			<label>
				Add comment:
			</label>
			<textarea value={this.state.value} onChange={(e) => this.handleChange(e)}/>
			<button onClick={this.addComment.bind(this)}>Submit</button>
		</div>
		)
	}
}

export default AddComment;