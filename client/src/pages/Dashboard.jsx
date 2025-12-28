// client/src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import MedicineForm from "../components/MedicineForm";
import MedicineList from "../components/MedicineList";

export default function Dashboard() {
  const [meds, setMeds] = useState([]);
  const [editing, setEditing] = useState(null);

  const token = localStorage.getItem("token");

  const fetchMeds = async () => {
    const res = await fetch("http://localhost:5000/api/medicines", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setMeds(await res.json());
  };

  useEffect(() => {
    fetchMeds();
  }, []);

  const saveMedicine = async (data) => {
    if (editing) {
      await fetch(`http://localhost:5000/api/medicines/${editing._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      setEditing(null);
    } else {
      await fetch("http://localhost:5000/api/medicines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
    }

    fetchMeds();
  };

  const deleteMedicine = async (id) => {
    await fetch(`http://localhost:5000/api/medicines/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchMeds();
  };

  return (
    <>
      <div style={{ padding: 24 }}>
        <h2>Your Medicines</h2>

        <MedicineForm
          onSave={saveMedicine}
          editing={editing}
        />

        <MedicineList
          medicines={meds}
          onEdit={setEditing}
          onDelete={deleteMedicine}
        />
      </div>
    </>
  );
}
