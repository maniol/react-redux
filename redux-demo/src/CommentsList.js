import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments, id, addComment}) =>
	<div>
		<ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
		<button onClick={() => addComment(text)}>Add comment</button>
	</div>
export default CommentsList;