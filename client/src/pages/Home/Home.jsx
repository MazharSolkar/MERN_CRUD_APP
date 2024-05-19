import './home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { Tables, Spiner } from '../../components';
import { useEffect, useState } from 'react';

const Home = () => {
	const [showSpin, setShowSpin] = useState(true);
	const navigate = useNavigate();

	const addUser = () => {
		navigate('/register');
	};

	useEffect(() => {
		setTimeout(() => setShowSpin(false), 1200);
	}, []);
	return (
		<div className='container'>
			<div className='main_div'>
				{/* Search add btn */}
				<div className='search_add mt-4 d-flex justify-content-between'>
					<div className='search col-lg-4'>
						<Form className='d-flex'>
							<Form.Control
								type='search'
								placeholder='Search'
								className='me-2'
								arial-label='Search'
							/>
							<Button variant='success'>Search</Button>
						</Form>
					</div>
					<div className='add_btn' onClick={addUser}>
						<Button variant='primary'>
							<i class='fa-solid fa-plus'></i> Add User
						</Button>
					</div>
				</div>
				{/* export, gender, status */}

				<div className='fiter_div mt-5 d-flex justify-content-between flex-wrap'>
					<div className='export_csv'>
						<Button className='export_btn'>Export to CSV</Button>
					</div>
					<div className='filter_gender'>
						<div className='filter'>
							<h3>Filter By Gender</h3>
							<div className='gender d-flex justify-content-around'>
								<Form.Check
									type={'radio'}
									label={'All'}
									name={'gender'}
									value={'All'}
								/>
								<Form.Check
									type={'radio'}
									label={'Male'}
									name={'gender'}
									value={'Male'}
								/>
								<Form.Check
									type={'radio'}
									label={'Female'}
									name={'gender'}
									value={'Female'}
								/>
							</div>
						</div>
					</div>
					{/* Sort By Value */}
					<div className='fiter_newold'>
						<h3>Sort By Value</h3>
						<Dropdown calssName='text-center'>
							<Dropdown.Toggle className='dropdown_btn' id='dropdown-basic'>
								<i className='fa-solid fa-sort' />
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item>New</Dropdown.Item>
								<Dropdown.Item>Old</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>

					{/* Filter by Status */}
					<div className='filter_status'>
						<div className='status'>
							<h3>Filter By Status</h3>
							<di className='status_radio d-flex justify-content-around flex-wrap'>
								<Form.Check
									type={'radio'}
									label={'All'}
									name={'gender'}
									value={'All'}
								/>
								<Form.Check
									type={'radio'}
									label={'Active'}
									name={'Status'}
									value={'Active'}
								/>
								<Form.Check
									type={'radio'}
									label={'Inactive'}
									name={'Status'}
									value={'Inactive'}
								/>
							</di>
						</div>
					</div>
				</div>
			</div>
			{showSpin ? <Spiner /> : <Tables />}
		</div>
	);
};

export default Home;
