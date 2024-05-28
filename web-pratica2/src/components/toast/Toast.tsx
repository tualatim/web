import React from 'react';
import { create_component } from '../../utils/creators.js';

 const Toast = ({ message }) => {
	return (
		<div className={`toast ${message.severity}`}>
			<h4>{message.title}</h4>
			<p>{message.description}</p>
		</div>
	);
};

export default Toast;