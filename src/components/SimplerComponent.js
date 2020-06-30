// Code SimplerComponent Here
import React from "react";

// export default SimplerComponent = () => <div>I am just happy</div>;
export default function SimplerComponent(props) {
  return (
    <div onClick={() => props.handleClick("YAY x 1000")}>I am just happy</div>
  );
}
