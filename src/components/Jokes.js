import React from 'react';

export default function Jokes(props) {
	return (
		<div>
			<h3>{props.Setup}</h3>
			<p>{props.Punchline}</p>
			<hr />
		</div>
	)
	
}