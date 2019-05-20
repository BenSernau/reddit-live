import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Reddit extends React.Component
{
	state = {
		posts: []
	};

	componentDidMount()
	{
		axios.get('https://www.reddit.com/r/reactjs.json').then(res => {
			const posts = res.data.data.children.map(obj => obj.data);
			this.setState({posts});
		});
	}

	render()
	{
		return (
			<div>
				<h1>/r/reactjs</h1>
				<ul>
					{this.state.posts.map(post => {
						return <li key = {post.id}>{post.title}</li>;
					})}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<Reddit />, document.getElementById('root'));
