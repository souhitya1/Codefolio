export default function Whatlearn() {
  return (
    <div className="py-20  w-full bg-black relative">
      {/* Midnight Mist Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
          `,
        }}
      />

      <div className="relative z-10">
        <p className="text-white text-5xl font-bold text-center mt-20">
          What you'll learn?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-16">
          {/* CARD 1 */}
          <div className="border-2 border-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            <div className="bg-gray-600 w-full h-40 rounded-t-xl p-5 flex flex-col justify-center">
              <p className="text-white text-2xl font-bold">HTML</p> 
              <p className="text-white text-lg mt-1">Structure & Content</p>
            </div>
            <ul className="text-white text-lg p-6 grid grid-rows-4 gap-3">
              <li>HTML basics and documents</li>
              <li>Common elements and attributes</li>
              <li>Lists, tables & semantic HTML</li>
              <li>Forms and input validation</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="border-2 border-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            <div className="bg-gray-600 w-full h-40 rounded-t-xl p-5 flex flex-col justify-center">
              <p className="text-white text-2xl font-bold">CSS</p>
              <p className="text-white text-lg mt-1">Styling & Layout</p>
            </div>
            <ul className="text-white text-lg p-6 grid grid-rows-4 gap-3">
              <li>Selectors & box model</li>
              <li>Flexbox & Grid layout</li>
              <li>Responsive design</li>
              <li>Animations & transitions</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="border-2 border-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            <div className="bg-gray-600 w-full h-40 rounded-t-xl p-5 flex flex-col justify-center">
              <p className="text-white text-2xl font-bold">JavaScript</p>
              <p className="text-white text-lg mt-1">Logic & Interaction</p>
            </div>
            <ul className="text-white text-lg p-6 grid grid-rows-4 gap-3">
              <li>Variables & functions</li>
              <li>DOM manipulation</li>
              <li>Events & APIs</li>
              <li>Async & Fetch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
