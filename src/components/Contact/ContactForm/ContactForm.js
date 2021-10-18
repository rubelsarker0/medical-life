import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
	return (
		<Col>
			<div className="rounded rounded-3 shadow-lg bg-light p-3 py-5 p-lg-4 py-xl-5">
				<h2 className="regular-text-color mb-3 text-center">
					Send us a message
				</h2>
				<Form>
					<Form.Group className="mb-3" controlId="Name">
						<Form.Label className="regular-text-color">Name</Form.Label>
						<Form.Control type="email" placeholder="Enter Name" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="subject">
						<Form.Label className="regular-text-color">Subject</Form.Label>
						<Form.Control type="email" placeholder="Enter Subject" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="regular-text-color">
							Email address
						</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>
					<Button className="regular-btn rounded-pill w-100" type="submit">
						Send Message
					</Button>
				</Form>
			</div>
		</Col>
	);
};

export default ContactForm;
