import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-bootstrap';

const Appointment = () => {
	return (
		<Col>
			<h5>Make Appointment</h5>
			<hr className="w-50 text-primary p-1" />
			<div className="footer-appointment-color rounded py-3 px-2 text-white d-flex align-items-center w-75">
				<FontAwesomeIcon
					className="fa-2x footer-icon-color ms-3 me-3"
					icon={faPhoneAlt}
				/>
				<div>
					<h5>Call Us </h5>
					<h5>(+051) 424 4962</h5>
				</div>
			</div>
			<p className="text-white mt-4">
				High-quality health care helps prevent diseases and improve quality of
				life.Healthy People 2030 focuses on improving health care
			</p>
		</Col>
	);
};

export default Appointment;
