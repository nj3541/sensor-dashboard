import React, { useState, useEffect } from "react";
import SensorCards from "./components/SensorCards";
import SensorChart from "./components/SensorChart";
import SensorTable from "./components/SensorTable";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newReading = {
        time: new Date().toLocaleTimeString(),
        voltage: (220 + Math.random() * 10 - 5).toFixed(2),
        current: (2 + Math.random() * 0.5 - 0.25).toFixed(2),
        power: (440 + Math.random() * 20 - 10).toFixed(2),
        temperature: (25 + Math.random() * 5 - 2.5).toFixed(2),
      };

      setData((prev) => [...prev.slice(-9), newReading]); // keep last 10 readings
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">
        ⚡ Sensor Data Dashboard
      </h1>
      <SensorCards latest={data[data.length - 1]} />
      <SensorChart data={data} />
      <SensorTable data={data} />
    </div>
  );
}

export default App;
