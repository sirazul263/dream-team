import React from "react";
import "./Details.css";
const Details = (props) => {
  let value = 0;
  let balance = 800;
  for (let i = 0; i < props.add.length; i++) {
    value += props.add[i].value;
  }
  balance -= value;
  return (
    <div>
      <h5>Team Summary</h5>
      <hr />
      <p>
        {" "}
        <strong>Total Player:</strong> {props.add.length}
      </p>
      <div className="add-summary">
        <div className="players">
          <ol>
            {props.add.map((player) => (
              <li>{player.name}</li>
            ))}
            <hr />
            <p>
              {" "}
              <strong className="text-black">Total value</strong>{" "}
            </p>
            <p>
              {" "}
              <strong className="text-red">Balance </strong>{" "}
            </p>
          </ol>
        </div>
        <div className="values">
          <ul>
            {props.add.map((player) => (
              <li>${player.value}M</li>
            ))}
            <hr />
            <p>
              <strong>${value}M</strong>
            </p>
            <p>
              <strong>${balance}M</strong>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
