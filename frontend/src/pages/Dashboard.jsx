import React from "react";

const cards = [
  { title: "New Match", link: "/match" },
  { title: "View All Matches", link: "/all-matches" },
  { title: "View All Players", link: "/players" },
  { title: "Add Player", link: "/add-player" },
  { title: "View All Coaches", link: "/coaches" },
  { title: "Add Coach", link: "/add-coach" },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <a href={card.link} key={index}>
            <div className="p-8 bg-gray-700 rounded-2xl shadow-md 
                            hover:shadow-xl hover:scale-105 
                            transition duration-300 cursor-pointer text-center">
              
              <h2 className="text-xl font-semibold text-white">
                {card.title}
              </h2>

            </div>
          </a>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;