import React from "react";
import AddressCard from "../others/AddressCard";
import SocialMediaBar from "../others/SocialMediaBar";
import map from "../../assets/images/map.svg";
import "./find-us.css";

const FindUs = () => {
	return (
		<section id='find-us'>
			<div className='container'>
				<img className='map' src={map} alt='' />
				<div className='content'>
					<AddressCard
						center='Headquarters'
						address='4517 Washington Ave. Manchester, Kentucky 39495'
						phone='(406) 555-0120'
					/>
					<AddressCard
						center='Support Office'
						address='2464 Royal Ln. Mesa,New Jersey 45463'
						phone='(406) 544-0123'
					/>
					<SocialMediaBar />
				</div>
			</div>
		</section>
	);
};

export default FindUs;
