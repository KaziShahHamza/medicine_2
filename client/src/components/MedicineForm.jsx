// src/components/MedicineForm.jsx
import { useState } from "react";

export default function MedicineForm({ onAdd }) {
  const [name, setName] = useState("");
  const [dosageTimes, setDosageTimes] = useState([]);

  const toggleTime = (time) => {
    setDosageTimes(prev =>
      prev.includes(time)
        ? prev.filter(t => t !== time)
        : [...prev, time]
    );
  };

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/medicines", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, dosageTimes })
    });

    setName("");
    setDosageTimes([]);
    onAdd();
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Medicine name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      {["morning", "noon", "night"].map(time => (
        <label key={time}>
          <input
            type="checkbox"
            checked={dosageTimes.includes(time)}
            onChange={() => toggleTime(time)}
          />
          {time}
        </label>
      ))}

      <button>Add Medicine</button>
    </form>
  );
}
