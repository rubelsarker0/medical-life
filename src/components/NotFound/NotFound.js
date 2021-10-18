import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import notFoundImg from '../../assets/images/not-found-img.svg';
const NotFound = () => {
	const history = useHistory();
	const handleGoBack = () => {
		history.goBack();
	};
	return (
		<Container>
			<div className="text-center py-5 mt-4">
				<img className="w-50" src={notFoundImg} alt="" />
				<h1 className="regular-text-color">Page Not Found!</h1>
				<Button
					onClick={handleGoBack}
					className="btn-login rounded-pill px-5 fw-bold 5 mt-3"
				>
					Go back
				</Button>
			</div>
		</Container>
	);
};

export default NotFound;
