import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import { Spiner } from '../../components';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './edit.css';

const Edit = () => {
	const [showSpin, setShowSpin] = useState(true);
	const [inputData, setInputData] = useState({
		fname: '',
		lname: '',
		email: '',
		mobile: '',
		gender: '',
		location: '',
	});

	console.log(inputData);

	const [status, setStatus] = useState('Active');
	const [image, setImage] = useState('');
	const [preview, setPreview] = useState('');

	// status options
	const options = [
		{ value: 'Active', label: 'Active' },
		{ value: 'InActive', label: 'InActive' },
	];

	// setInput Value
	const setInputValue = (e) => {
		const { name, value } = e.target;
		setInputData({ ...inputData, [name]: value });
	};

	// set status
	const setStatusValue = (e) => {
		setStatus(e.value);
	};

	// set profile
	const setProfile = (e) => {
		setImage(e.target.files[0]);
	};

	// sumit userData
	const submitUserData = (e) => {
		e.preventDefault();

		// Destructuring inputData object after submit
		const { fname, lname, email, mobile, gender, location } = inputData;

		// form validation
		if (fname === '') {
			toast.error('Firt Name is Required !');
		} else if (lname) {
			toast.error('Last Name is Required');
		} else if (email) {
			toast.error('Email is Required !');
		} else if (!email.includes('@')) {
			toast.error('Enter Valid Email !');
		} else if (mobile === '') {
			toast.error('Mobile Number is Required !');
		} else if (mobile.length > 10) {
			toast.error('Invalid Mobile Number');
		} else if (gender === '') {
			toast.error('Gender is Required !');
		} else if (status === '') {
			toast.error('Status is Required !');
		} else if (image === '') {
			toast.error('Image is Required !');
		} else if (location === '') {
			toast.error('Location is Required !');
		} else {
			toast.success('Registration Successfully done !');
		}
	};

	useEffect(() => {
		if (image) {
			setPreview(URL.createObjectURL(image));
		}
		setTimeout(() => setShowSpin(false), 1200);
	}, [image]);
	return (
		<>
			{showSpin ? (
				<Spiner />
			) : (
				<div className='container'>
					<h2 className='text-center mt-1'>Edit Your Details</h2>
					<Card className='text-center mt-3 p-3'>
						<div className='profile_div text_center'>
							<img src={preview ? preview : `/man.jpeg`} alt='' />
						</div>
					</Card>
					<Form className='container'>
						<Row>
							<Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type='text'
									name='fname'
									value={inputData.fname}
									placeholder='Enter FirstName'
									onChange={setInputValue}
								/>
							</Form.Group>

							<Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type='text'
									name='lname'
									value={inputData.lname}
									placeholder='Enter LastName'
									onChange={setInputValue}
								/>
							</Form.Group>

							<Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type='email'
									name='email'
									value={inputData.email}
									placeholder='Enter Email'
									onChange={setInputValue}
								/>
							</Form.Group>

							<Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
								<Form.Label>Mobile</Form.Label>
								<Form.Control
									type='text'
									name='mobile'
									value={inputData.mobile}
									placeholder='Enter Mobile Number'
									onChange={setInputValue}
								/>
							</Form.Group>

							<Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
								<Form.Label>Select Your Gender</Form.Label>
								<Form.Check
									type={'radio'}
									label={'Male'}
									name={'gender'}
									value={'Male'}
									onChange={setInputValue}
								/>
								<Form.Check
									type={'radio'}
									label={'Female'}
									name={'gender'}
									value={'Female'}
									onChange={setInputValue}
								/>
							</Form.Group>

							<Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
								<Form.Label>Select Your Status</Form.Label>
								<Select
									options={options}
									value={status}
									onChange={setStatusValue}
								/>
							</Form.Group>

							<Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
								<Form.Label>Select Your Profile</Form.Label>
								<Form.Control
									type='file'
									name='user_profile'
									placeholder='Select Your Profile Picture'
									onChange={setProfile}
								/>
							</Form.Group>

							<Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
								<Form.Label>Select Your Location</Form.Label>
								<Form.Control
									type='text'
									name='location'
									value={inputData.location}
									placeholder='Enter Your Location'
									onChange={setInputValue}
								/>
							</Form.Group>

							<Button variant='primary' type='submit' onClick={submitUserData}>
								Submit
							</Button>
						</Row>
					</Form>
				</div>
			)}
		</>
	);
};

export default Edit;
