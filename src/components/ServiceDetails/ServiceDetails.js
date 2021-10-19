import React from 'react';
import ServiceDetailsCover from './ServiceDetailsCover/ServiceDetailsCover';
import { Container, Row } from 'react-bootstrap';
import ServiceDetailsCard from './ServiceDetailsCard/ServiceDetailsCard';
import useService from '../../hooks/useService';
import { useParams } from 'react-router';

const ServiceDetails = () => {
	const { id } = useParams();
	const [service] = useService(id);

	return (
		<>
			<ServiceDetailsCover></ServiceDetailsCover>
			<section className="service-details py-5">
				<Container>
					<Row lg={1} xs={1} className="g-4 py-5">
						<ServiceDetailsCard service={service}></ServiceDetailsCard>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default ServiceDetails;
