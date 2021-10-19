import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Col, Button, Container, Form, Row } from 'react-bootstrap';
import signupImg from '../../assets/images/signup-img.svg';
import './SighUp.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState({});
	const {
		handleGoogleSignIn,
		handleGithubSignIn,
		handleEmailPasswordRegister,
		setUserName,
		emailVerification,
	} = useAuth();

	const location = useLocation();
	const history = useHistory();

	const validateRegistration = (name, password) => {
		const errorMessage = {};
		if (name.length < 5 || name.length > 15) {
			errorMessage.name = 'Name Must be between 5 to 15 characters';
		}
		if (password.length < 6 || password.length > 14) {
			errorMessage.password = 'Password Must be between 5 to 14 characters';
		}
		return errorMessage;
	};

	const googleSignIn = () => {
		handleGoogleSignIn()
			.then((result) => {
				history.push(location.state?.from || '/home');
			})
			.catch((error) => console.log(error.message));
	};

	const gitHubSignIn = () => {
		handleGithubSignIn().then((result) => {
			history.push(location.state?.from || '/home');
		});
	};

	const handleEmailSignup = (event) => {
		event.preventDefault();
		const errorMessage = validateRegistration(name, password);

		if (errorMessage.name || errorMessage.password) {
			setError(errorMessage);
			return;
		}

		handleEmailPasswordRegister(email, password, name)
			.then((result) => {
				setUserName(name);
				emailVerification();
				history.push(location.state?.from || '/home');
				setError({});
			})
			.catch((e) => {
				setError({ email: e.message });
			});
	};

	return (
		<section
			style={{ minHeight: '650px' }}
			className="bg-transparent d-flex py-3 align-items-center"
		>
			<Container>
				<Row lg={2} xs={1} className="g-3">
					<Col>
						<div className="rounded rounded-3 shadow-lg bg-light p-5">
							<h2 className="text-navy mb-3 text-center">
								<FontAwesomeIcon
									className="fa-1x regular-text-color me-3"
									icon={faLock}
								/>
								Signup
							</h2>
							<Form onSubmit={handleEmailSignup}>
								<Form.Group className="mb-3" controlId="formName">
									<Form.Label>Your Name</Form.Label>
									<Form.Control
										onChange={(event) => setName(event.target.value)}
										type="text"
										placeholder="Enter Your Name"
										required
									/>
									{error.name && (
										<Form.Text id="formName" className="text-danger">
											{error.name}
										</Form.Text>
									)}
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										onChange={(event) => setEmail(event.target.value)}
										type="text"
										placeholder="Enter email"
										required
									/>
									{error.email && (
										<Form.Text id="formName" className="text-danger">
											{error.email}
										</Form.Text>
									)}
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										onChange={(event) => setPassword(event.target.value)}
										type="password"
										placeholder="Password"
										required
									/>
									{error.password && (
										<Form.Text id="formName" className="text-danger">
											{error.password}
										</Form.Text>
									)}
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Remember me" />
								</Form.Group>
								<Button className="btn-login rounded-pill w-100" type="submit">
									Signup
								</Button>
							</Form>
							<div className="divider text-center my-3 fs-5">
								<span className="divider-content">Or</span>
							</div>
							<Row lg={2} xs={1} className="g-3">
								<Col>
									<Button
										onClick={googleSignIn}
										variant="danger"
										className="w-100 text-white fw-bold"
									>
										<FontAwesomeIcon
											className="fa-1x text-white me-2"
											icon={faGoogle}
										/>
										Google Sign In
									</Button>
								</Col>
								<Col>
									<Button
										onClick={gitHubSignIn}
										variant="primary"
										className="w-100 fw-bold"
									>
										<FontAwesomeIcon
											className="fa-1x text-white me-2"
											icon={faGithub}
										/>
										GitHub Sign In
									</Button>
								</Col>
							</Row>
							<div className="text-center  mt-3">
								Already have an account?{' '}
								<Link to="/signin" className="fst-italic">
									Log In
								</Link>
							</div>
						</div>
					</Col>
					<Col>
						<div className="m-auto">
							<img className="w-100" src={signupImg} alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default SignUp;
