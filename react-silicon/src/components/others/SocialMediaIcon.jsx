import React from "react";
import { Link } from "react-router-dom";

const SocialMediaIcon = ({ icon, link }) => {
	return (
		<Link
			to={link}
			target='_blank'
			className='icon icon-background shape-square plain-link'
		>
			<span className={`text-gradient ${icon}`}></span>
		</Link>
	);
};

export default SocialMediaIcon;
