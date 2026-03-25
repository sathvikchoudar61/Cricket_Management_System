import React from "react"; 
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Dashboard from "./pages/Dashboard";

import Match from "./pages/Match";

import Players from "./pages/player/Players";
import PlayerById from "./pages/player/PlayerById";
import Addplayer from "./pages/player/Addplayer";

import Addcoach from "./pages/coach/Addcoach";
import Coaches from "./pages/coach/Coaches";
import CoachById from "./pages/coach/CoachById"

function App() {
    return (
        <div>
             <Toaster position="top-right" reverseOrder={false} />
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />

                    //matches
                    <Route path="/match" element={<Match />} />
                    <Route path="/match/:id" element={<Match />} />
                    <Route path="/all-matches" element={<Match />} />

                    //player
                    <Route path="/players" element={<Players />} />
                    <Route path="/player/:id" element={<PlayerById />} />
                    <Route path="/add-player" element={<Addplayer />} />

                    //coaches
                    <Route path="/coaches" element={<Coaches />} />
                    <Route path="/coach/:id" element={<CoachById />} />
                    <Route path="/add-coach" element={<Addcoach />} />






                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
