import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLocationArrow,
	faEnvelopeOpen,
	faClock,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';

const ContactDetails = () => {
	return (
		<div className="ps-5">
			<h5>Contact Details</h5>
			<hr className="text-info w-50 p-1" />
			<p>
				<FontAwesomeIcon
					className="fa-1x footer-icon-color me-3"
					icon={faLocationArrow}
				/>
				Jl. Raya Kuta No.70, Kuta
			</p>
			<p>
				<FontAwesomeIcon
					className="fa-1x footer-icon-color me-3"
					icon={faEnvelopeOpen}
				/>
				support@mediclelife.com
			</p>
			<p>
				<FontAwesomeIcon
					className="fa-1x footer-icon-color me-3"
					icon={faClock}
				/>
				8 AM - 5 PM , Monday - Saturday
			</p>
			<p>
				<FontAwesomeIcon
					className="fa-1x footer-icon-color me-3"
					icon={faPhone}
				/>
				(+051) 424 4962
			</p>
		</div>
	);
};

export default ContactDetails;
