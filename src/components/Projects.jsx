import React from "react";

// function List(props) {
//   const tech = props.technology;
//   const listItems = tech.map((stack) => <li>{stack}</li>);
//   return <ul>{listItems}</ul>;
// }

const Projects = (props) => {
  const tech = props.technology;
  const listItems = tech.map((stack) => <li>{stack}</li>);

  return (
    <div className="border-2 border-black rounded-md p-2 m-2 my-4  ">
      <img
        width={300}
        height={300}
        className="p-2 rounded-sm   "
        src="https://i.pinimg.com/474x/09/65/b9/0965b93f250920c1ee8a9a2b0ba0c291.jpg"
      />
      <h1 className="underline text-center">{props.name}</h1>
      <hr className="border-black m-2" />
      <h2 className="ml-2">Tech-Stack Used:</h2>
      <ul className="ml-5 list-disc">{listItems}</ul>
    </div>
  );
};

export default Projects;
