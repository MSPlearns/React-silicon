import React from "react";
import ContactUsCard from "../others/ContactUsCard";
import ContactUsForm from "../others/ContactUsForm";
import "./contact-us.css";

const Contact = () => {
	return (
		<section id='contact'>
			<div className='container'>
				<div className='wrapper'>
					<h1 className='headline'>Contact Us</h1>
					<div className='content'>
						<ContactUsCard
							icon='fa-regular fa-envelope'
							title='Email us'
							text='Please feel free to drop us a line. We will respond as soon as possible.'
							linkText='Leave a message'
							link='#'
						/>
						<ContactUsCard
							icon='fa-solid fa-users-medical'
							title='Careers'
							text='Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.'
							linkText='Send an application'
							link='#'
						/>
					</div>
				</div>
				<ContactUsForm />
			</div>
		</section>
	);
};

export default Contact;
