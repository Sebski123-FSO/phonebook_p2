import React from "react";

const Filter = (props) => {
  const onFilterInputChange = (event) => {
    props.setFilter(event.target.value);
  };

  return (
    <div>
      filter: <input onChange={onFilterInputChange} />
    </div>
  );
};

export default Filter;
