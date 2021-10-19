import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceDetailsCard = (props) => {
	const { serviceUrl, serviceName, descriptions } = props.service
		? props.service
		: {};

	return (
		<Col className="col">
			<div className="card details-card">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={serviceUrl} className="card-img" alt="" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{serviceName}</h5>
							<p className="card-text text-format ">
								{descriptions} Medical Life Practice provides a comprehensive
								medical screening service - including - blood testing,
								Height/Weight/BMI checks, Blood pressure and 24 Hour Blood
								Pressure Monitoring, Lung Function Testing and Cervical Smear
								testing.The seasonal influenza vaccine is available in our
								practice. It is recommended for over 65's and all at risk groups
								including in pregnancy, and in patients with chronic health
								conditions including Asthma , Heart Disease, Diabetes, Obesity,
								and Epilepsy.We can provide a full travel vaccination service
								and advise on the correct vaccinations needed for your trip and
								give travel health advise for the region you are travelling to.
								All of our team are adept at helping patients through mental
								health complaints. We have a kind, caring and empathic approach
								and all of our consultations are respectful and confidential.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default ServiceDetailsCard;
