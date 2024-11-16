import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaBar = () => {
	return (
		<div className='icon-bar'>
			<SocialMediaIcon
				icon='fa-brands fa-facebook'
				link='https://www.facebook.com'
			/>
			<SocialMediaIcon icon='fa-twitter' link='https://www.twitter.com' />
			<SocialMediaIcon icon='fa-instagram' link='https://www.instagram.com' />
			<SocialMediaIcon
				icon='fa-brands fa-linkedin'
				link='https://www.linkedin.com'
			/>
		</div>
	);
};

export default SocialMediaBar;
