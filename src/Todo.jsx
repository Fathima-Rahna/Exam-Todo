// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { addTodo, deleteTodo, removeTodo } from './actions';


// export const Todo = () => {

//   const[inputData,setInputData]=useState('');

// const dispatch=useDispatch();

//   return (
//     <div className="container mt-5">
//     <div className="row justify-content-center align-items-center">
//       <div className="col-md-6">
//         <div className="card">
//           <div className="card-body">
//             <h1 className="card-title text-center mb-4">My Todoo App</h1>
//             <div className="input-group mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Add Todoo"
//                 value={inputData}
//                 onChange={(e)=>setInputData(e.target.value)}
               
//               />
//               <button onClick={()=>dispatch(addTodo(inputData))} className="btn btn-primary ms-2" type="button" >submit</button>
//             </div>
//             <ul className="list-group">
             
//                 <li  className="list-group-item d-flex justify-content-between align-items-center">
                 
//                   <button className="btn btn-danger btn-sm" >Delete</button>
//                 </li>
             
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Todo

// Todo.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './actions';

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputData.trim() !== '') {
      dispatch(addTodo(inputData));
      setInputData('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">My Todoo App</h1>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Todoo"
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                />
                <button onClick={handleAddTodo} className="btn btn-primary ms-2" type="button">Submit</button>
              </div>
              <ul className="list-group">
                {todos.map(todo => (
                  <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {todo.text}
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
