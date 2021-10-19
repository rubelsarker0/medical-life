import React from 'react';
import { Col } from 'react-bootstrap';
import cardImage from '../../../assets/images/doctor1.jpg';

const ServiceDetailsCard = () => {
	return (
		<Col className="col">
			<div className="card details-card">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={cardImage} className="card-img" alt="" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default ServiceDetailsCard;
