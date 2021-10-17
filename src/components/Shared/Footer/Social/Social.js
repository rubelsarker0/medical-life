import React from 'react';
import { Col } from 'react-bootstrap';
import footerLogo from '../../../../assets/images/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const Social = () => {
	return (
		<Col>
			<img className="img-fluid" src={footerLogo} alt="" />
			<p className="text-white my-3 text-format">
				High-quality health care helps prevent diseases and improve quality of
				life. Healthy People 2030 focuses on improving health care quality and
				making sure all people get the health care services they need.
			</p>
			<div>
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
			</div>
		</Col>
	);
};

export default Social;
