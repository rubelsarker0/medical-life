import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderNav from './HeaderNav/HeaderNav';
import TopHeader from './TopHeader/TopHeader';

const Header = () => {
	return (
		<header>
			<Container>
				<TopHeader></TopHeader>
				<HeaderNav></HeaderNav>
			</Container>
		</header>
	);
};

export default Header;
