// client/src/components/MedicineForm.jsx
import { useEffect, useState } from "react";

const TIMES = ["morning", "noon", "night"];

export default function MedicineForm({ onSave, editing }) {
  const [name, setName] = useState("");
  const [dosageTimes, setDosageTimes] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setDosageTimes(editing.dosageTimes || []);
      setImageUrl(editing.imageUrl || "");
    }
  }, [editing]);

  const toggleTime = (time) => {
    setDosageTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const submit = (e) => {
    e.preventDefault();
    onSave({ name, dosageTimes, imageUrl });
    setName("");
    setDosageTimes([]);
    setImageUrl("");
  };

  return (
    <form onSubmit={submit} className="card space-y-4">
      <input
        placeholder="Medicine name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
        required
      />

      <input
        placeholder="Image URL (optional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="input"
      />

      <div className="flex gap-4">
        {TIMES.map((time) => (
          <label key={time} className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={dosageTimes.includes(time)}
              onChange={() => toggleTime(time)}
            />
            {time.charAt(0).toUpperCase() + time.slice(1)}
          </label>
        ))}
      </div>

      <button type="submit" className="btn-primary w-full">
        {editing ? "Update Medicine" : "Add Medicine"}
      </button>
    </form>
  );
}
