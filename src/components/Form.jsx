import React, {useState} from "react";

const Form = (props) => {

  const [name,setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("")
  }

  function handleChange(e){
    setName(e.target.value)
  }



  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1 className="m-2">What needs to be done?</h1>
        <input
        value={name}
          type="text"
          name="text"
          autoComplete="off"
          onChange={handleChange}
          className="m-2 p-1 rounded-md  border-2 border-black"
        />
        <div className="flex justify-center">
          <button
            className="border hover:bg-slate-400 w-1/2 rounded-md border-black m-2"
            type={"submit"}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
