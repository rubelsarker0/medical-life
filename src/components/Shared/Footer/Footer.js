import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Social from './Social/Social';
import './Footer.css';
import ContactDetails from './ContactDetails/ContactDetails';
import Appointment from './Appointment/Appointment';

const Footer = () => {
	return (
		<footer className="footer-bg text-white py-5">
			<Container>
				<Row lg={3} xs={1} className="g-5">
					<Social></Social>
					<ContactDetails></ContactDetails>
					<Appointment></Appointment>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
