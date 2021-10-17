import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelopeOpenText,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../../../assets/images/logo-medicalife.png';
import './TopHeader.css';
import { useHistory } from 'react-router';

const TopHeader = () => {
	const history = useHistory();
	const handleSignInClick = () => {
		history.push('/signin');
	};
	return (
		<Row>
			<Col lg={3} className="d-none d-lg-block border-generic">
				<img className="img-fluid w-75" src={logo} alt="" />
			</Col>
			<Col className="d-none d-lg-block border-generic" lg={3}>
				<div className="d-flex align-items-center justify-content-end">
					<div>
						<FontAwesomeIcon
							className="email-icon fa-2x me-3"
							icon={faEnvelopeOpenText}
						/>
					</div>
					<div className="">
						<h6>
							<span className="">Mail Us</span>
						</h6>
						<h6>
							<span className="text-secondary">support@mediclelife.com</span>
						</h6>
					</div>
				</div>
			</Col>
			<Col className="d-none d-lg-block border-generic" lg={3}>
				<div className="d-flex align-items-center justify-content-end">
					<div>
						<FontAwesomeIcon
							className="email-icon fa-2x me-3"
							icon={faPhoneAlt}
						/>
					</div>
					<div className="">
						<h6>
							<span className="">Contact Us</span>
						</h6>
						<h6>
							<span className="text-secondary">(+051) 424 4962</span>
						</h6>
					</div>
				</div>
			</Col>
			<Col className="d-none d-lg-block my-auto" lg={3}>
				<div className="d-flex align-items- justify-content-end">
					<Button
						className=" btn-login rounded-pill px-5 fw-bold"
						onClick={handleSignInClick}
					>
						Sign In
					</Button>
				</div>
			</Col>
			<hr className="bottom-border d-none d-lg-block my-auto" />
		</Row>
	);
};

export default TopHeader;
