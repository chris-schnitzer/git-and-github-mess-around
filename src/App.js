import React from 'react';
import Jokes from './components/Jokes.js';
import jokesData from './components/jokesData.js';

export default function App() {
	const jokeElements = jokesData.map(joke => {
		return (
			<Jokes Setup={joke.Setup} Punchline={joke.Punchline} />
		) 
	})
	return (
		<div>
			{jokeElements}
		</div>
	)
}

		