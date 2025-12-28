export default function MedicineList({ medicines, onEdit, onDelete }) {
  return (
    <ul>
      {medicines.map(med => (
        <li key={med._id} style={{ marginBottom: 10 }}>
          <strong>{med.name}</strong>
          {" — "}
          {med.dosageTimes.join(", ")}

          <button
            onClick={() => onEdit(med)}
            style={{ marginLeft: 10 }}
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(med._id)}
            style={{ marginLeft: 5 }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
