import './table.css';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';

const Tables = () => {
	return (
		<div className='container'>
			<Row>
				<div className='col mt-0'>
					<Card className='shadow'>
						<Table className='align-align-items-center' responsive='sm'>
							<thead>
								<tr className='table-dark'>
									<th>ID</th>
									<th>FullName</th>
									<th>Email</th>
									<th>Gender</th>
									<th>Status</th>
									<th>Profile</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>mazhar solkar</td>
									<td>m@gmail.com</td>
									<td>M</td>
									<td className='d-flex align-items-center'>
										<Dropdown calssName='text-center'>
											<Dropdown.Toggle
												className='dropdown_btn'
												id='dropdown-basic'>
												<Badge bg='primary'>
													Active <i class='fa-solid fa-angle-down'></i>
												</Badge>
											</Dropdown.Toggle>

											<Dropdown.Menu>
												<Dropdown.Item>Active</Dropdown.Item>
												<Dropdown.Item>Inactive</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</td>
									<td className='img_parent'>
										<img src='/man.jpeg' alt='' />
									</td>
									<td>
										<Dropdown calssName='text-center'>
											<Dropdown.Toggle
												variant='light'
												className='action'
												id='dropdown-basic'>
												<i class='fa-solid fa-ellipsis-vertical' />
											</Dropdown.Toggle>

											<Dropdown.Menu>
												<Dropdown.Item>
													<i
														class='fa-solid fa-eye'
														style={{ color: 'green' }}
													/>
													&nbsp;
													<span>View</span>
												</Dropdown.Item>
												<Dropdown.Item>
													<i
														class='fa-solid fa-pen-to-square'
														style={{ color: 'blue' }}
													/>
													&nbsp;
													<span>Edit</span>
												</Dropdown.Item>
												<Dropdown.Item>
													<i
														class='fa-solid fa-trash-can'
														style={{ color: 'red' }}
													/>
													&nbsp;
													<span>Delete</span>
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</td>
								</tr>
							</tbody>
						</Table>
					</Card>
				</div>
			</Row>
		</div>
	);
};

export default Tables;
