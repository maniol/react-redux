import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer'
import AddCommentContainer from './AddCommentContainer'

const App = () => {
	return (
		<div className="App">
		  <CommentsListContainer />
		  <AddCommentContainer />
		</div>
	);
};

export default App;
