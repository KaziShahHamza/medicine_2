import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

export default function HealthCharts({ logs }) {
  const bpLogs = logs.filter(l => l.type === "bp");
  const sugarLogs = logs.filter(l => l.type === "diabetes");

  return (
    <>
      {bpLogs.length > 0 && (
        <Line
          data={{
            labels: bpLogs.map(l =>
              new Date(l.createdAt).toLocaleDateString()
            ),
            datasets: [
              {
                label: "Systolic",
                data: bpLogs.map(l => l.High)
              },
              {
                label: "Diastolic",
                data: bpLogs.map(l => l.Low)
              }
            ]
          }}
        />
      )}

      {sugarLogs.length > 0 && (
        <Line
          data={{
            labels: sugarLogs.map(l =>
              new Date(l.createdAt).toLocaleDateString()
            ),
            datasets: [
              {
                label: "Glucose Level",
                data: sugarLogs.map(l => l.glucose)
              }
            ]
          }}
        />
      )}
    </>
  );
}
