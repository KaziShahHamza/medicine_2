import { useEffect, useState } from "react";

const TIMES = ["morning", "noon", "night"];

export default function MedicineForm({ onSave, editing }) {
  const [name, setName] = useState("");
  const [dosageTimes, setDosageTimes] = useState([]);

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setDosageTimes(editing.dosageTimes);
    }
  }, [editing]);

  const toggleTime = (time) => {
    setDosageTimes(prev =>
      prev.includes(time)
        ? prev.filter(t => t !== time)
        : [...prev, time]
    );
  };

  const submit = (e) => {
    e.preventDefault();
    onSave({ name, dosageTimes });

    setName("");
    setDosageTimes([]);
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 20 }}>
      <input
        placeholder="Medicine name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      <div>
        {TIMES.map(time => (
          <label key={time} style={{ marginRight: 10 }}>
            <input
              type="checkbox"
              checked={dosageTimes.includes(time)}
              onChange={() => toggleTime(time)}
            />
            {time}
          </label>
        ))}
      </div>

      <button type="submit">
        {editing ? "Update Medicine" : "Add Medicine"}
      </button>
    </form>
  );
}
