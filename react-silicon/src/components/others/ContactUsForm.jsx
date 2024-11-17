import React from "react";

const ContactUsForm = () => {
	return (
		<form className='contact-form'>
			<h3 className='headline'>Get Online Consultation</h3>

			<div className='form-group'>
				<label htmlFor='name'>Full name</label>
				<input
					id='name'
					type='text'
					className='form-control'
					placeholder='John Doe'
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='email'>Email address</label>
				<input
					id='email'
					type='text'
					className='form-control'
					placeholder='email@domain.com'
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='speciality'>Specialist</label>
				<select
					id='speciality'
					className='form-control'
					placeholder='Select one'
				>
					<option value=''>Select one</option>
					<option value='support'>Support</option>
					<option value='sales'>Sales</option>
					<option value='pancakes'>Pancakes</option>
				</select>
			</div>

			<button
				className='btn btn-primary shape-rectangular btn-shadow-out'
				id='btn-submit-contact'
				type='submit'
			>
				Make an appointment
			</button>
		</form>
	);
};

export default ContactUsForm;
