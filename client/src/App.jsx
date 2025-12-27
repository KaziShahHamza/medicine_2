import { useEffect, useState } from "react";
import MedicineForm from "./components/MedicineForm";
import MedicineList from "./components/MedicineList";
import useMedicineReminder from "./hooks/useMedicineReminder";
import TestReminderPage from "./pages/TestReminderPage";

export default function App() {
  const [medicines, setMedicines] = useState([]);

  const fetchMeds = async () => {
    const res = await fetch("http://localhost:5000/api/medicines");
    const data = await res.json();
    setMedicines(data);
  };

  useEffect(() => {
    Notification.requestPermission();
    fetchMeds();
  }, []);

  useMedicineReminder(medicines);

  return (
    <div style={{ padding: 40 }}>
      <h1>MediSync</h1>

      <MedicineForm onAdd={fetchMeds} />
      <MedicineList medicines={medicines} />

      <TestReminderPage medicines={medicines} />
    </div>
  );
}
