// src/components/MedicineList.jsx
export default function MedicineList({ medicines }) {
  return (
    <ul>
      {medicines.map(med => (
        <li key={med._id}>
          {med.name} — {med.dosageTimes.join(", ")}
        </li>
      ))}
    </ul>
  );
}
