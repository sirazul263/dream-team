import React, { useState } from "react";
import Details from "../Details/Details";
import Player from "../Player/Player";
import "./Body.css";
import data from "../../data/data.json";

const Body = () => {
  const [player, setPlayer] = useState(data);
  const [add, setAdd] = useState([]);
  const addPlayer = (player) => {
    const isAvailable = add.includes(player);
    console.log(isAvailable);
    if (!isAvailable) {
      const newPlayer = [...add, player];
      setAdd(newPlayer);
    } else {
      alert("Already added");
    }
  };
  return (
    <div className="container">
      <div className="body">
        <div className="player">
          {player.map((player) => (
            <Player player={player} addPlayer={addPlayer}></Player>
          ))}
        </div>
        <div className="details">
          <Details add={add}></Details>
        </div>
      </div>
    </div>
  );
};

export default Body;
