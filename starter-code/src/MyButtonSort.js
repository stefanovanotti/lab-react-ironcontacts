import React from "react";

const MyButton = props => {
  return (
    <React.Fragment>
      <button onClick={props.onclick}>{props.text}</button>
    </React.Fragment>
  );
};

export default MyButton;
