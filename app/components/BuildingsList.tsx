"use client";
import { useEffect, useState } from "react";

type Building = {
  id: number;
  name: string;
  code: string;
  floors: number;
  type: string;
};

export default function BuildingsList() {
  const [buildings, setBuildings] = useState<Building[]>([]);

  useEffect(() => {
    fetch("/api/buildings")
      .then((res) => res.json())
      .then((data) => setBuildings(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Campus Buildings
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {buildings.map((b) => (
          <li
            key={b.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between border border-gray-100"
          >
            {/* Building Name */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{b.name}</h2>

            {/* Building Details */}
            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-medium text-gray-700">Code:</span> {b.code}
              </p>
              <p>
                <span className="font-medium text-gray-700">Floors:</span> {b.floors}
              </p>
              <p>
                <span className="font-medium text-gray-700">Type:</span>{" "}
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {b.type}
                </span>
              </p>
            </div>

            {/* Optional: View Details Button */}
            <button
              className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              onClick={() => alert(`View details for ${b.name}`)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
