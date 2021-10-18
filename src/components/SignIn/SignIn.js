import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Col, Button, Container, Form, Row } from 'react-bootstrap';
import signInImg from '../../assets/images/signin-img.svg';
import './SignIn.css';
import { Link } from 'react-router-dom';
const SignIn = () => {
	const handleEmailSignIn = () => {};
	return (
		<section
			style={{ minHeight: '650px' }}
			className="bg-transparent d-flex align-items-center"
		>
			<Container>
				<Row lg={2} xs={1} className="g-4">
					<Col>
						<div className="rounded rounded-3 shadow-lg bg-light p-5">
							<h2 className="text-navy mb-3 text-center">
								<FontAwesomeIcon
									className="fa-1x regular-text-color me-3"
									icon={faLock}
								/>
								Log In
							</h2>
							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Check me out" />
								</Form.Group>
								<Button
									className="w-100 regular-btn rounded-pill"
									type="submit"
								>
									Submit
								</Button>
							</Form>
							<div className="divider text-center my-3 fs-5">
								<span className="divider-content">Or</span>
							</div>
							<Row lg={2} xs={1} className="g-5">
								<Col>
									<Button variant="danger" className="w-100 text-white fw-bold">
										Google Sign In
									</Button>
								</Col>
								<Col>
									<Button variant="primary" className="w-100 fw-bold">
										Facebook Sign In
									</Button>
								</Col>
							</Row>
							<div className="text-center mt-3">
								Don't have an account?{' '}
								<Link to="/signup" className="fst-italic">
									SignUp
								</Link>
							</div>
						</div>
					</Col>
					<Col>
						<div>
							<img className="w-100" src={signInImg} alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default SignIn;
