import React, { useState } from "react";

// ToDO:
// 2. Implement conditional rendering for the form and the success message
// 3. Implement a validation context with the validation logic, all forms can use the same context

const ContactUsForm = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		specialist: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errorFullName, setErrorFullName] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [errorSpecialist, setErrorSpecialist] = useState("");
	const [validForm, setValidForm] = useState(null);
	const [validFullName, setValidFullName] = useState(null);
	const [validEmail, setValidEmail] = useState(null);
	const [validSpecialist, setValidSpecialist] = useState(null);

	const validateFullName = (value) => {
		console.log("validating full name");
		// setValidFullName(true);
		const newError = [];
		if (!value || value.trim() === "") {
			setValidFullName(false);
			newError.push(`The name field is required.`);
		} else if (!/^(?=.*\s)[a-zA-Z\s]{2,}$/.test(value)) {
			setValidFullName(false);
			newError.push(`The name can only contain letters.`);
		}
		// setError(newError);
		setValidFullName(newError.length === 0);
		console.log(newError);
		console.log(validFullName);
		console.log("validating full name done");
		return newError;
	};

	const validateEmail = (value) => {
		console.log("validating email");
		const newError = [];
		if (!value || value.trim() === "") {
			setValidEmail(false);
			newError.push("The email field is required.");
		} else if (
			!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/.test(value)
		) {
			setValidEmail(false);
			newError.push("Must be a valid email address");
		}
		// setError(newError);
		setValidEmail(newError.length === 0);

		console.log(newError);
		console.log(validEmail);
		console.log("validating email done");
		console.log(validEmail);
		return newError;
	};

	const validateSpecialist = (value) => {
		// setValidSpecialist(true);
		console.log("validating specialist");
		const newError = [];
		if (value.trim() === "") {
			setValidSpecialist(false);
			newError.push("A speciality must be chosen.");
		}

		// setError(newError);
		setValidSpecialist(newError.length === 0);
		console.log(newError);
		console.log(validSpecialist);
		console.log("validating specialist done");
		return newError;
	};

	const validateForm = (formData) => {
		console.log("validating form");

		//I got help from chat GPT to find a way to loop throught the form data so that all the fields were validated.
		//This part of the code was copied directly form the chat:
		// "for (let [name, value] of Object.entries(formData))"

		for (let [name, value] of Object.entries(formData)) {
			console.log(name, value);
			switch (name) {
				case "fullName":
					console.log("switching to fullName");
					setErrorFullName(validateFullName(value));
					break;
				case "email":
					console.log("switching to email");
					setErrorEmail(validateEmail(value));
					break;
				case "specialist":
					console.log("switching to specialist");
					setErrorSpecialist(validateSpecialist(value));
					break;
				default:
					break;
			}
		}
		errorFullName.length === 0 &&
		errorEmail.length === 0 &&
		errorSpecialist.length === 0
			? setValidForm(true)
			: setValidForm(false);
	};

	const handleChange = (e) => {
		console.log("handling a change");
		console.log(e.target);
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		switch (name) {
			case "fullName":
				setErrorFullName(validateFullName(value));
				break;
			case "email":
				setErrorEmail(validateEmail(value));
				break;
			case "specialist":
				setErrorSpecialist(validateSpecialist(value));
				break;
			default:
				break;
		}
		console.log("CHANGE HANDLED");
		console.log(formData);
		console.log(errorEmail);
		console.log(errorFullName);
		console.log(errorSpecialist);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("handling a submit");
		validateForm(formData);

		// Each field should be validated separately
		if (!validForm) {
			alert(`Couldn't submit the form. Please check the fields.`);
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
			setIsSubmitted(true);
			alert("Your request has been submitted successfully."); // This alert should be replaced when conditional rendering is implemented
		} else {
			alert("Something went wrong. Please try again later.");
		}
	};

	const handleReturnForm = () => {
		setIsSubmitted(false);
		setValidFullName(null);
		setValidEmail(null);
		setValidSpecialist(null);
		setErrorFullName("");
		setErrorEmail("");
		setErrorSpecialist("");
		setFormData({ fullName: "", email: "", specialist: "" });
	};
	return (
		<form className='contact-form' onSubmit={handleSubmit} noValidate>
			<h3 className='headline'>
				{isSubmitted
					? "Thank you for reaching out!"
					: "Get Online Consultation"}
			</h3>

			{isSubmitted ? (
				<>
					<div className='submitted-text'>
						<p> We will be in contact as soon as possible.</p>
						<p className='small-print'>
							Please refrain from sending several request about the same topic.{" "}
						</p>
					</div>

					<button
						className='btn btn-primary shape-rectangular understood-btn'
						onClick={handleReturnForm}
					>
						Understood
					</button>
				</>
			) : (
				<>
					<div className='form-group'>
						<label htmlFor='name'>Full name</label>
						<input
							name='fullName'
							type='text'
							className={`form-control ${
								validFullName === null
									? ""
									: validFullName
									? "valid"
									: "invalid"
							}`}
							placeholder='John Doe'
							value={formData.name}
							onChange={handleChange}
						/>
						<span
							className={`form-message ${
								validFullName === null
									? ""
									: validFullName
									? "valid"
									: "invalid"
							}`}
						>
							{validFullName === null ? null : validFullName ? (
								<i className='fa fa-solid fa-circle-check'> </i>
							) : (
								<i className='fa fa-solid fa-circle-exclamation'> </i>
							)}
							{errorFullName && errorFullName}
						</span>
					</div>

					<div className='form-group'>
						<label htmlFor='email'>Email address</label>
						<input
							name='email'
							type='email'
							className={`form-control ${
								validEmail === null ? "" : validEmail ? "valid" : "invalid"
							}`}
							placeholder='email@domain.com'
							value={formData.email}
							onChange={handleChange}
						/>
						<span
							className={`form-message ${
								validEmail === null ? "" : validEmail ? "valid" : "invalid"
							}`}
						>
							{validEmail === null ? null : validEmail ? (
								<i className='fa-solid fa-circle-check'> </i>
							) : (
								<i className='fa-solid fa-circle-exclamation'> </i>
							)}
							{errorEmail && errorEmail}
						</span>
					</div>

					<div className='form-group'>
						<label htmlFor='specialist'>Specialist</label>
						<select
							name='specialist'
							className={`form-control ${
								validSpecialist === null
									? ""
									: validSpecialist
									? "valid"
									: "invalid"
							}`}
							placeholder='Select one'
							onChange={handleChange}
							value={formData.specialist}
						>
							<option value=''>Select one</option>
							<option value='support'>Support</option>
							<option value='sales'>Sales</option>
							<option value='pancakes'>Pancakes</option>
						</select>
						<span
							className={`form-message ${
								validSpecialist === null
									? ""
									: validSpecialist
									? "valid"
									: "invalid"
							}`}
						>
							{validSpecialist === null ? null : validSpecialist ? (
								<i className='fa-solid fa-circle-check'> </i>
							) : (
								<i className='fa-solid fa-circle-exclamation'> </i>
							)}
							{errorSpecialist && errorSpecialist}
						</span>
					</div>

					<button
						className='btn btn-primary shape-rectangular btn-shadow-out'
						id='btn-submit-contact'
						type='submit'
					>
						Make an appointment
					</button>
				</>
			)}
		</form>
	);
};

export default ContactUsForm;
