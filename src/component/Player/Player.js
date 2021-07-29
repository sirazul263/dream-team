import React from "react";
import "./Player.css";

const Player = (props) => {
  const { name, country, club, img, position, value, salary, goals } =
    props.player;
  const display = () => {};
  return (
    <div className="player">
      <div className="card" id="cards" style={{ width: `16rem` }}>
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <br />
          <div id="playersInfo">
            <p className="card-text">
              {" "}
              <strong> Country:</strong> {country}
            </p>
            <p className="card-text">
              <strong> Club: </strong>
              {club}
            </p>
            <p className="card-text">
              <strong> Position:</strong> {position}
            </p>
            <p className="card-text">
              <strong>Market Value:</strong> ${value}M
            </p>
            <p className="card-text">
              {" "}
              <strong>Salary:</strong> ${salary}
            </p>
            <p className="card-text">
              {" "}
              <strong>Goals this season:</strong> {goals}
            </p>
          </div>

          <button className="btn btn-danger" onClick={display()}>
            Details
          </button>
          <button
            className="btn  btn-success button"
            onClick={() => props.addPlayer(props.player)}
          >
            Add Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
