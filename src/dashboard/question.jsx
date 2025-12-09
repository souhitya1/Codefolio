import { useEffect, useState } from "react";
import ProgressBar from "../progressbar";

function HtmlqnaCard() {
  window.location.href = "/htmlqna";
}
function CssqnaCard() {
  window.location.href = "/cssqna";
}
function jsqnaCard() {
  window.location.href = "/jsqna";
}
function htmlcssjsqnacard() {
  window.location.href = "/htmlcssjs";
}

const cards = [
  {
    title: "HTML Questions",
    img: "/html image.jpg",
    desc: "These are the top 100 questions on HTML that will help you to improve your skills and knowledge.",
    click: HtmlqnaCard,
    color: "from-orange-500 to-red-600",
    icon: "🏗️"
  },
  {
    title: "CSS Questions",
    img: "/css image.webp",
    desc: "These are the top 100 questions on CSS that will help you to improve your skills and knowledge.",
    click: CssqnaCard,
    color: "from-blue-500 to-purple-600",
    icon: "🎨"
  },
  {
    title: "Javascript Questions",
    img: "/js image.webp",
    desc: "These are the top 100 questions on Javascript that will help you to improve your skills and knowledge.",
    click: jsqnaCard,
    color: "from-yellow-400 to-orange-500",
    icon: "⚡"
  },
  {
    title: "HTML, CSS, JS Questions",
    img: "/htmlcssjs.jpg",
    desc: "These are the top 100 questions on HTML, CSS, and JavaScript that will help you to improve your skills and knowledge.",
    click: htmlcssjsqnacard,
    color: "from-green-400 to-cyan-500",
    icon: "🚀"
  }
];

export default function Question() {
  const [overall, setOverall] = useState(0);
  const [sections, setSections] = useState({
    html: 0,
    css: 0,
    js: 0,
    mixed: 0
  });

  useEffect(() => {
    // fetch raw index values
    const htmlIndex = Number(localStorage.getItem("currentIndexhtml")) || 0;
    const cssIndex = Number(localStorage.getItem("currentIndexcss")) || 0;
    const jsIndex = Number(localStorage.getItem("currentIndexjs")) || 0;
    const mixedIndex = Number(localStorage.getItem("currentIndexmixed")) || 0;

    setSections({ 
     html: (htmlIndex / 25) * 100,
    css: (cssIndex / 25) * 100,
    js: (jsIndex / 25) * 100,
    mixed: (mixedIndex / 25) * 100
    });

    const total = (htmlIndex + cssIndex + jsIndex + mixedIndex);
    //const overallpercent= (total / 100) * 100;
    setOverall(total);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%)"
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400 opacity-20"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: Math.random() * 5 + "s"
            }}
          />
        ))}
      </div>

      <div className="px-8 py-16 md:px-16 lg:px-24 h-full text-white relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Top 100 Questions
          </span>

          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mt-4">
            Challenge yourself with curated questions designed to improve your web development skills
          </p>

          <div className="mt-8">
            <p className="text-lg font-bold mb-1">
              Overall Progress: {overall.toFixed(1)}%
            </p>
            <ProgressBar progress={overall} />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => {
            const progress =
              index === 0
                ? sections.html
                : index === 1
                ? sections.css
                : index === 2
                ? sections.js
                : sections.mixed;

            return (
              <div
                key={index}
                className="group relative transform transition-all"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-20 blur-xl transition-all rounded-2xl`}
                />

                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-500 shadow-xl group-hover:scale-105">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* icon */}
                    <div className="absolute top-4 right-4 text-4xl group-hover:scale-125 transition-all">
                      {card.icon}
                    </div>

                    {/* Progress line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700/50">
                      <div
                        className={`h-full bg-gradient-to-r ${card.color}`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{card.desc}</p>

                    <button
                      onClick={card.click}
                      className={`px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r ${card.color} rounded-xl transition-all`}
                    >
                      Start Learning →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
