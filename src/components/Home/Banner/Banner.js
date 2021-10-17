import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import topBannerImg from '../../../assets/images/top-banner-img.svg';
import './Banner.css';

const Banner = () => {
	const history = useHistory();
	const handleContact = () => {
		history.push('/contact');
	};
	return (
		<section className="top-banner py-5">
			<Container>
				<Row lg={2} xs={1} className="g-4">
					<Col>
						<div className="bg-light rounded p-5 h-auto">
							<h1 className="text-navy mb-5">
								Best Medical & Healthcare Service For Your Family
							</h1>
							<p className="text-secondary mb-5">
								High-quality health care helps prevent diseases and improve
								quality of life. Healthy People 2030 focuses on improving health
								care quality and making sure all people get the health care
								services they need.
							</p>
							<Button
								onClick={handleContact}
								variant="primary"
								className="rounded-pill px-5"
								size="lg"
							>
								Contact Us
							</Button>
						</div>
					</Col>
					<Col>
						<img className="w-100" src={topBannerImg} alt="" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
