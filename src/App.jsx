

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
	return (
		<div  style={{marginTop:"100px"}}  className='container bg-white p-4  justify-content-center align-items-center shadow w-100'>
			<h1 style={{textAlign:"center",color:"violet"}}>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;
