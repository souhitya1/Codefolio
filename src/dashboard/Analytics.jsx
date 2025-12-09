import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import Analytics2 from "./analytics2";

export default function Analytics() {
  const [htmlin] = useState(Number(localStorage.getItem("currentIndexhtml")));
  const [cssin] = useState(Number(localStorage.getItem("currentIndexcss")));
  const [jsin] = useState(Number(localStorage.getItem("currentIndexjs")));

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      
      {/* Chart Container */}
      <div
        className="rounded-xl border border-white/30 shadow-xl 
                   p-4 w-full max-w-3xl"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          color: "white",
        }}
      >
        <BarChart
          xAxis={[
            {
              data: ['Progress'],
              labelStyle: { fill: "white" },
              tickLabelStyle: { fill: "white" },
            },
          ]}
          yAxis={[
            {
              labelStyle: { fill: "white" },
              tickLabelStyle: { fill: "white" },
            },
          ]}
          series={[
            { data: [htmlin], label: "HTML" },
            { data: [cssin], label: "CSS" },
            { data: [jsin], label: "JS" },
          ]}
          height={300}
          sx={{
            "& .MuiChartsAxis-root line": { stroke: "white" },
            "& .MuiChartsAxis-root text": { fill: "white" },
            "& .MuiChartsGrid-line": { stroke: "rgba(255,255,255,0.3)" },
            "& .MuiChartsLegend-root text": { fill: "white" },
          }}
        />
      </div>

      {/* Analytics2 Section */}
      <div className="mt-10">
        <Analytics2 />
      </div>
    </div>
  );
}
