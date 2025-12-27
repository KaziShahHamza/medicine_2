import { TIME_MAP } from "../utils/timeMap";

const SLOT_LABEL = {
  morning: "Morning",
  noon: "Noon",
  night: "Night"
};

export default function TestReminderPage({ medicines }) {

  const triggerSlot = (slot) => {
    if (Notification.permission !== "granted") {
      alert("Notification permission not granted");
      return;
    }

    const medsForSlot = medicines
      .filter(med => med.dosageTimes.includes(slot))
      .map(med => med.name);

    if (medsForSlot.length === 0) {
      alert(`No ${slot} medicines found`);
      return;
    }

    new Notification("MediSync Reminder", {
      body: `Take your ${SLOT_LABEL[slot]} medicines: ${medsForSlot.join(", ")}`
    });
  };

  return (
    <div style={{ marginTop: 40 }}>
      <h2>Test Notifications</h2>

      <button onClick={() => triggerSlot("morning")}>
        Trigger Morning
      </button>

      <button onClick={() => triggerSlot("noon")}>
        Trigger Noon
      </button>

      <button onClick={() => triggerSlot("night")}>
        Trigger Night
      </button>
    </div>
  );
}
