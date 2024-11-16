import React from "react";

const ContactFormGroup = () => {
	return (
		<div className='form-group'>
			<label htmlFor='name'>Full name</label>
			<input
				id='name'
				type='text'
				className='form-control'
				placeholder='John Doe'
			/>
		</div>
	);
};

export default ContactFormGroup;
