import React, { useEffect, useState } from "react";
import { getAllCoachData } from "../../utils/coach";
import DynamicTable from "../../components/DynamicTable";
import { Link } from "react-router-dom";

function Coaches() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    fetchCoaches();
  }, []);

  const fetchCoaches = async () => {
    const data = await getAllCoachData("/all");
    setCoaches(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <DynamicTable data={coaches} type="coach" /> 
    </div>
  );
}

export default Coaches;