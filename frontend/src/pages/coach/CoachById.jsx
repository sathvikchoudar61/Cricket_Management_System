import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoachDataId } from "../../utils/coach";
import tableConfig from "../../data/tableConfig.json";

function CoachById({ type = "coach" }) {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getCoachDataId(`/${id}`);
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
        <div className="max-w-5xl mx-auto space-y-6">

          {/* HEADER */}
          <div className="bg-white rounded-xl border shadow-sm p-6 space-y-3">
            <h1 className="text-2xl font-bold text-gray-800">
              {data.name}
            </h1>

            <div className="flex gap-3 flex-wrap">
              <div className="px-4 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold">
                {data.role}
              </div>

              <div className="px-4 py-1 rounded-full bg-gray-100 border text-gray-700 text-sm font-semibold">
                {data.country}
              </div>
            </div>
          </div>

          {/* SECTIONS */}
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border shadow-sm overflow-hidden"
            >

              {/* SECTION HEADER */}
              <div className="px-5 py-2 bg-blue-50 border-b border-blue-100">
                <h2 className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                  {section.title}
                </h2>
              </div>

              {/* DETAILS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {section.fields
                  .filter(
                    (field) =>
                      field.key !== "name" &&
                      field.key !== "role" &&
                      field.key !== "country"
                  )
                  .map((field, i) => (
                    <div key={i}>
                      <p className="text-xs text-gray-500 uppercase mb-1">
                        {field.label}
                      </p>

                      <p
                        className={`text-sm font-semibold ${
                          field.highlight
                            ? "text-blue-600"
                            : "text-gray-800"
                        }`}
                      >
                        {data[field.key] ?? "-"}
                      </p>
                    </div>
                  ))}
              </div>

            </div>
          ))}

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

export default CoachById;