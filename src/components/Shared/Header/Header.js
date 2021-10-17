import React from 'react';
import { Container } from 'react-bootstrap';
import TopHeader from './TopHeader/TopHeader';

const Header = () => {
	return (
		<header>
			<Container>
				<TopHeader></TopHeader>
			</Container>
		</header>
	);
};

export default Header;
