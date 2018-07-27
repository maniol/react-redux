import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import {addComment} from './actions'

 const mapStateToProps = state => ({
	comments: state.comments
});

const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text)),
});

export connect(mapStateToProps)(CommentsList);
export connect(null, mapDispatchToProps)(Comment);