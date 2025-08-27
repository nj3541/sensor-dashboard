import React from "react";

function SensorTable({ data }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Readings</h2>
      <table className="w-full text-center border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Time</th>
            <th className="p-2">Voltage (V)</th>
            <th className="p-2">Current (A)</th>
            <th className="p-2">Power (W)</th>
            <th className="p-2">Temp (°C)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{row.time}</td>
              <td className="p-2">{row.voltage}</td>
              <td className="p-2">{row.current}</td>
              <td className="p-2">{row.power}</td>
              <td className="p-2">{row.temperature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SensorTable;
