import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import data from "../../data/options.json";
import toast from "react-hot-toast";

import { AddCoachData } from "../../utils/coach";

function Addcoach() {
  const countries = data.countries;
  const roles = data.coach_roles;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name || !age || !gender || !country || !role){
      toast.error("Fill all fields");
        setError("Missing Feilds")
        return
    }
    setError("")

    const coachdata = {
      name,
      age,
      gender,
      country,
      role
    };

    try{
      await AddCoachData("/add",coachdata);
      console.log(coachdata);
      toast.success("coach added successfully 🎉");
      setName("");
      setAge("");
      setGender("");
      setCountry("");
      setRole("");
    }catch (error){
      toast.error("Failed to add coach");
      console.error(error);
    }

  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex w-[800px]">

        <div className="w-1/2 bg-blue-600 flex items-center justify-center p-6">
          <img 
            src="/coach.png" 
            alt="coach" 
            className="w-64"
          />
        </div>

        <form 
          onSubmit={handleSubmit}
          className="w-1/2 p-8 flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-center">Add Coach</h2>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <input 
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(""); }}
            placeholder="Coach Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input 
            type="number"
            value={age}
            onChange={(e) => { setAge(e.target.value); setError(""); }}
            placeholder="Age"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div>
            <span className="mr-3 font-medium">Gender:</span>

            <label className="mr-3">
              <input 
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={(e) => { setGender(e.target.value); setError(""); }}
              /> Male
            </label>

            <label>
              <input 
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={(e) => { setGender(e.target.value); setError(""); }}
              /> Female
            </label>
          </div>

          <select 
            value={country}
            onChange={(e) => { setCountry(e.target.value); setError(""); }}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Country</option>
            {countries.map((c, index) => (
              <option key={index} value={c.toLowerCase()}>
                {c}
              </option>
            ))}
          </select>

          <select 
            value={role}
            onChange={(e) => { setRole(e.target.value); setError(""); }}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Role</option>
            {roles.map((r, index) => (
              <option key={index} value={r.toLowerCase().replace(/\s+/g, "-")}>
                {r}
              </option>
            ))}
          </select>

          <button 
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
   
}

export default Addcoach;