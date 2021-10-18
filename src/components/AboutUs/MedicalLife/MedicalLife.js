import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import aboutUsImg from '../../../assets/images/about-us.jpg';

const MedicaLife = () => {
	return (
		<section className="py-5">
			<Container>
				<Row lg={2} xs={1} className="g-4">
					<Col className="d-flex align-items-center ">
						<div className="m-auto">
							<img
								className="w-100 h-100 about-image d-block  rounded"
								src={aboutUsImg}
								alt=""
							/>
						</div>
					</Col>
					<Col className="d-flex align-items-center">
						<div className="rounded rounded-3 shadow-lg bg-light p-3 p-lg-4 p-xl-5">
							<div className="mb-4">
								<h5 className="text-black">About MedicaLife</h5>
								<h2 className="regular-text-color mb-4">
									We Provide Essential Services For Your Health Care
								</h2>
								<p className=" text-format text-secondary mb-5 text-align-justify">
									MedicaLife ospital offers a vast array of healthcare services
									with state-of-the-art diagnostic services, including a Women's
									Imaging Center, Heartburn Center, Cardiac Cath Lab,
									Neurodiagnostic Lab, MRI and CT Scan, to list just a few.
									Onslow
								</p>
							</div>
							<div>
								<h6 className="text-black my-4">
									<FontAwesomeIcon
										className="generic-color me-3"
										icon={faCheckCircle}
									/>
									24 Hours Emergency Assistance Call Us
								</h6>
								<h6 className="text-black my-4">
									<FontAwesomeIcon
										className="generic-color me-3"
										icon={faCheckCircle}
									/>
									We are committed to providing healthcare service
								</h6>
								<h6 className="text-black my-4">
									<FontAwesomeIcon
										className="generic-color me-3"
										icon={faCheckCircle}
									/>
									Standards of Treatment
								</h6>
								<h6 className="text-black my-4">
									<FontAwesomeIcon
										className="generic-color me-3"
										icon={faCheckCircle}
									/>
									Really know the true needs and expectations of patients
								</h6>
								<h6 className="text-black my-4">
									<FontAwesomeIcon
										className="generic-color me-3"
										icon={faCheckCircle}
									/>
									Quality of Care Services
								</h6>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default MedicaLife;
