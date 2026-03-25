import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import tableConfig from "../data/tableConfig.json";

function DynamicTable({ data = [], type = "player" }) {
  const allColumns = tableConfig[type] || [];

  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [visibleCols, setVisibleCols] = useState(
    allColumns.map((col) => col.key)
  );

  const processedData = useMemo(() => {
    let filtered = data;

    if (search) {
      filtered = data.filter((item) =>
        visibleCols.some((key) =>
          String(item[key] ?? "")
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
    }

    if (sortKey && sortKey !== "view") {
      filtered = [...filtered].sort((a, b) => {
        const valA = a[sortKey] ?? "";
        const valB = b[sortKey] ?? "";

        if (!isNaN(valA) && !isNaN(valB)) {
          return sortOrder === "asc" ? valA - valB : valB - valA;
        }

        return sortOrder === "asc"
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      });
    }

    return filtered;
  }, [data, search, sortKey, sortOrder, visibleCols]);

  const toggleColumn = (key) => {
    setVisibleCols((prev) =>
      prev.includes(key)
        ? prev.filter((k) => k !== key)
        : [...prev, key]
    );
  };

  const toggleColumns = allColumns.filter((col) => col.key !== "view");

  const columns = allColumns.filter((col) =>
    visibleCols.includes(col.key)
  );

  const handleSort = (key) => {
    if (key === "view") return;

    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4">

      <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
        <h1 className="text-4xl font-bold uppercase text-gray-800">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>

        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        {toggleColumns.map((col) => (
          <button
            key={col.key}
            onClick={() => toggleColumn(col.key)}
            className={`px-2 py-1 text-xs rounded ${
              visibleCols.includes(col.key)
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {col.label}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse text-sm">

          <thead className="bg-blue-500 text-white text-xs uppercase sticky top-0">
            <tr>
              {columns.map((col, i) => (
                <th
                  key={i}
                  onClick={() => handleSort(col.key)}
                  className={`px-3 py-3 text-center border w-[120px] ${
                    col.key !== "view" ? "cursor-pointer" : ""
                  }`}
                >
                  {col.label}
                  {sortKey === col.key && col.key !== "view" && (
                    <span> {sortOrder === "asc" ? "▲" : "▼"}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {processedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-10 text-gray-400">
                  No Data Found
                </td>
              </tr>
            ) : (
              processedData.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">

                  {columns.map((col, j) => {
                    if (col.type === "view") {
                      return (
                        <td key={j} className="text-center border w-[120px]">
                          <Link to={`/${type}/${item.id}`}>
                            <img src="/eye.png" className="w-5 mx-auto" />
                          </Link>
                        </td>
                      );
                    }

                    return (
                      <td
                        key={j}
                        className={`text-center border truncate px-2 py-2 w-[120px] ${
                          col.highlight ? "font-semibold text-gray-900" : ""
                        }`}
                      >
                        {item[col.key] ?? "-"}
                      </td>
                    );
                  })}

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default DynamicTable;