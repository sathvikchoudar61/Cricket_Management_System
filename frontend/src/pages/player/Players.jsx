import React, { useEffect, useState } from "react";
import { getAllPlayerData } from "../../utils/player";
import DynamicTable from "../../components/DynamicTable";
import { Link } from "react-router-dom";

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    const data = await getAllPlayerData("/all");
    setPlayers(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <DynamicTable data={players} type="player" /> 
    </div>
  );
}

export default Players;