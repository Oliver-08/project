import React from 'react';

const Todo = ({text , todo , todos, setTodos}) => {

  const deleteHandler = () => {
      setTodos(todos.filter((el) => el.id !== todo.id));
  };



    
  const comleteHandler = () => {
      setTodos(todos.map(item => {
          if(item.id === todo.id){
              return{
                  ...item, comleted: !item.completed
              }
          }
          return item;
      }))
  }
      


    
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.comleted ? "completed" : ''}`}>{text}</li>
            <button onClick={comleteHandler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash.btn'><i className='fas fa-trash'></i></button>


        </div>
    );
};

export default Todo;

