// client/src/pages/Health.jsx
import useHealthLogs from "../hooks/useHealthLogs";
import HealthLogForm from "../components/HealthLogForm";
import HealthCharts from "../components/HealthCharts";

export default function Health() {
  const { logs, addLog } = useHealthLogs();

  return (
    <div className="container py-8">
      <h2 className="text-2xl font-semibold mb-6">Health Logs</h2>

      <div className="grid gap-10" style={{ gridTemplateColumns: '30% 70%' }}>
        <div>
          <HealthLogForm onAdd={addLog} />
        </div>

        <div className="space-y-10">
          <HealthCharts logs={logs} />
        </div>
      </div>
    </div>
  );
}
