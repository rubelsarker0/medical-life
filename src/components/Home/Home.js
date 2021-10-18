import React from 'react';
import Banner from './Banner/Banner';
import HomeServices from './HomeServices/HomeServices';
import useServices from '../../hooks/useServices';

const Home = () => {
	const [services] = useServices();

	return (
		<div>
			<Banner></Banner>
			<HomeServices services={services.slice(0, 6)}></HomeServices>
		</div>
	);
};

export default Home;
