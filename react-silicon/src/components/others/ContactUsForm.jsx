import React, { useState } from "react";

// ToDO:
// 1. Fix the form validation & submission (atm form is submitting as long as the last modified field is valid)
// 2. Implement conditional rendering for the form and the success message
// 3. Implement a validation context with the validation logic, all forms can use the same context

const ContactUsForm = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		specialist: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");
	const [isValid, setIsValid] = useState(null);

	const validateForm = (input, value) => {
		setIsValid(true);
		const newError = [];

		if (!value || value.trim() === "") {
			setIsValid(false);
			newError.push(`The ${input} field is required.`);
		}

		switch (input) {
			case "name":
				if (!/^(?=.*\s)[a-zA-Z\s]{2,}$/.test(value)) {
					setIsValid(false);
					newError.push(`The ${input} field must contain only letters.`);
				}
				break;
			case "email":
				if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/.test(value)) {
					setIsValid(false);
					newError.push(`The ${input} field must be a valid email address.`);
				}
				break;
		}

		setError(newError);
		return isValid;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		validateForm(name, value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Each field should be validated separately
		if (
			!validateForm("fullName", formData.name) ||
			!validateForm("email", formData.email) ||
			!validateForm("specialist", formData.specialist)
		) {
			alert(`Couldn't submit the form. ${error.join(", ")}`);
			return;
		}

		const res = await fetch(
			`https://win24-assignment.azurewebsites.net/api/forms/contact`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			}
		);

		if (res.ok) {
			setSubmitted(true);
			alert("Your request has been submitted successfully."); // This alert should be replaced when conditional rendering is implemented
		} else {
			alert("Something went wrong. Please try again later.");
		}
	};

	//  // This function needs to be implemented when conditional rendering is implemented
	//  const handleReturnForm = () => {
	// 		setSubmitted(false);
	// 		setIsValid(null);
	// 		setFormData({ fullName: "", email: "", specialist: "" });
	// 	};

	return (
		<form className='contact-form' onSubmit={handleSubmit} noValidate>
			<h3 className='headline'>Get Online Consultation</h3>

			<div className='form-group'>
				<label htmlFor='name'>Full name</label>
				<input
					name='fullName'
					type='text'
					className={`form-control ${isValid ? "valid" : "invalid"}`}
					placeholder='John Doe'
					value={formData.name}
					onChange={handleChange}
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='email'>Email address</label>
				<input
					name='email'
					type='email'
					className={`form-control ${isValid ? "valid" : "invalid"}`}
					placeholder='email@domain.com'
					value={formData.email}
					onChange={handleChange}
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='specialist'>Specialist</label>
				<select
					name='specialist'
					className={`form-control ${isValid ? "valid" : "invalid"}`}
					placeholder='Select one'
					onChange={handleChange}
					value={formData.specialist}
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
