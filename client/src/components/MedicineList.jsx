// client/src/components/MedicineList.jsx
export default function MedicineList({ medicines, onEdit, onDelete }) {
  return (
    <ul className="space-y-4">
      {medicines.map((med) => (
        <li
          key={med._id}
          className="flex justify-between items-center p-2 rounded shadow-lg hover:shadow-md transition"
        >
          <div className="flex items-center gap-4">
            <img
              src={med.imageUrl || "https://via.placeholder.com/60"}
              alt={med.name}
              className="w-24 h-24 object-cover rounded border"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/60";
              }}
            />

            <div>
              <strong className="text-2xl">{med.name}</strong>
              <p className="text-lg text-slate-600">
                {med.dosageTimes
                  .map(t => t.charAt(0).toUpperCase() + t.slice(1))
                  .join(", ")}
              </p>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <button
              onClick={() => onEdit(med)}
              className="px-3 py-1 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(med._id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
