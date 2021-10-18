import React from 'react';
import { Container, Row } from 'react-bootstrap';
import doctor1 from '../../../assets/images/doctor1.jpg';
import doctor2 from '../../../assets/images/doctor2.jpg';
import doctor3 from '../../../assets/images/doctor3.jpg';
import Doctor from '../Doctor/Doctor';

const MeetDoctors = () => {
	return (
		<section className="py-5">
			<Container>
				<div className="text-center">
					<h1 className="regular-text-color">Meet With Our Doctor</h1>
					<p className="text-secondary w-75 mx-auto">
						Since its founding Brivona has been providing its patients with the
						full medical care, encompassing outpatients services, is neurology,
						laboratory, imaging diagnostics and more.
					</p>
				</div>
				<Row lg={3} xs={1} className="g-4 py-5 mb-5">
					<Doctor
						name="Dr. Ryley Mueller"
						passion="Cardiology"
						doctorImage={doctor1}
					></Doctor>
					<Doctor
						name="Dr. Elisa Hodges"
						passion="Dentist"
						doctorImage={doctor2}
					></Doctor>
					<Doctor
						name="Dr. Carlo Hilton"
						passion="General Doctor"
						doctorImage={doctor3}
					></Doctor>
				</Row>
			</Container>
		</section>
	);
};

export default MeetDoctors;
