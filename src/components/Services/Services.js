import React from 'react';
import useServices from '../../hooks/useServices';
import HomeServices from '../Home/HomeServices/HomeServices';
import HealthCare from './HealthCare/HealthCare';
import ServiceCover from './ServiceCover/ServiceCover';

const Services = () => {
	const [services] = useServices();

	return (
		<div>
			<ServiceCover></ServiceCover>
			<HealthCare></HealthCare>
			<HomeServices services={services}></HomeServices>
		</div>
	);
};

export default Services;
