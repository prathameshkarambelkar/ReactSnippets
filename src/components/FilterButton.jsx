import React from "react";

const FilterButton = () => {
  return (
    <>
      <button
        aria-pressed={true}
        className="border rounded-md p-2  hover:bg-slate-400 border-black m-2 "
      >
        Show all Tasks
      </button>
    </>
  );
};

export default FilterButton;
