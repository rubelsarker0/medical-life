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
import userIcon from '../../../../assets/images/user-img-icon.png';
import './HeaderNav.css';
import useAuth from '../../../../hooks/useAuth';

const HeaderNav = () => {
	const history = useHistory();
	const { user, logOut } = useAuth();

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
							<Link
								exact
								activeClassName="text-info"
								className="nav-link"
								to="/home"
							>
								HOME
							</Link>
							<Link
								exact
								activeClassName="text-info"
								className="nav-link"
								to="/services"
							>
								SERVICES
							</Link>
							<Link
								exact
								activeClassName="text-info"
								className="nav-link"
								to="/about"
							>
								ABOUT US
							</Link>
							<Link
								exact
								activeClassName="text-info"
								className="nav-link"
								to="/contact"
							>
								CONTACT
							</Link>
							<div className={user ? 'mx-auto' : 'ms-auto'}>
								<div className="social-media">
									<a href="">
										<FontAwesomeIcon
											className="fa-2x me-3 footer-icon-color"
											icon={faFacebook}
										/>
									</a>
									<a href="">
										<FontAwesomeIcon
											className="fa-2x me-3 footer-icon-color"
											icon={faTwitter}
										/>
									</a>
									<a href="">
										<FontAwesomeIcon
											className="fa-2x me-3 footer-icon-color"
											icon={faYoutube}
										/>
									</a>
									<a href="">
										<FontAwesomeIcon
											className="fa-2x footer-icon-color"
											icon={faInstagram}
										/>
									</a>
									{user ? (
										<Button
											onClick={logOut}
											variant="danger"
											className="rounded-pill d-block d-lg-none px-5 fw-bold"
										>
											Sign out
										</Button>
									) : (
										<Button
											onClick={handleSignInClick}
											variant="primary"
											className="rounded-pill d-block d-lg-none px-5 fw-bold"
										>
											<FontAwesomeIcon
												className="fa-1x me-3 text-white"
												icon={faLock}
											/>
											Sign in
										</Button>
									)}
								</div>
							</div>
						</Nav>
						{user && (
							<div className="d-flex ms-auto align-items-center">
								<h5 className="fw-bold regular-text-color me-3">
									{user.displayName}
								</h5>
								<img
									width="50px"
									className="rounded-circle"
									src={user.photoURL ? user.photoURL : userIcon}
									alt=""
								/>
							</div>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default HeaderNav;
