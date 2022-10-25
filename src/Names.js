import React from "react";

const Names = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.onChangeFN}
        placeholder="Enter your first name..."
      />
      <input
        type="text"
        onChange={props.onChangeLN}
        placeholder="Enter your last name..."
      />
      <button onClick={props.onClickFN}>ClearFN</button>
      <button onClick={props.onClickLN}>ClearLN</button>
    </div>
  );
};

export default Names;
