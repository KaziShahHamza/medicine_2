import { useState } from "react";

export default function HealthLogForm({ onAdd }) {
  const [type, setType] = useState("bp");
  const [form, setForm] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    await onAdd({ type, ...form });
    setForm({});
  };

  return (
    <form onSubmit={submit}>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="bp">Blood Pressure</option>
        <option value="diabetes">Diabetes</option>
      </select>

      {type === "bp" && (
        <>
          <input
            placeholder="High BP (Systolic)"
            type="number"
            onChange={e => setForm(f => ({ ...f, High: e.target.value }))}
          />
          <input
            placeholder="Low BP (Diastolic)"
            type="number"
            onChange={e => setForm(f => ({ ...f, Low: e.target.value }))}
          />
        </>
      )}

      {type === "diabetes" && (
        <input
          placeholder="Glucose Level"
          type="number"
          onChange={e => setForm(f => ({ ...f, glucose: e.target.value }))}
        />
      )}

      <button>Add Log</button>
    </form>
  );
}
