import React from "react";

const ContactUsCard = ({ icon, title, text, linkText, link }) => {
	return (
		<div className='contact-card'>
			<div className='icon icon-background shape-round'>
				<i className={`${icon} `}></i>
			</div>
			<div className='content'>
				<h2 className='card-header'>{title}</h2>
				<p className='card-text desktop tablet'>{text}</p>
				<a className='link' href={link}>
					<span>{linkText}</span>
					<span className='fa fa-sharp fa-solid fa-arrow-right'></span>
				</a>
			</div>
		</div>
	);
};

export default ContactUsCard;
