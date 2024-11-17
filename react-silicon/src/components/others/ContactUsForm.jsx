import React, { useEffect, useState } from "react";

// ToDO:
// Could a validation context with the validation logic be useful, so all forms can use the same context for their validation? i.ex. email field etc

const ContactUsForm = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		specialist: "",
	});

	const [touchedFields, setTouchedFields] = useState({
		fullName: false,
		email: false,
		specialist: false,
	});

	const [error, setError] = useState({
		fullName: "",
		email: "",
		specialist: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const [valid, setValid] = useState({
		fullName: null,
		email: null,
		specialist: null,
		form: false,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));

		setTouchedFields((prevState) => ({
			...prevState,
			[name]: true,
		}));
	};

	const validateFullName = (value) => {
		const newError = [];

		if (!value || value.trim() === "") {
			newError.push("The name field is required. ");
		} else if (value.trim().length <= 2) {
			newError.push("The name must be longer than 2 characters.");
		} else if (/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]$/.test(value)) {
			newError.push("The name can only contain letters.");
		} else if (!/^\S+\s+\S+/.test(value)) {
			newError.push("The name must contain at least two words.");
		}

		setError((prevError) => ({
			...prevError,
			fullName: newError.join(" "),
		}));

		setValid((prevValid) => ({
			...prevValid,
			fullName: newError.length === 0,
		}));
	};

	const validateEmail = (value) => {
		const newError = [];

		if (!value || value.trim() === "") {
			newError.push("The email field is required.");
		} else if (
			!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/.test(value)
		) {
			newError.push("Must be a valid email address");
		}

		setError((prevError) => ({
			...prevError,
			email: newError.join(" "),
		}));
		setValid((prevValid) => ({
			...prevValid,
			email: newError.length === 0,
		}));
	};

	const validateSpecialist = (value) => {
		if (!value || value.trim() === "") {
			setError((prevError) => ({
				...prevError,
				specialist: "Please select a specialist.",
			}));
			setValid((prevValid) => ({
				...prevValid,
				specialist: false,
			}));
		} else {
			setError((prevError) => ({
				...prevError,
				specialist: "",
			}));
			setValid((prevValid) => ({
				...prevValid,
				specialist: true,
			}));
		}
	};

	useEffect(() => {
		validateFullName(formData.fullName);
	}, [formData.fullName]);

	useEffect(() => {
		validateEmail(formData.email);
	}, [formData.email]);

	useEffect(() => {
		validateSpecialist(formData.specialist);
	}, [formData.specialist]);

	useEffect(() => {
		setValid((prevValid) => ({
			...prevValid,
			form: valid.fullName && valid.email && valid.specialist,
		}));
	}, [valid.fullName, valid.email, valid.specialist]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!valid.form) {
			alert(
				` Unable to submitt form. Please fill out the form correctly before submitting.`
			);
			return;
		}

		try {
			console.log("Sending contact form...", formData);
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
				console.log("Contact form submitted successfully");
				setIsSubmitted(true);
			} else {
				throw new Error(res.statusText);
			}
		} catch (error) {
			alert("Something went wrong. Please try again later. Error:", error);
		}
	};

	const handleReturnForm = () => {
		setIsSubmitted(false);
		setTouchedFields({ fullName: false, email: false, specialist: false });
		setValid({ fullName: null, email: null, specialist: null, form: false });
		setError({ fullName: "", email: "", specialist: "" });
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
								touchedFields.fullName
									? valid.fullName
										? "valid"
										: "invalid"
									: ""
							}`}
							placeholder='John Doe'
							value={formData.name}
							onChange={handleChange}
						/>
						<span
							className={`form-message 
								${touchedFields.fullName ? (valid.fullName ? "valid" : "invalid") : ""}`}
						>
							{touchedFields.fullName ? (
								valid.fullName ? (
									<i className='fa fa-solid fa-circle-check'> </i>
								) : (
									<i className='fa fa-solid fa-circle-exclamation'> </i>
								)
							) : (
								""
							)}
							{error.fullName && error.fullName}
						</span>
					</div>

					<div className='form-group'>
						<label htmlFor='email'>Email address</label>
						<input
							name='email'
							type='email'
							className={`form-control ${
								touchedFields.email ? (valid.email ? "valid" : "invalid") : ""
							}`}
							placeholder='email@domain.com'
							value={formData.email}
							onChange={handleChange}
						/>
						<span
							className={`form-message 
								${touchedFields.email ? (valid.email ? "valid" : "invalid") : ""}`}
						>
							{touchedFields.email ? (
								valid.email ? (
									<i className='fa fa-solid fa-circle-check'> </i>
								) : (
									<i className='fa fa-solid fa-circle-exclamation'> </i>
								)
							) : (
								""
							)}
							{error.email && error.email}
						</span>
					</div>

					<div className='form-group'>
						<label htmlFor='specialist'>Specialist</label>
						<select
							name='specialist'
							className={`form-control ${
								touchedFields.specialist
									? valid.specialist
										? "valid"
										: "invalid"
									: ""
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
							className={`form-message 
								${touchedFields.specialist ? (valid.specialist ? "valid" : "invalid") : ""}`}
						>
							{touchedFields.specialist ? (
								valid.specialist ? (
									<i className='fa fa-solid fa-circle-check'> </i>
								) : (
									<i className='fa fa-solid fa-circle-exclamation'> </i>
								)
							) : (
								""
							)}
							{error.specialist && error.specialist}
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
