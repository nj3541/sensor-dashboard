import React from "react";

function SensorCards({ latest }) {
  if (!latest) return <p className="text-center">Waiting for data...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white shadow-md rounded-xl p-4 text-center">
        <h2 className="text-lg font-semibold">Voltage</h2>
        <p className="text-xl text-blue-600">{latest.voltage} V</p>
      </div>
      <div className="bg-white shadow-md rounded-xl p-4 text-center">
        <h2 className="text-lg font-semibold">Current</h2>
        <p className="text-xl text-green-600">{latest.current} A</p>
      </div>
      <div className="bg-white shadow-md rounded-xl p-4 text-center">
        <h2 className="text-lg font-semibold">Power</h2>
        <p className="text-xl text-red-600">{latest.power} W</p>
      </div>
      <div className="bg-white shadow-md rounded-xl p-4 text-center">
        <h2 className="text-lg font-semibold">Temperature</h2>
        <p className="text-xl text-orange-600">{latest.temperature} °C</p>
      </div>
    </div>
  );
}

export default SensorCards;
