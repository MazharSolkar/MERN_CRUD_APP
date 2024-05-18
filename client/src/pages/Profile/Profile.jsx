import './profile.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Profile = () => {
	return (
		<div className='container'>
			<Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
				<Card.Body>
					<Row>
						<div className='col'>
							<div className='card-rofile-status d-flex justify-content-center'>
								<img src='/man.jpeg' alt='' />
							</div>
						</div>
					</Row>
					<div className='text-center'>
						<h3>Mazhar Solkar</h3>
						<h4>
							<i className='fa-solid fa-envelope email'></i>&nbsp;
							<span>m@gmail.com</span>
						</h4>
						<h4>
							<i className='fa-solid fa-mobile-screen-button mobile'></i>&nbsp;
							<span>1234567890</span>
						</h4>
						<h4>
							<i className='fa-solid fa-person-half-dress'></i>&nbsp;
							<span>Male</span>
						</h4>
						<h4>
							<i className='fa-solid fa-location-dot location'></i>&nbsp;
							<span>Mumbai</span>
						</h4>
						<h4>Status: Active</h4>
						<h5>
							<i className='fa-regular fa-calendar-days status calender'></i>
							&nbsp;Date Created: 12/10/2023
						</h5>
						<h5>
							<i className='fa-regular fa-calendar-days calender'></i>&nbsp;Date
							Updated: 12/10/2023
						</h5>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Profile;
