import React from 'react';

export default const Toast = ({ message }) => {
	return (
		<div className={`toast ${message.severity}`}>
			<h4>{message.title}</h4>
			<p>{message.description}</p>
		</div>
	);
};