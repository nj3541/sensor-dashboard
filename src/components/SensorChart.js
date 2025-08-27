import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function SensorChart({ data }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">Sensor Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="voltage" stroke="#3b82f6" />
          <Line type="monotone" dataKey="current" stroke="#10b981" />
          <Line type="monotone" dataKey="power" stroke="#ef4444" />
          <Line type="monotone" dataKey="temperature" stroke="#f97316" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SensorChart;
