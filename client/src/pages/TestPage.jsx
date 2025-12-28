// client/src/pages/TestPage.jsx
import TestReminderPage from "./TestReminderPage";
import { useMedicines } from "../context/MedicineContext";

export default function TestPage() {
  const { medicines } = useMedicines();
    console.log("Medicines:", medicines);


  return (
    <div style={{ padding: 24 }}>
      <TestReminderPage medicines={medicines} />
    </div>
  );
}
