import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './HeaderNav.css';
import { Link } from 'react-router-dom';
const HeaderNav = () => {
	return (
		<>
			<Navbar expand="lg">
				<Container>
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
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default HeaderNav;
