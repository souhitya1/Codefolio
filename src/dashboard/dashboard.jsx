import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";
import Toggle from "./toggle";

export default function Dashboard() {
  const [htmlq, sethtmlq] = useState(Number(localStorage.getItem("currenthtmlProgress")));
  const [cssq, setcssq] = useState(Number(localStorage.getItem("currentcssProgress")));
  const [jsq, setjsq] = useState(Number(localStorage.getItem("currentjsProgress")));

  const cardData = [
    { title: "HTML Progress", progress: htmlq, progressb: <ProgressBar progress={htmlq} /> },
    { title: "CSS Progress", progress: cssq, progressb: <ProgressBar progress={cssq} /> },
    { title: "JavaScript Progress", progress: jsq, progressb: <ProgressBar progress={jsq} /> },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative overflow-auto">

      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="text-center py-5">
          <Link to="/">
            <p className="text-white text-2xl font-bold">Codefolio</p>
          </Link>
        </div>

        <div className="w-full bg-gray-500 h-px"></div>

        <div className="py-10 px-6">
          <p
            className="font-extrabold text-center sm:text-2xl lg:text-4xl"
            style={{
              background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome back, Learner! 👋
          </p>
          <p className="text-white text-center mt-3 sm:text-sm lg:text-xl">
            Continue your web development journey
          </p>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-xl border-2 border-blue-300 shadow-md hover:shadow-blue-500/30 transition-all p-6"
            >
              <p className="text-2xl text-white font-bold">{card.title}</p>

              <div className="mt-5">{card.progressb}</div>

              <p className="text-white text-3xl font-bold mt-3">{card.progress}%</p>
            </div>
          ))}
        </div>

        {/* Toggle Section */}
        <div className="flex justify-center mt-10">
          <Toggle />
        </div>
      </div>
    </div>
  );
}
