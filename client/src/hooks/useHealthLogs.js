// client/src/hooks/useHealthLogs.js
import { useEffect, useState } from "react";

export default function useHealthLogs() {
  const [logs, setLogs] = useState([]);
  const token = localStorage.getItem("token");

  const fetchLogs = async () => {
    const res = await fetch("http://localhost:5000/api/health", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setLogs(await res.json());
  };

  const addLog = async (data) => {
    await fetch("http://localhost:5000/api/health", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    fetchLogs();
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return { logs, addLog };
}
