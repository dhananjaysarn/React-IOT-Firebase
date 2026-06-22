import React, { useEffect, useState } from "react";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";

const Dashboard = () => {
  const [sensorData, setSensorData] = useState({
    Temperature: 0,
    Humidity: 0,
    Gas: 0,
  });

  useEffect(() => {
    const sensorRef = ref(database, "SensorData");

    onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        setSensorData(data);
      }
    });
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">
        🌐 Smart IoT Dashboard
      </h1>

      <p className="dashboard-subtitle">
        Real-Time Sensor Monitoring System
      </p>

      <div className="card-container">

        <div className="sensor-card">
          <div className="sensor-icon">🌡️</div>
          <h2 className="sensor-name">Temperature</h2>
          <div className="sensor-value temp">
            {sensorData.Temperature}°C
          </div>
          <div className="status">Live Reading</div>
        </div>

        <div className="sensor-card">
          <div className="sensor-icon">💧</div>
          <h2 className="sensor-name">Humidity</h2>
          <div className="sensor-value humidity">
            {sensorData.Humidity}%
          </div>
          <div className="status">Live Reading</div>
        </div>

        <div className="sensor-card">
          <div className="sensor-icon">☁️</div>
          <h2 className="sensor-name">Gas Level</h2>
          <div className="sensor-value gas">
            {sensorData.Gas}
          </div>
          <div className="status">Live Reading</div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;