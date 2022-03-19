import React from 'react';

function TextBox(props: {id: string, change: Function}) {
  return (
		<div>
			<label htmlFor={props.id}>
				Enter {props.id[0].toUpperCase() + props.id.substring(1) + " Sign: "}
			</label>
			<input
				type="text"
				name={props.id}
				id={props.id}
				onChange={(e) => props.change(e.target.value)}/>
		</div>
  );
}

export default TextBox;
