import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlayerDataId } from "../../utils/player";
import Card from "../../components/Card";
import tableConfig from "../../data/tableConfig.json";

function PlayerById({ type = "player" }) {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getPlayerDataId(`/${id}`);
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  const columns = tableConfig[type] || [];

  const sections = Object.values(
    columns.reduce((acc, col) => {
      if (!col.section || col.key === "view") return acc;

      if (!acc[col.section]) {
        acc[col.section] = {
          title: col.section,
          fields: []
        };
      }

      acc[col.section].fields.push(col);
      return acc;
    }, {})
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      {data ? (
        <div className="max-w-7xl mx-auto bg-white rounded-xl border shadow-sm p-5 space-y-5">

          {/* HEADER */}
          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                {data.name}
              </h1>
              <p className="text-sm text-gray-500 capitalize">
                {data.role} • {data.country}
              </p>
            </div>

            {data.jerseyNo && (
              <div className="text-center px-3 py-1 rounded-md bg-blue-50 border border-blue-200">
                <p className="text-[10px] text-gray-500">Jersey</p>
                <p className="text-sm font-bold text-blue-600">
                  #{data.jerseyNo}
                </p>
              </div>
            )}
          </div>

          {/* CONTENT */}
          <div className="space-y-4">
            {sections.map((section, idx) => (
              <div key={idx}>

                {/* SECTION TITLE (subtle) */}
                <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  {section.title}
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {section.fields
                    .filter(
                      (field) =>
                        field.key !== "name" &&
                        field.key !== "jerseyNo" &&
                        field.key !== "country" &&
                        field.key !== "role" 
                    )
                    .map((field, i) => (
                      <Card
                        key={i}
                        label={field.label}
                        value={data[field.key]}
                        highlight={field.highlight}
                      />
                    ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[60vh]">
          <p className="text-gray-500 animate-pulse">
            Loading...
          </p>
        </div>
      )}
    </div>
  );
}

export default PlayerById;