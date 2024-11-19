import React from "react";
function Expressions() {
  let count = 5;
  let name = {
    firstName: "John",
    LastName: "Doe",
  };
  return (
    <React.Fragment>
      <h5>Evaluating Expressions</h5>
      <h1> {" Content to be displayed "} </h1>
      <h1> {"Expression to be evaluated " + (2 + 2)} </h1>
      <p>{count}</p>
      <p>{count * count}</p>
      <h5>Accessing Object</h5>

      <h4>{"My Name is " + name.firstName + " " + name.LastName}</h4>
    </React.Fragment>
  );
}
export default Expressions;
