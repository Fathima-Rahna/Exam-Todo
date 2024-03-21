
export const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime(),
        text: text,
      },
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TODO',
      payload: id,
    };
  };
  

  