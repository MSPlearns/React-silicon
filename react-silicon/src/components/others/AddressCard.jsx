import React from "react";

const AddressCard = ({ center, address, phone }) => {
	return (
		<div className='addressCard'>
			<h4>{center}</h4>
			<div className='wrapper'>
				<div className='item'>
					<i className='fa fa-sharp fa-solid fa-location-dot'></i>
					<span>{address}</span>
				</div>
				<div className='item'>
					<i className='fa fa-solid fa-phone'></i>
					<span>{phone}</span>
				</div>
				<div className='item'>
					<i className='fa fa-solid fa-clock'></i>
					<div className='wrapper'>
						<p className='weekdays'>
							<span className='bold'>Mon - Thu:</span> 9:00 am - 8:00 pm
						</p>
						<p className='weekends'>
							<span className='bold'>Fri - Sun:</span> 10:00 am - 4:00 pm
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddressCard;
