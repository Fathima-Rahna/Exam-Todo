import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);
		}
	};

	return (
		<div >
			<form onSubmit={onSubmit} className='form-inline mt-3 mb-3 '>
				<label className='sr-only'>Name</label>
				<div className='d-flex w-25'>
					<input
						type='text'
						className='form-control mb-2 mr-sm-2  '
						placeholder='Add todo...'
						value={value}
						onChange={(event) => setValue(event.target.value)}
					></input>
		
					<button type='submit' className='btn btn-success ms-2 rounded'>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddTodoForm;
