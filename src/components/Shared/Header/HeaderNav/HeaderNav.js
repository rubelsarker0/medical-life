import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../../assets/images/logo-medicalife.png';
import './HeaderNav.css';

const HeaderNav = () => {
	const history = useHistory();
	const handleSignInClick = () => {
		history.push('/signin');
	};
	return (
		<>
			<Navbar expand="lg">
				<Container>
					<img className="img-fluid w-75 d-block d-lg-none" src={logo} alt="" />
					<Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto fw-bold mx-auto">
							<Link className="nav-link" to="/home">
								HOME
							</Link>
							<Link className="nav-link" to="/about">
								ABOUT US
							</Link>
							<Link className="nav-link" to="/services">
								SERVICES
							</Link>
							<Link className="nav-link" to="/contact">
								CONTACT
							</Link>
							<div className="social-media">
								<a href="">
									<FontAwesomeIcon
										className="fa-2x me-3 text-primary"
										icon={faFacebook}
									/>
								</a>
								<a href="">
									<FontAwesomeIcon
										className="fa-2x me-3 text-info"
										icon={faTwitter}
									/>
								</a>
								<a href="">
									<FontAwesomeIcon
										className="fa-2x me-3 text-danger"
										icon={faYoutube}
									/>
								</a>
								<a href="">
									<FontAwesomeIcon
										className="fa-2x text-warning"
										icon={faInstagram}
									/>
								</a>
								<Button
									onClick={handleSignInClick}
									variant="danger"
									className="rounded-pill px-5 fw-bold d-block d-lg-none mt-3"
								>
									<FontAwesomeIcon
										className="fa-1x me-3 text-white"
										icon={faLock}
									/>
									Log In
								</Button>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default HeaderNav;
