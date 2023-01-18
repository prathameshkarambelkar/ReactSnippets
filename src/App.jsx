import { useState } from "react";
import Body from "./components/Body";
import FilterButton from "./components/FilterButton";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Todo from "./components/Todo";
import React from "react";
import { nanoid } from "nanoid";

function App(props) {

  function addTask(name){
    const newTask = { id: `todo-${nanoid()}`, name, completed: false  };
    setTasks([...tasks,newTask])
  }

  const [tasks,setTasks] = useState(props.task)

  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <>
      <div className="justify-between flex flex-col h-screen">
        <Header />
        <body>
          <div className="justify-center flex">
            <div className="justify-center w-1/2 flex p-2 border border-black rounded-md m-3">
              <div>
                <Form addTask={addTask} />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <FilterButton />
            <button className="border rounded-md p-2 hover:bg-slate-400 border-black m-2 ">
              Show Active Tasks
            </button>
            <button className="border rounded-md p-2 hover:bg-slate-400 border-black m-2 ">
              Show complete task
            </button>
          </div>
          <div className="flex justify-center ">
            <div className="m-2 border border-black rounded-md p-2  ">
              <h2 className="text-2xl p-2 m-2">3 Tasks Remaining</h2>
              <ul
                role="list"
                aria-labelledby="list-heading"
                className="m-2 p-2 flex-col"
              >
                {taskList}
                {/* <Todo name="Eat" completed={true} id="todo-0" />
              <Todo name="Sleep" completed={false} id="todo-1" />
              <Todo name="Repeat" completed={false} id="todo-2" /> */}
              </ul>
            </div>
          </div>
        </body>
        <Footer />
      </div>
    </>
  );
}

export default App;
