import React from 'react';
import ServiceDetailsCover from './ServiceDetailsCover/ServiceDetailsCover';
import { Container, Row } from 'react-bootstrap';
import ServiceDetailsCard from './ServiceDetailsCard/ServiceDetailsCard';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
	const [services] = useServices();
	console.log(services);
	return (
		<>
			<ServiceDetailsCover></ServiceDetailsCover>
			<section className="service-details py-5">
				<Container>
					<Row lg={1} xs={1} className="g-4 py-5">
						<ServiceDetailsCard></ServiceDetailsCard>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default ServiceDetails;
