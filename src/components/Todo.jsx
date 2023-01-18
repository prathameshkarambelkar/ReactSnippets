import React from "react";

const Todo = (props) => {
    
  return (
    <div>
      <li className="border m-2 border-black rounded-md p-2 ">
        <div>
          <input type="checkbox" id={props.id} defaultChecked={props.completed} />
          <label htmlFor={props.id} className="pl-2 text-lg">{props.name}</label>
        </div>
        <div>
          <button  className="m-2 p-2 border rounded-md border-black">
            Edit {props.name}
          </button>
          <button className="m-2 p-2 border rounded-md border-black">
            Delete {props.name}
          </button>
        </div>
      </li>
    </div>
  );
};

export default Todo;
