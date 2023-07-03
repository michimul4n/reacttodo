import React from 'react';


const Todo = ({description, done, onChangeTodo, onDeleteTodo, index }) => {
 return (
    <div>
      <div
        className={
          done 
            ? "flex justify-between items-center p-2 bg-green-600 text-white"
            : "flex justify-between items-center p-2 bg-red-500 text-white"
        }
      >
        <h1
          className="text-lg cursor-pointer"
          onClick={() => {
            onChangeTodo(index);
          }}  
        >
          {description}
        </h1>
        <button className="text-xl bg-slate-500 p-2 text-white" onClick={() => {onDeleteTodo(index)}}>Löschen</button>  
      </div>
    </div>
  );
};

export default Todo;