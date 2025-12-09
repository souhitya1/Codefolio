import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "HTML", value: 40, color: "#f87171" },
  { label: "CSS", value: 35, color: "#60a5fa" },
  { label: "JS", value: 25, color: "#facc15" },
];

export default function Analytics2() {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div
        className="rounded-2xl border border-white/30 backdrop-blur-md shadow-lg 
                   p-6 w-[350px] h-[380px] flex flex-col items-center justify-center"
        style={{
          background: "rgba(255,255,255,0.1)",
          boxShadow: "0 4px 20px rgba(255,255,255,0.1)",
        }}
      >
        <h2 className="text-white text-2xl font-semibold mb-4 tracking-wide">
          Skill Progress
        </h2>

        <PieChart
          series={[
            {
              innerRadius: 50,
              outerRadius: 100,
              data,
              arcLabel: (item) => `${item.value}%`,
              arcLabelMinAngle: 20,
            },
          ]}
          width={300}
          height={300}
          sx={{
            "& .MuiChartsLegend-root text": { fill: "white" },
            "& .MuiChartsArcLabel-root": { fill: "white", fontSize: 12 },
          }}
        />

        {/* Custom Legend */}
        <div className="mt-[-20px] flex gap-4 text-sm text-white">
          {data.map((item) => (
            <div key={item.label} className="flex items-center gap-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
